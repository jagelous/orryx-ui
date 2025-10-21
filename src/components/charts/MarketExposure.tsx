"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

const MarketExposure = () => {
  // Striped pattern for SOL segment
  const createStripePattern = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 8;
    canvas.height = 8;
    const ctx = canvas.getContext("2d");
    if (!ctx) return canvas;
    ctx.fillStyle = "rgba(255, 255, 0, 0.1)";
    ctx.fillRect(0, 0, 8, 8);
    ctx.strokeStyle = "rgba(255, 255, 0, 0.9)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 8);
    ctx.lineTo(8, 0);
    ctx.stroke();
    return canvas;
  };

  const option = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "item",
      backgroundColor: "#fff",
      borderColor: "#ccc",
      textStyle: { color: "#000" },
      formatter: "{b}: {c} ({d}%)",
    },
    legend: {
      bottom: 0,
      left: "center",
      textStyle: { color: "#fff" },
      itemGap: 25,
      itemWidth: 12,
      itemHeight: 12,
      data: [
        { name: "BNB", icon: "circle" },
        { name: "BTC", icon: "circle" },
        { name: "ETH", icon: "circle" },
        { name: "SOL", icon: "circle" },
      ],
      formatter: function (name: string) {
        switch (name) {
          case "BNB":
            return "BNB 45%";
          case "BTC":
            return "BTC 14%";
          case "ETH":
            return "ETH 20%";
          case "SOL":
            return "SOL 50%";
          default:
            return name;
        }
      },
    },
    series: [
      {
        name: "Market Exposure",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: "#121212",
          borderWidth: 3,
        },
        label: { show: false },
        emphasis: { scale: true },
        labelLine: { show: false },
        data: [
          { value: 45, name: "BNB", itemStyle: { color: "#00C58E" } },
          { value: 14, name: "BTC", itemStyle: { color: "#FFD600" } },
          { value: 20, name: "ETH", itemStyle: { color: "#4C6FFF" } },
          {
            value: 50,
            name: "SOL",
            itemStyle: {
              color: "#ef4444",
            },
          },
        ],
      },
      // Center label overlay
      {
        type: "pie",
        radius: ["0%", "50%"],
        silent: true,
        label: {
          show: true,
          position: "center",
          formatter: () => `{value|4134}\n{label|Of 4377 Blocks}`,
          rich: {
            value: {
              fontSize: 32,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 40,
            },
            label: {
              fontSize: 14,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 20,
            },
          },
        },
        data: [{ value: 100, itemStyle: { color: "transparent" } }],
      },
    ],
  };

  return (
    <div
      style={{
        background: "",
        borderRadius: "16px",
        padding: "20px",
      }}
    >
      <h3
        style={{
          color: "white",
          marginBottom: "10px",
          fontSize: "20px",
          fontWeight: "500",
        }}
      >
        Market Exposure
      </h3>
      <p className="text-[#8D8D8D] text-[12px] font-normal">
        Allocation of follower funds across major markets.
      </p>
      <ReactECharts
        option={option}
        style={{ height: "350px", width: "100%" }}
      />
    </div>
  );
};

export default MarketExposure;
