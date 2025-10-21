"use client";

import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Trade {
  date: string;
  market: string;
  entryPrice: string;
  currentPrice: string;
  executedOn: string;
  pnl: string;
  size: string;
  leverage: string;
}

interface HistoryTableProps {
  title: string;
}

const columns: ColumnDef<Trade>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => (
      <div className="flex items-center gap-2">
        <span>{getValue() as string}</span>
        <ChevronDown className="w-3 h-3 opacity-50" />
      </div>
    ),
  },
  { accessorKey: "market", header: "Market" },
  { accessorKey: "entryPrice", header: "Entry Price" },
  { accessorKey: "currentPrice", header: "Current Price" },
  { accessorKey: "executedOn", header: "Executed On" },
  {
    accessorKey: "pnl",
    header: "PnL",
    cell: ({ getValue }) => (
      <Badge
        variant="secondary"
        className="bg-green-500/20 text-green-400 border-green-500/30"
      >
        {getValue() as string}
      </Badge>
    ),
  },
  { accessorKey: "size", header: "Size" },
  { accessorKey: "leverage", header: "Leverage" },
  {
    id: "actions",
    header: "Action",
    cell: () => (
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-[#3A3A3A] border-[#4A4A4A] text-white hover:bg-[#4A4A4A] text-xs px-3 py-1"
        >
          View
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-[#3A3A3A] border-[#4A4A4A] text-white hover:bg-[#4A4A4A] text-xs px-3 py-1"
        >
          Close
        </Button>
      </div>
    ),
  },
];

const data: Trade[] = [
  {
    date: "Apr 23, 2025",
    market: "ETH-PERP Long 5x",
    entryPrice: "$2,350",
    currentPrice: "$2,420",
    executedOn: "DEX-A",
    pnl: "+3.0%",
    size: "0.5 ETH",
    leverage: "5x",
  },
  {
    date: "Apr 23, 2025",
    market: "ETH-PERP Long 5x",
    entryPrice: "$2,350",
    currentPrice: "$2,420",
    executedOn: "DEX-A",
    pnl: "+3.0%",
    size: "0.5 ETH",
    leverage: "5x",
  },
  {
    date: "Apr 22, 2025",
    market: "BTC-PERP Short 3x",
    entryPrice: "$65,200",
    currentPrice: "$64,800",
    executedOn: "DEX-B",
    pnl: "+2.1%",
    size: "0.1 BTC",
    leverage: "3x",
  },
  {
    date: "Apr 21, 2025",
    market: "SOL-PERP Long 2x",
    entryPrice: "$180",
    currentPrice: "$185",
    executedOn: "DEX-A",
    pnl: "+2.8%",
    size: "10 SOL",
    leverage: "2x",
  },
];

export default function HistoryTable({ title }: HistoryTableProps) {
  const [switchChecked, setSwitchChecked] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Card className="bg-[#1f1f1f] border-none rounded-[20px] p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/chart.svg"
            alt={title}
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h2 className="text-[18px] font-medium text-white">{title}</h2>
        </div>
        <div className="flex items-center gap-4">
          <Tabs defaultValue="All" className="w-auto">
            <TabsList className="grid w-full grid-cols-5 bg-[#2A2A2A] p-1 rounded-full">
              <TabsTrigger
                value="All"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-xs px-3 py-1"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="1D"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-xs px-3 py-1"
              >
                1D
              </TabsTrigger>
              <TabsTrigger
                value="1W"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-xs px-3 py-1"
              >
                1W
              </TabsTrigger>
              <TabsTrigger
                value="1M"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-xs px-3 py-1"
              >
                1M
              </TabsTrigger>
              <TabsTrigger
                value="1Y"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-xs px-3 py-1"
              >
                1Y
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/expand.svg"
              alt="Expand"
              width={45}
              height={45}
              className="w-[45px] h-[45px]"
            />
            <span className="text-[#8D8D8D] text-xs">1 - 10 of 50</span>
            <div className="flex gap-1">
              <Button
                variant="outline"
                size="sm"
                className="w-6 h-6 p-0 bg-[#3A3A3A] border-[#4A4A4A] hover:bg-[#4A4A4A]"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-6 h-6 p-0 bg-[#3A3A3A] border-[#4A4A4A] hover:bg-[#4A4A4A]"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-[#8D8D8D] border-b border-[#2A2A2A]">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="text-left py-3 px-4 font-normal text-[14px]"
                    >
                      {header.isPlaceholder
                        ? null
                        : (header.column.columnDef.header as string)}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-[#2A2A2A] hover:bg-[#2A2A2A]/50 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="py-3 px-4 text-white">
                      {cell.getValue() as React.ReactNode}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
