"use client";
import React from "react";
import dynamic from "next/dynamic";
import useMenuStore from "@/store/menu-store";
import Title from "@/components/title";

const Line = dynamic(
  () => import("@ant-design/charts").then((mod) => mod.Line),
  { ssr: false }
);

const Page: React.FC = () => {
  const dashboardData = useMenuStore((state) => state.dashboardData);

  const config = {
    data: dashboardData?.activity_hours || [],
    xField: "date",
    yField: ["hours", "exams_completed"],
    xAxis: {
      type: "time",
    },
    tooltip: { shared: true },
  };

  return (
    <div>
      <Title title="Activity Hours" />
      <Line {...config} />
    </div>
  );
};

export default Page;
