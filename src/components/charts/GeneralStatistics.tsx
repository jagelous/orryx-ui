"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

const GeneralStatistics = () => {
  const option = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "axis",
      backgroundColor: "#fff",
      borderColor: "#ccc",
      borderWidth: 1,
      textStyle: { color: "#000", fontWeight: "bold" },
      formatter: (params: any) => {
        const p = params[0];
        return `<div style="text-align:center">
                  <span style="font-size:14px; font-weight:600;">$${p.value}k</span><br/>
                  <span style="color:#666;">${p.axisValue}</span>
                </div>`;
      },
      axisPointer: {
        lineStyle: {
          color: "rgba(255,255,255,0.2)",
          width: 1.5,
        },
      },
    },
    legend: {
      data: [
        { name: "Ethereum", icon: "circle" },
        { name: "Binance", icon: "circle" },
        { name: "Bitcoin", icon: "circle" },
      ],
      top: 0,
      textStyle: { color: "#fff", fontSize: 13 },
      itemGap: 25,
      formatter: (name: string) => {
        if (name === "Ethereum") return "Ethereum 8%";
        if (name === "Binance") return "Binance 30%";
        if (name === "Bitcoin") return "Bitcoin 40%";
        return name;
      },
    },
    grid: {
      left: "6%",
      right: "6%",
      top: "20%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "rgba(255,255,255,0.6)" },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "rgba(255,255,255,0.1)" } },
      axisLabel: { color: "rgba(255,255,255,0.6)" },
    },
    series: [
      // Ethereum (main highlighted one)
      {
        name: "Ethereum",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
        showSymbol: true,
        itemStyle: { color: "#D8FF00", borderColor: "#000", borderWidth: 2 },
        lineStyle: { width: 3, color: "#D8FF00" },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(216,255,0,0.25)" },
              { offset: 1, color: "rgba(216,255,0,0.00)" },
            ],
          },
        },
        data: [5, 4, 6, 3, 3, 4, 5, 6, 7, 8, 7, 9],
      },
      // Binance (background)
      {
        name: "Binance",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 6,
        showSymbol: true,
        itemStyle: { color: "#F28B82" },
        lineStyle: { width: 2, color: "rgba(242,139,130,0.8)" },
        data: [7, 6, 5, 6, 7, 7, 8, 8, 9, 10, 10, 11],
      },
      // Bitcoin (background)
      {
        name: "Bitcoin",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 6,
        showSymbol: true,
        itemStyle: { color: "#FF6D01" },
        lineStyle: { width: 2, color: "rgba(255,109,1,0.8)" },
        data: [9, 8, 9, 9, 10, 11, 10, 11, 12, 13, 13, 14],
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
        General Statistics
      </h3>
      <ReactECharts
        option={option}
        style={{ height: "320px", width: "100%" }}
      />
    </div>
  );
};

export default GeneralStatistics;
