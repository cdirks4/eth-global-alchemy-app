"use client";
import InstructionsComponent from "@/components/instructionsComponent";
import styles from "./page.module.css";
import "./globals.css";
import TikTokAuth from "@/components/tikTokAuth";

export default function Home() {
  return (
    <main className={styles.main}>
      <InstructionsComponent></InstructionsComponent>
      <TikTokAuth></TikTokAuth>
    </main>
  );
}
