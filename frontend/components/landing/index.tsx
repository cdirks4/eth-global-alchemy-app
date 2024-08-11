"use client";
import "../../app/globals.css";
import { useRouter } from "next/navigation";
export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white ">
      {/* Header */}
      <header className="bg-gray-800 py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            TikTok Clippers & Content Creators Connect
          </h1>
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            onClick={() => router.push("/api/auth")}
          >
            Connect Wallet & TikTok
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-20 px-4 text-center flex-grow">
        <h2 className="text-4xl font-bold mb-6">
          Bridging the Gap Between TikTok Creators and Clippers
        </h2>
        <p className="text-lg mb-10">
          A platform for content creators to find the perfect clips and for
          clippers to showcase their talent. Create bounties, submit clips, and
          get rewarded.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg">
            Proceed as Content Creator
          </button>
          <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg">
            Proceed as Clip Creator
          </button>
        </div>
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
