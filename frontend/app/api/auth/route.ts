import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
export async function GET(req: NextRequest) {
  const csrfState = Math.random().toString(36).substring(2); // Generate a unique CSRF state token
  const CLIENT_KEY = process.env.CLIENT_KEY;
  const url = new URL("https://www.tiktok.com/v2/auth/authorize/");
  const codeVerifier = crypto.randomBytes(32).toString("hex");
  const REDIRECT_URI = process.env.REDIRECT_URI || "";
  const codeChallenge = crypto
    .createHash("sha256")
    .update(codeVerifier)
    .digest("base64url");
  url.searchParams.append("client_key", CLIENT_KEY!);
  url.searchParams.append("response_type", "code");
  url.searchParams.append("scope", "user.info.basic");
  url.searchParams.append("redirect_uri", encodeURI(REDIRECT_URI));
  url.searchParams.append("state", csrfState);
  url.searchParams.append("code_challenge", codeChallenge);
  url.searchParams.append("code_challenge_method", "S256");

  const response = NextResponse.redirect(url.toString());

  response.cookies.set("csrfState", csrfState, {
    maxAge: 60000, // 1 minute
  });

  return response;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { code } = body;
  const CLIENT_KEY = process.env.CLIENT_KEY;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const REDIRECT_URI = process.env.REDIRECT_URI || "";

  const params = new URLSearchParams();
  params.append("client_key", CLIENT_KEY!);
  params.append("client_secret", CLIENT_SECRET!);
  params.append("code", code);
  params.append("grant_type", "authorization_code");
  params.append("redirect_uri", encodeURI(REDIRECT_URI));

  try {
    const response = await fetch(
      "https://open.tiktokapis.com/v2/oauth/token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch TikTok token" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch TikTok token" },
      { status: 500 }
    );
  }
}
