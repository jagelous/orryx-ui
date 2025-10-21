"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EstimatedUsageChart = () => {
  return (
    <div className="bg-[#242424] rounded-[16px] p-4">
      <div className="flex flex-row items-center justify-between mb-4">
        <h3 className="text-[14px] font-medium text-white">Estimated Usage</h3>
        <Select defaultValue="weekly">
          <SelectTrigger className="w-[100px] bg-[#1f1f1f] border-[#4A4A4A] text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[32px] font-bold text-white">1,343,453</span>
          <span className="text-[14px] text-red-400">-2.32%</span>
        </div>

        <div className="h-[200px]">
          <ReactECharts
            option={{
              backgroundColor: "transparent",
              tooltip: {
                trigger: "axis",
                backgroundColor: "#2A2A2A",
                borderColor: "#4A4A4A",
                borderWidth: 1,
                textStyle: { color: "#fff", fontSize: 12 },
                formatter: (params: any) => {
                  const point = params[0];
                  return `<div style="text-align:center">
                    <div style="font-size:14px; font-weight:600; color:#fff;">Price: ${point.value} USDT</div>
                    <div style="color:#00D4AA; font-size:12px;">4H Change: 0.06% ↗</div>
                  </div>`;
                },
                axisPointer: {
                  lineStyle: {
                    color: "rgba(255,255,255,0.2)",
                    width: 1,
                    type: "dashed",
                  },
                },
              },
              grid: {
                left: "5%",
                right: "5%",
                top: "10%",
                bottom: "15%",
                containLabel: true,
              },
              xAxis: {
                type: "category",
                boundaryGap: false,
                data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                },
              },
              yAxis: {
                type: "value",
                axisLine: { show: false },
                axisTick: { show: false },
                splitLine: {
                  lineStyle: {
                    color: "rgba(255,255,255,0.1)",
                    type: "dashed",
                  },
                },
                axisLabel: {
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                  formatter: (value: number) => `$${value}`,
                },
              },
              series: [
                {
                  name: "Estimated Usage",
                  type: "line",
                  smooth: true,
                  symbol: "circle",
                  symbolSize: 6,
                  showSymbol: false,
                  itemStyle: {
                    color: "#00D4AA",
                    borderColor: "#00D4AA",
                    borderWidth: 2,
                  },
                  lineStyle: {
                    width: 3,
                    color: "#00D4AA",
                  },
                  areaStyle: {
                    color: {
                      type: "linear",
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        { offset: 0, color: "rgba(0, 212, 170, 0.3)" },
                        { offset: 1, color: "rgba(0, 212, 170, 0.0)" },
                      ],
                    },
                  },
                  data: [100, 120, 90, 220, 180, 150, 130],
                  emphasis: {
                    focus: "series",
                    itemStyle: {
                      color: "#00D4AA",
                      borderColor: "#fff",
                      borderWidth: 3,
                      shadowBlur: 10,
                      shadowColor: "rgba(0, 212, 170, 0.5)",
                    },
                  },
                },
              ],
            }}
            style={{ height: "200px", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default EstimatedUsageChart;
