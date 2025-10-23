"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

const PnlGrowthChart = () => {
  const option = {
    backgroundColor: "transparent",
    tooltip: { trigger: "axis" },
    grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
    xAxis: {
      type: "category",
      data: ["Mon", "Sun", "Set", "Thu", "Wed", "Tue", "Fri"],
      axisLine: { lineStyle: { color: "#555" } },
      axisLabel: { color: "#aaa" },
    },
    yAxis: {
      type: "value",
      axisLine: { lineStyle: { color: "#555" } },
      axisLabel: { color: "#aaa" },
      splitLine: { lineStyle: { color: "rgba(255,255,255,0.05)" } },
    },
    series: [
      {
        name: "Profit",
        type: "bar",
        data: [30000, 35000, 20000, 15000, 28000, 25000, 27000],
        barWidth: 8,
        itemStyle: {
          borderRadius: [6, 6, 0, 0],
          color: {
            type: "linear",
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              { offset: 0, color: "#b2ff00" },
              { offset: 1, color: "#ffff33" },
            ],
          },
        },
      },
      {
        name: "Loss",
        type: "bar",
        data: [-9000, -10000, -8000, -12000, -15000, -11000, -9000],
        barWidth: 8,
        itemStyle: {
          borderRadius: [0, 0, 6, 6],
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "#6699ff" },
              { offset: 1, color: "#0033cc" },
            ],
          },
        },
      },
      {
        // Highlight red column (like the one in the center of your chart)
        name: "Highlight",
        type: "bar",
        data: [0, 0, 0, 0, -30000, 0, 0],
        barWidth: 8,
        itemStyle: {
          borderRadius: [0, 0, 6, 6],
          color: "#ff3300",
          shadowColor: "rgba(255,0,0,0.6)",
          shadowBlur: 20,
        },
        z: 3,
      },
    ],
  };

  return (
    <div style={{ background: "#0b0b0f", borderRadius: 16, padding: 20 }}>
      <h3 style={{ color: "#fff", marginBottom: 10 }}>PnL Growth (Monthly)</h3>
      <ReactECharts option={option} style={{ height: 400 }} />
    </div>
  );
};

export default PnlGrowthChart;
