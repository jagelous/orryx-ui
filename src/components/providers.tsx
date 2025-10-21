"use client";

import {
  WagmiProviderComponent,
  QueryClientProviderComponent,
  queryClient,
  config,
} from "@/lib/wagmi";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProviderComponent config={config}>
      <QueryClientProviderComponent client={queryClient}>
        {children}
      </QueryClientProviderComponent>
    </WagmiProviderComponent>
  );
}
