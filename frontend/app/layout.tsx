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

  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider mode="dark">
            <body>
              <Toaster position="bottom-right" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "105vh",
                }}
              >
                <div style={{ flexGrow: 1 }}>{children}</div>
              </div>
            </body>
          </ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </html>
  );
}
