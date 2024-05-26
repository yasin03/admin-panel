"use client";
import Title from "@/components/title";
import useMenuStore from "@/store/menu-store";
import { Column, ColumnConfig } from "@ant-design/charts";
import React, { useRef } from "react";

interface DataItem {
  current_score: number;
  email: string;
  name: string;
  title: string;
}

const Page: React.FC = () => {
  const dashboardData = useMenuStore((state) => state.dashboardData);

  const data: DataItem[] = dashboardData?.top_employees || [];

  const chartRef = useRef<any>();

  const config: ColumnConfig = {
    data,
    xField: "name",
    yField: "current_score",
    colorField: "name",
    onReady: ({ chart }) => {
      chartRef.current = chart;
    },
    tooltip: {
      customContent: (name: any, items: any) => {
        if (items && items.length) {
          const { data } = items[0];
          return (
            `<div style="padding: 10px;">` +
            `<p><strong>Name:</strong> ${data.name}</p>` +
            `<p><strong>Title:</strong> ${data.title}</p>` +
            `<p><strong>Email:</strong> ${data.email}</p>` +
            `<p><strong>Current Score:</strong> ${data.current_score}</p>` +
            `</div>`
          );
        }
        return "";
      },
    },
  };

  return (
    <div>
      <Title title="Top Employees" />
      <div className="mx-12">
        <Column {...config} />
      </div>
    </div>
  );
};

export default Page;
