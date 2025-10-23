import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import StrategyItem from "@/components/StrategyItem";

export default function MyStrategy() {
  const strategyData = [
    {
      name: "YHW1",
      rank: "34/500",
      pnl: "+324,377.92",
      roi: "ROI +15.12%",
      drawdown: "0.00%",
      sharpeRatio: "2.45",
      monthlyData: [
        { month: "Jun", value: 0.2 },
        { month: "Jul", value: 0.3 },
        { month: "Aug", value: 0.4 },
        { month: "Sep", value: 0.5 },
        { month: "Oct", value: 0.8 },
      ],
    },
    {
      name: "JeromeLoo 老王",
      rank: "12/500",
      pnl: "+156,892.45",
      roi: "ROI +8.45%",
      drawdown: "2.10%",
      sharpeRatio: "1.89",
      monthlyData: [
        { month: "Jun", value: 0.3 },
        { month: "Jul", value: 0.4 },
        { month: "Aug", value: 0.6 },
        { month: "Sep", value: 0.7 },
        { month: "Oct", value: 0.6 },
      ],
    },
    {
      name: "smalflame",
      rank: "67/500",
      pnl: "+89,234.12",
      roi: "ROI +12.34%",
      drawdown: "1.50%",
      sharpeRatio: "2.12",
      monthlyData: [
        { month: "Jun", value: 0.1 },
        { month: "Jul", value: 0.2 },
        { month: "Aug", value: 0.3 },
        { month: "Sep", value: 0.4 },
        { month: "Oct", value: 0.7 },
      ],
    },
    {
      name: "Marinabay",
      rank: "23/500",
      pnl: "+445,123.78",
      roi: "ROI +18.67%",
      drawdown: "0.80%",
      sharpeRatio: "2.78",
      monthlyData: [
        { month: "Jun", value: 0.4 },
        { month: "Jul", value: 0.5 },
        { month: "Aug", value: 0.6 },
        { month: "Sep", value: 0.8 },
        { month: "Oct", value: 0.9 },
      ],
    },
    {
      name: "CryptoMaster",
      rank: "45/500",
      pnl: "+234,567.89",
      roi: "ROI +11.23%",
      drawdown: "1.20%",
      sharpeRatio: "1.95",
      monthlyData: [
        { month: "Jun", value: 0.2 },
        { month: "Jul", value: 0.3 },
        { month: "Aug", value: 0.5 },
        { month: "Sep", value: 0.6 },
        { month: "Oct", value: 0.7 },
      ],
    },
    {
      name: "TraderPro",
      rank: "89/500",
      pnl: "+123,456.78",
      roi: "ROI +9.87%",
      drawdown: "2.50%",
      sharpeRatio: "1.67",
      monthlyData: [
        { month: "Jun", value: 0.3 },
        { month: "Jul", value: 0.4 },
        { month: "Aug", value: 0.3 },
        { month: "Sep", value: 0.5 },
        { month: "Oct", value: 0.6 },
      ],
    },
    {
      name: "QuantKing",
      rank: "15/500",
      pnl: "+567,890.12",
      roi: "ROI +22.45%",
      drawdown: "0.50%",
      sharpeRatio: "3.12",
      monthlyData: [
        { month: "Jun", value: 0.5 },
        { month: "Jul", value: 0.6 },
        { month: "Aug", value: 0.7 },
        { month: "Sep", value: 0.8 },
        { month: "Oct", value: 0.9 },
      ],
    },
    {
      name: "AlphaTrader",
      rank: "78/500",
      pnl: "+98,765.43",
      roi: "ROI +7.65%",
      drawdown: "3.20%",
      sharpeRatio: "1.45",
      monthlyData: [
        { month: "Jun", value: 0.2 },
        { month: "Jul", value: 0.1 },
        { month: "Aug", value: 0.3 },
        { month: "Sep", value: 0.4 },
        { month: "Oct", value: 0.5 },
      ],
    },
  ];

  return (
    <Layout>
      <div>
        <div className="bg-[#1F1F1F] rounded-[20px] py-5 px-4 flex flex-col gap-10">
          <div className="border-[#CCE118] border-[1px] bg-[#CCE118]/4 rounded-[14px] py-3 px-4 flex justify-between items-center">
            <div className="flex gap-4">
              <Image
                src="/icons/coin.svg"
                alt="coin"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
              <p className="text-[16px] font-normal text-white">
                Be a Futures Lead Trader, enjoy up to 30% profit share + 10%
                commission rebate! •
              </p>
            </div>
            <Button
              variant="default"
              className="rounded-[10px] bg-[#CCE118] border-none px-4 py-2 text-black font-medium text-[16px] hover:bg-[#CCE118]/90"
            >
              Apply Now
            </Button>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <p className="font-bold text-[20px]">Futures Copy Trading</p>
              <p className="font-medium text-[14px] text-[#8D8D8D]">
                Follow the world's top crypto traders and copy their trades with
                one click
              </p>
              <div className="flex gap-1 items-center">
                <Image
                  src="/icons/sound.svg"
                  alt="sounds"
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px]"
                />
                <p className="font-medium text-[14px] text-[#CCE118]">
                  Binance Futures Copy Trading Upgrades the Lead Trader Growth
                  Plan
                </p>
              </div>
            </div>
            <div className="border-[1px] border-[#343434] p-4 rounded-[16px] flex items-center justify-between gap-8">
              <p className="pb-[26px] font-bold text-[20px]">
                Copy Trading Leads Trader
                <br />
                Growth Plan
              </p>
              <Image
                src="/icons/profit.svg"
                alt="arrow-right"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />
            </div>
          </div>
        </div>

        {/* Create New Strategy Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-[20px] font-bold text-white mb-2">
                Create New Strategy
              </h2>
              <p className="text-[14px] text-[#8D8D8D]">
                This demo includes create/edit CTA placeholders. In a real
                product these would open modals for detailed config.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="rounded-full border-[#343434] bg-transparent text-white hover:bg-[#333] px-4 py-2 flex items-center gap-2"
              >
                <Image
                  src="/icons/filter.svg"
                  alt="filter"
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px]"
                />
                Filter
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-[#343434] bg-transparent text-white hover:bg-[#333] p-3"
              >
                <Image
                  src="/icons/setting.svg"
                  alt="settings"
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px]"
                />
              </Button>
            </div>
          </div>

          {/* Strategy Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {strategyData.map((strategy, index) => (
              <StrategyItem
                key={index}
                name={strategy.name}
                rank={strategy.rank}
                pnl={strategy.pnl}
                roi={strategy.roi}
                drawdown={strategy.drawdown}
                sharpeRatio={strategy.sharpeRatio}
                monthlyData={strategy.monthlyData}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
