"use client";

import { useAccount, useDisconnect } from "wagmi";
import { Button } from "@/components/ui/button";
import { appKit } from "@/lib/wagmi";
import { useAppKit } from "@reown/appkit/react";
import { useEffect, useState } from "react";

export function WalletConnectButton() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { open } = useAppKit();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button className="bg-[#F4FFFE] h-[50px] hover:bg-[#F4FFFE]/70 px-4 py-2 rounded-[50px] text-[16px] font-bold px-5 flex items-center gap-2 text-black">
        <span>Connect Wallet</span>
      </Button>
    );
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <Button
          onClick={() => open()}
          className="bg-[#2D2D2D] hover:bg-[#2D2D2D]/70 px-4 py-2 rounded-[50px] text-[16px] font-bold px-5 flex items-center gap-2 text-white"
        >
          <span>{`${address.slice(0, 6)}...${address.slice(-4)}`}</span>
        </Button>
        <Button
          onClick={() => disconnect()}
          variant="outline"
          className="h-[50px] w-[50px] rounded-full bg-[#171717] border-gray-700 text-gray-400 hover:bg-gray-700"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={() => open()}
      className="bg-[#F4FFFE] h-[50px] hover:bg-[#F4FFFE]/70 px-4 py-2 rounded-[50px] text-[16px] font-bold px-5 flex items-center gap-2 text-black"
    >
      <span>Connect Wallet</span>
    </Button>
  );
}
