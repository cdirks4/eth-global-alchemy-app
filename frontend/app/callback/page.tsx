"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

function Callback() {
  const router = useRouter();
  const [hasMutated, setHasMutated] = useState(false); // Track if the mutation has been triggered
  const exchangeCodeMutation = useMutation({
    mutationFn: (code) => axios.post("/api/auth", { code }),
    onSuccess: (data) => {
      router.push("/bounties");
    },
    onError: (error) => {
      console.error("Error during TikTok authentication", error);
      alert(`Error during TikTok authentication ${error}`);
      router.push("/");
    },
  });
  useEffect(() => {
    if (!hasMutated) {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (code) {
        exchangeCodeMutation.mutate(code);
        setHasMutated(true);
      }
    }
  }, [hasMutated, exchangeCodeMutation]);
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            TikTok Clippers & Content Creators Connect
          </h1>
        </div>
      </header>

      {/* Loading Content */}
      <main className="container mx-auto py-20 px-4 text-center flex-grow flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-6">Connecting to TikTok...</h2>
        <p className="text-lg mb-10">
          Please wait while we authenticate your TikTok account. This may take a
          few moments.
        </p>
        <div className="loader mb-6"></div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2024 TikTok Clippers & Content Creators Connect. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Callback;
