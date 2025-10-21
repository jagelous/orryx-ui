"use client";
import Layout from "@/components/layout";
import StrategyGrowth from "@/components/charts/StrategyGrowth";
import GeneralStatistics from "@/components/charts/GeneralStatistics";
import MarketExposure from "@/components/charts/MarketExposure";
import HistoryTable from "@/components/HistoryTable";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CopyDashboard() {
  const [selectedTrade, setSelectedTrade] = useState<number | null>(null);

  const trades = [
    {
      id: 1,
      icon: "icons/eth.svg",
      title: "ETH-PERP Long 5x",
      subtitle: "2025-09-18 ETH",
      percentage: "+3.0%",
      status: "Open",
    },
    {
      id: 2,
      icon: "icons/btc.svg",
      title: "BTC-PERP Short 10x",
      subtitle: "2025-09-18 10x 0.02 BTC",
      percentage: "+3.0%",
      status: "Open",
    },
    {
      id: 3,
      icon: "icons/btc.svg",
      title: "SOL-PERP Long 3d",
      subtitle: "2025-09-18 3x 2.5 SOL",
      percentage: "+3.0%",
      status: "Open",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <div className="flex gap-[18px]">
          <div className="flex-[1_1_60%] bg-[#1f1f1f] rounded-[20px] p-3">
            <div className="grid grid-flow-col grid-rows-2 gap-3">
              <div className="col-span-1 row-span-1 bg-[#242424] rounded-[16px] p-[14px]">
                <div className="flex flex-col gap-[14px]">
                  <div className="flex gap-[10px]">
                    <Image
                      src="icons/btc.svg"
                      alt=""
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                    />
                    <h3 className="text-[18px] font-medium text-white">
                      Latest Master Trade
                    </h3>
                  </div>
                  <p className="text-[#8D8D8D] text-[14px] font-normal">
                    ETH-PERP • Long 5x • Entry $2,350 • Status: Open
                  </p>
                </div>
              </div>
              <div className="col-span-1 row-span-1 bg-[#242424] rounded-[16px] p-[14px]">
                <div className="flex justify-between gap-[18px]">
                  <div className="flex flex-col justify-between">
                    <p className="text-[#8D8D8D] text-[14px] font-normal">
                      Your Copy Wallet
                    </p>
                    <p className="text-[22px] font-medium pt-5 text-white">
                      1250.34 USDT
                    </p>
                    <p className="text-[#8D8D8D] text-[12px] font-normal pt-2">
                      Available
                    </p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <Button
                      variant="outline"
                      className="rounded-[16px] bg-[#2D2D2D] border-none px-4 py-5 text-white font-normal text-[16px] hover:bg-[#3A3A3A]"
                    >
                      Manage Wallet
                    </Button>
                    <Button
                      variant="default"
                      className="rounded-[16px] bg-[#F5BA07] border-none px-4 py-5 font-normal text-[16px] hover:bg-[#E6A800]"
                    >
                      Stop Copying
                    </Button>
                  </div>
                </div>
              </div>
              <div className="row-span-2 bg-[#242424] rounded-[16px] p-[14px]">
                <StrategyGrowth />
              </div>
            </div>
          </div>
          <div className="flex-[1_1_40%] bg-[#1f1f1f] rounded-[20px] p-4">
            <div className="bg-[#242424] rounded-[16px] p-[14px] h-full">
              <h3 className="text-[18px] font-medium text-white mb-2">
                Master Trade Feed
              </h3>
              <p className="text-[#8D8D8D] text-[14px] font-normal mb-4">
                Live and recent trades from leaders you follow.
              </p>
              <div className="space-y-3">
                {trades.map((trade) => (
                  <div
                    key={trade.id}
                    className={`bg-[#2A2A2A] rounded-[60px] py-[10px] pl-[12px] pr-[60px] relative cursor-pointer transition-all duration-200 border-2 ${
                      selectedTrade === trade.id
                        ? "border-[#CCE118]"
                        : "border-transparent hover:bg-[#3A3A3A]"
                    }`}
                    onClick={() =>
                      setSelectedTrade(
                        selectedTrade === trade.id ? null : trade.id
                      )
                    }
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={trade.icon}
                        alt=""
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                      <div className="flex-1">
                        <h4 className="text-white text-[16px] font-medium">
                          {trade.title}
                        </h4>
                        <p className="text-[#8D8D8D] text-[14px] font-normal">
                          {trade.subtitle}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-[16px] font-medium">
                          {trade.percentage}
                        </p>
                        <p className="text-[#8D8D8D] text-[14px] font-normal">
                          {trade.status}
                        </p>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      className={`absolute -right-2 top-1/2 -translate-y-1/2 w-[56px] h-[56px] rounded-full bg-[#3A3A3A] hover:bg-[#4A4A4A] transition-colors border-2 ${
                        selectedTrade === trade.id
                          ? "border-[#CCE118]"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src="icons/rise_arrow.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[18px]">
          <div className="flex-[1_1_50%] bg-[#1f1f1f] rounded-[10px] p-3">
            <GeneralStatistics />
          </div>
          <div className="flex-[1_1_50%] bg-[#1f1f1f] rounded-[10px] p-3">
            <MarketExposure />
          </div>
        </div>
        <div className="mt-4">
          <HistoryTable title="Trade History" />
        </div>
      </div>
    </Layout>
  );
}
