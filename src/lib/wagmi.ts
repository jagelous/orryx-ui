import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { createAppKit } from "@reown/appkit/react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  mainnet,
  arbitrum,
  polygon,
  base,
  optimism,
  sepolia,
} from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Create a metadata object - this will be used by the appkit
export const metadata = {
  name: "Orryx",
  description: "Professional cryptocurrency copy trading platform",
  url: "https://orryx.com", // origin must match your domain & subdomain
  icons: ["/icons/logo.svg"],
};

// Create wagmi adapter
const wagmiAdapter = new WagmiAdapter({
  networks: [mainnet, arbitrum, polygon, base, optimism, sepolia],
  projectId,
});

// Create the modal
export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, arbitrum, polygon, base, optimism, sepolia],
  projectId,
  metadata,
  features: {
    analytics: true,
    email: false,
    socials: ["google", "x", "github", "discord"],
    emailShowWallets: true,
  },
  themeMode: "dark",
  themeVariables: {
    "--w3m-color-mix": "#1A1A1A",
    "--w3m-color-mix-strength": 50,
    "--w3m-accent": "#00D4AA",
    "--w3m-border-radius-master": "8px",
    "--w3m-font-size-master": "15px",
  },
});

// Create wagmi config
export const config = wagmiAdapter.wagmiConfig;

// Create query client
export const queryClient = new QueryClient();

// Export providers
export const WagmiProviderComponent = WagmiProvider;
export const QueryClientProviderComponent = QueryClientProvider;
