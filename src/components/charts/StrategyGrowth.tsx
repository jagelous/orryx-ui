"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

const StrategyGrowth = () => {
  const option = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "axis",
      backgroundColor: "#fff",
      textStyle: { color: "#242424", fontWeight: "bold" },
      formatter: function (params: any) {
        const point = params[0];
        return `<div style="text-align:center">
                  <span style="font-size:14px; font-weight:600;">${point.value[1]}%</span><br/>
                  <span style="color:#666;">${point.axisValue}</span>
                </div>`;
      },
      axisPointer: {
        lineStyle: {
          color: "rgba(255,255,255,0.2)",
          width: 1.5,
        },
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "10%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["May 15", "May 18", "May 21", "May 25", "May 28", "Jun 1"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "rgba(255,255,255,0.7)" },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "rgba(255,255,255,0.1)" } },
      axisLabel: { color: "rgba(255,255,255,0.7)" },
    },
    series: [
      {
        name: "Growth",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
        showSymbol: true,
        itemStyle: {
          color: "#D8FF00", // bright yellow-green
          borderWidth: 2,
          borderColor: "#000",
        },
        lineStyle: {
          width: 3,
          color: "#D8FF00",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(216, 255, 0, 0.25)" },
              { offset: 1, color: "rgba(216, 255, 0, 0)" },
            ],
          },
        },
        data: [
          [0, 35],
          [1, 65],
          [2, 75],
          [3, 70], // May 25 point
          [4, 80],
          [5, 105],
        ],
        markPoint: {
          data: [
            {
              coord: [3, 70], // May 25 position
              symbol: "circle",
              symbolSize: 10,
              itemStyle: {
                color: "#D8FF00",
                borderColor: "#000",
                borderWidth: 3,
              },
              label: {
                show: true,
                position: "top",
                formatter: "+0.25%",
                color: "#FFFFFF",
                fontSize: 12,
                fontWeight: "bold",
                backgroundColor: "rgba(0,0,0,0.8)",
                borderRadius: 6,
                padding: [6, 10],
                borderColor: "#D8FF00",
                borderWidth: 1,
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <div
      style={{
        background: "#242424",
        borderRadius: "16px",
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
        Strategy Growth
      </h3>
      <ReactECharts
        option={option}
        style={{ height: "300px", width: "100%" }}
      />
    </div>
  );
};

export default StrategyGrowth;
