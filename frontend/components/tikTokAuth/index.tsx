"use client";
import React, { useEffect } from "react";

const CLIENT_KEY = ENV
const REDIRECT_URI = ENV

export default function TikTokAuth() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      fetch("https://open-api.tiktok.com/oauth/access_token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_key: CLIENT_KEY,
          client_secret: "MtsShPkNDOOzn4MZCS9s12OBiee94R2N",
          code,
          grant_type: "authorization_code",
          redirect_uri: REDIRECT_URI,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle access token here
          console.log(data);
        })
        .catch((error) => {
          console.error("Error getting TikTok access token", error);
        });
    }
  }, []);

  return (
    <a
      href={`https://www.tiktok.com/auth/authorize/?client_key=${CLIENT_KEY}&scope=user.info.basic,video.list&response_type=code&redirect_uri=${encodeURIComponent(
        REDIRECT_URI
      )}`}
    >
      Login with TikTok
    </a>
  );
}
