"use client";
import React from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  // mainnet,
  // polygon,
  // optimism,
  // arbitrum,
  polygonMumbai,
} from "wagmi/chains";

// Choose which chains you'd like to show
const chains = [polygonMumbai]; //, polygon, mainnet, optimism, arbitrum];
import "./globals.css";

export default function RootLayout({ children }) {
  const config = createConfig(
    getDefaultConfig({
      // Required API Keys
      alchemyId: process.env.ALCHEMY_API_KEY, // or infuraId
      walletConnectProjectId: "demo",

      // Required
      appName: "You Create Web3 Dapp",

      // Optional
      appDescription: "Your App Description",
      appUrl: "https://family.co", // your app's url
      appIcon: "https://family.co/logo.png", // your app's logo,no bigger than 1024x1024px (max. 1MB)
    })
  );

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // Default options for queries
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: false,
      },
      mutations: {
        // Default options for mutations
        retry: 1, // Retry failed mutations once
      },
    },
  });

  return (
    <html lang="en">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider mode="dark">
            <body>
              <Toaster position="bottom-right" />

              <div style={{ flexGrow: 1 }}>{children}</div>
            </body>
          </ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </html>
  );
}
