"use client";
import Title from "@/components/title";
import { Column, ColumnConfig } from "@ant-design/charts";
import React, { useRef } from "react";

interface DataItem {
  type: string;
  sold: number;
}

interface LogoItem {
  name: string;
  url: string;
}

const Page: React.FC = () => {
  const data: DataItem[] = [
    { type: "抖音", sold: 275 },
    { type: "快手", sold: 115 },
    { type: "小米", sold: 120 },
    { type: "微信", sold: 350 },
    { type: "Keep", sold: 150 },
  ];

  const logos: LogoItem[] = [
    {
      name: "抖音",
      url: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*8IXHQLvx9QkAAAAAAAAAAAAADmJ7AQ/original",
    },
    {
      name: "快手",
      url: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*swueRrrKvbcAAAAAAAAAAAAADmJ7AQ/original",
    },
    {
      name: "小米",
      url: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*79G3TIt3mBoAAAAAAAAAAAAADmJ7AQ/original",
    },
    {
      name: "微信",
      url: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*_ELBTJLp0dQAAAAAAAAAAAAADmJ7AQ/original",
    },
    {
      name: "Keep",
      url: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*JzbKRpFhR14AAAAAAAAAAAAADmJ7AQ/original",
    },
  ];

  const chartRef = useRef<any>();

  const config: ColumnConfig = {
    data,
    xField: "type",
    yField: "sold",
    colorField: "type",
    onReady: ({ chart }) => {
      chartRef.current = chart;
    },
    legend: {
      color: {
        itemMarker: (name: any, index: any) => () => {
          const chart = chartRef.current;
          const { canvas } = chart.getContext();
          const { document } = canvas;
          const image = document.createElement("image", {
            style: {
              width: 20,
              height: 20,
              anchor: "0.5 0.5",
              src: logos[index].url,
            },
          });
          const tooltip = document.createElement("html", {
            style: {
              innerHTML: `<p style="color: red; width: 80; text-align: center;line-height: 30px">${name}</p>`,
              fill: "white",
              stroke: "#ccc",
              width: 80,
              height: 30,
              pointerEvents: "none",
              visibility: "hidden",
            },
          });
          canvas.appendChild(tooltip);
          image.addEventListener("mousemove", (e: any) => {
            tooltip.setPosition(e.x, e.y);
            tooltip.style.visibility = "visible";
          });
          image.addEventListener("mouseleave", () => {
            tooltip.setPosition(0, 0);
            tooltip.style.visibility = "hidden";
          });
          return image;
        },
        itemMarkerSize: 40,
        itemLabelText: (_: any, index: any) => logos[index].name,
        maxRows: 1,
      },
    },
  };

  return (
    <div>
      <Title title="Skills" />
      <div className="mx-36">
        <Column {...config} />
      </div>
    </div>
  );
};

export default Page;
