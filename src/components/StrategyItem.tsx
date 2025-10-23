import Image from "next/image";
import { Button } from "@/components/ui/button";

interface StrategyItemProps {
  name: string;
  rank: string;
  pnl: string;
  roi: string;
  drawdown: string;
  sharpeRatio: string;
  monthlyData: { month: string; value: number }[];
}

export default function StrategyItem({
  name,
  rank,
  pnl,
  roi,
  drawdown,
  sharpeRatio,
  monthlyData,
}: StrategyItemProps) {
  return (
    <div className="bg-[#1F1F1F] rounded-[16px] p-4 border border-[#343434]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/user1.svg"
            alt={name}
            width={40}
            height={40}
            className="w-[40px] h-[40px] rounded-full"
          />
          <div>
            <p className="text-white font-medium text-[14px]">{name}</p>
            <p className="text-[#8D8D8D] text-[12px]">{rank}</p>
          </div>
        </div>
        <Image
          src="/icons/star.svg"
          alt="favorite"
          width={16}
          height={16}
          className="w-[16px] h-[16px]"
        />
      </div>

      {/* Performance Metrics */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-white font-bold text-[20px]">{pnl}</p>
            <p className="text-[#8D8D8D] text-[12px]">30 Days PNL</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex gap-1 mb-1 h-6 items-end">
              {monthlyData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center h-full justify-end"
                >
                  <div
                    className={`w-2 rounded-sm bg-[#CCE118]`}
                    style={{ height: `${Math.max(data.value * 20, 4)}px` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-1 text-[8px] text-[#8D8D8D]">
              {monthlyData.map((data, index) => (
                <span key={index} className="w-2 text-center">
                  {data.month}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <p className="text-[#CCE118] text-[12px] font-medium">{roi}</p>
        </div>
      </div>

      {/* Risk Metrics */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <p className="text-white text-[14px] font-medium">{drawdown}</p>
          <p className="text-[#8D8D8D] text-[12px]">Drawdown 30d</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/chain.svg"
              alt="sharpe ratio"
              width={12}
              height={12}
              className="w-[12px] h-[12px]"
            />
            <p className="text-white text-[14px] font-medium">{sharpeRatio}</p>
          </div>
          <p className="text-[#8D8D8D] text-[12px]">Sharpe Ratio 30d</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1 rounded-[8px] border-[#343434] bg-transparent text-white hover:bg-[#333] text-[12px] py-2"
        >
          Edit
        </Button>
        <Button
          variant="default"
          className="flex-1 rounded-[8px] bg-[#CCE118] border-none text-black font-medium text-[12px] py-2 hover:bg-[#CCE118]/90"
        >
          Copy
        </Button>
      </div>
    </div>
  );
}
