"use client";
import Layout from "@/components/layout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import EstimatedUsageChart from "@/components/charts/EstimatedUsageChart";
import HistoryTable from "@/components/HistoryTable";
import { useState } from "react";

export default function FundWallet() {
  const [activeTab, setActiveTab] = useState("deposit");

  return (
    <Layout>
      <div className="bg-[#1f1f1f] rounded-[20px] p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[24px] font-medium text-white">Fund Wallet</h1>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/gear.svg"
              alt="Settings"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <Image
              src="/icons/expand2.svg"
              alt="Expand"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#242424] rounded-[16px] p-4">
            <p className="text-[16px] font-normal text-[#8D8D8D] mb-2">
              Current Balance
            </p>
            <p className="text-[24px] font-bold text-white">1351.0875 USDT</p>
          </div>

          <div className="bg-[#242424] rounded-[16px] p-4">
            <p className="text-[16px] font-normal text-[#8D8D8D] mb-2">
              Min Deposit
            </p>
            <p className="text-[24px] font-bold text-white">10 USDT</p>
          </div>

          <div className="bg-[#242424] rounded-[16px] p-4">
            <p className="text-[16px] font-normal text-[#8D8D8D] mb-2">
              Network
            </p>
            <p className="text-[24px] font-bold text-white">ERC 20</p>
          </div>
        </div>
      </div>
      <div>
        {/* Estimated Usage and Deposit Form */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Estimated Usage Chart */}
          <EstimatedUsageChart />

          {/* Deposit/Withdraw Form */}
          <div className="bg-[#242424] rounded-[16px] p-4">
            <div className="w-full">
              {/* Custom Tabs - Centered */}
              <div className="flex justify-center border-b border-[#4A4A4A] mb-4">
                <button
                  onClick={() => setActiveTab("deposit")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === "deposit"
                      ? "text-[#CCE118] border-b-2 border-[#CCE118]"
                      : "text-[#8D8D8D] hover:text-white"
                  }`}
                >
                  DEPOSIT
                </button>
                <button
                  onClick={() => setActiveTab("withdraw")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === "withdraw"
                      ? "text-[#CCE118] border-b-2 border-[#CCE118]"
                      : "text-[#8D8D8D] hover:text-white"
                  }`}
                >
                  WITHDRAW
                </button>
              </div>

              {activeTab === "deposit" && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-medium text-white">
                      Deposit
                    </h3>
                    <Image
                      src="/icons/line.svg"
                      alt="Filter"
                      width={22}
                      height={22}
                      className="w-[22px] h-[22px]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="12"
                        className="bg-[#1f1f1f] border-[#4A4A4A] text-white text-[32px] h-[60px] pr-20"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <Select defaultValue="bnb">
                          <SelectTrigger className="w-auto bg-transparent border-none h-auto rounded-[40px] px-[10px] py-[8px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="">
                            <SelectItem value="bnb">
                              <div className="flex items-center gap-2">
                                <Image
                                  src="/icons/bnb.svg"
                                  alt="BNB"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6"
                                />
                                <span>BNB</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="eth">
                              <div className="flex items-center gap-2">
                                <Image
                                  src="/icons/eth.svg"
                                  alt="ETH"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6"
                                />
                                <span>ETH</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="btc">
                              <div className="flex items-center gap-2">
                                <Image
                                  src="/icons/btc.svg"
                                  alt="BTC"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6"
                                />
                                <span>BTC</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Balance Display in #242424 div */}
                    <div className="bg-[#242424] rounded-[8px] p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/icons/wallet.svg"
                          alt="Wallet"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span className="text-[#8D8D8D] text-sm">$0.00</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#8D8D8D] text-sm">
                        <Image
                          src="/icons/bnb.svg"
                          alt="BNB"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span>0.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="wrapped"
                      defaultChecked
                      className="data-[state=checked]:bg-[#CCE118] data-[state=checked]:border-[#CCE118]"
                    />
                    <label htmlFor="wrapped" className="text-[14px] text-white">
                      Deposit Wrapped
                    </label>
                  </div>

                  <Button className="w-full bg-[#CCE118] hover:bg-[#CCE118]/80 text-black font-bold h-[50px] text-[16px]">
                    DEPOSIT
                  </Button>

                  <div className="flex flex-col gap-2 text-[12px] text-[#8D8D8D]">
                    <p>Exchange rate USDT/DAI (including fees): 0.9997</p>
                    <p>Trade routed through: USDT → Olympus V2 → DAI</p>
                  </div>
                </div>
              )}

              {activeTab === "withdraw" && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-medium text-white">
                      Withdraw
                    </h3>
                    <Image
                      src="/icons/line.svg"
                      alt="Filter"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="0"
                        className="bg-[#1f1f1f] border-[#4A4A4A] text-white text-[24px] font-bold h-[60px] pr-20"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <Select defaultValue="usdt">
                          <SelectTrigger className="w-auto bg-transparent border-none p-0 h-auto">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usdt">
                              <div className="flex items-center gap-2">
                                <Image
                                  src="/icons/usdt.svg"
                                  alt="USDT"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6"
                                />
                                <span>USDT</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="eth">
                              <div className="flex items-center gap-2">
                                <Image
                                  src="/icons/eth.svg"
                                  alt="ETH"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6"
                                />
                                <span>ETH</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="btc">
                              <div className="flex items-center gap-2">
                                <Image
                                  src="/icons/btc.svg"
                                  alt="BTC"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6"
                                />
                                <span>BTC</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Balance Display in #242424 div */}
                    <div className="bg-[#242424] rounded-[8px] p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/icons/wallet.svg"
                          alt="Wallet"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span className="text-[#8D8D8D] text-sm">$0.00</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#8D8D8D] text-sm">
                        <Image
                          src="/icons/usdt.svg"
                          alt="USDT"
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span>0.00</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-[#CCE118] hover:bg-[#CCE118]/80 text-black font-bold h-[50px] text-[16px]">
                    WITHDRAW
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Deposit History Section */}
        <div className="mt-6">
          <HistoryTable title="Deposit History" />
        </div>
      </div>
    </Layout>
  );
}
