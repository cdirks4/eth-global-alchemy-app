"use client";
import InstructionsComponent from "@/components/instructionsComponent";
import styles from "./page.module.css";
import "./globals.css";
import TikTokAuth from "@/components/tikTokAuth";
import { ConnectKitButton } from "connectkit";
export default function Home() {
  return (
    <main className={styles.main}>
      <InstructionsComponent></InstructionsComponent>
      <TikTokAuth></TikTokAuth>
      <ConnectKitButton />
    </main>
  );
}
