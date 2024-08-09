"use client";
import React, { useEffect } from "react";

export default function TikTokAuth() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
  }, []);

  return <a href={"/api/auth"}>Login with TikTok</a>;
}
