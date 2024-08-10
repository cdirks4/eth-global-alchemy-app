"use client";
import InstructionsComponent from "@/components/instructionsComponent";
import styles from "./page.module.css";
import "./globals.css";
import TikTokAuth from "@/components/tikTokAuth";
import { ConnectKitButton } from "connectkit";
import LandingPage from "@/components/landing";
export default function Home() {
  return (
    <main className="bg-gray-900">
      <LandingPage />
    </main>
  );
}
