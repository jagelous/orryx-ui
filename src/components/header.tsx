import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WalletConnectButton } from "@/components/wallet-connect-button";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search Here..."
          className="bg-[#171717] border-none text-white placeholder-gray-400 rounded-[12px] w-[280px] h-[50px] pr-12 text-[16px] font-normal pl-4 py-4"
        />
        <Badge
          variant="secondary"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[14px] bg-[#2d2d2d] border-none px-3 py-1"
        >
          ⌘K
        </Badge>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="h-[50px] w-[50px] rounded-full bg-[#171717] border-gray-700 text-gray-400 hover:bg-gray-700"
        >
          <Image
            src="/icons/message.svg"
            alt="Message"
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
          />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-[50px] w-[50px] rounded-full bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700"
        >
          <Image
            src="/icons/heart.svg"
            alt="Heart"
            width={50}
            height={50}
            className="w-[50px] h-[50px]"
          />
        </Button>
        <WalletConnectButton />
      </div>
    </header>
  );
}
