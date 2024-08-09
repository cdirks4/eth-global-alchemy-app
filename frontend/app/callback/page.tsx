"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";

function Callback() {
  const router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      // Exchange the code for an access token
      axios
        .post("/api/tiktok-auth", { code })
        .then((response) => {
          // Handle success (e.g., navigate to a dashboard)
          router.push("/dashboard");
        })
        .catch((error) => {
          // Handle error
          console.error("Error during TikTok authentication", error);
        });
    }
  }, [router]);

  return <div>Authenticating...</div>;
}

export default Callback;
