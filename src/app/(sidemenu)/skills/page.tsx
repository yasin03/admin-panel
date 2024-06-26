"use client";
import Title from "@/components/title";
import useMenuStore from "@/store/menu-store";
import {  ColumnConfig } from "@ant-design/charts";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Column = dynamic(
  () => import("@ant-design/charts").then((mod) => mod.Column),
  { ssr: false }
);

interface DataItem {
  employees: number;
  skill: string;
}

interface LogoItem {
  name: string;
  url: string;
}

const Page: React.FC = () => {
  const dashboardData = useMenuStore((state) => state.dashboardData);

  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    if (dashboardData) {
      setData(dashboardData.dashboardData?.top_skills);
    }
  }, [dashboardData]);

  const logos: LogoItem[] = [
    {
      name: "Python",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    },
    {
      name: "React",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      name: "Javascript",
      url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "Java",
      url: "https://brandslogos.com/wp-content/uploads/images/large/java-logo-1.png",
    },
  ];

  const chartRef = useRef<any>();

  const config: ColumnConfig = {
    data,
    xField: "skill",
    yField: "employees",
    colorField: "skill",
    onReady: ({ chart }) => {
      chartRef.current = chart;
    },
    legend: {
      itemName: {
        formatter: (name: any) => {
          const logo = logos.find((logo) => logo.name === name);
          return logo ? (
            <span>
              <Image
                src={logo.url}
                alt={logo.name}
                style={{
                  width: 20,
                  height: 20,
                  verticalAlign: "middle",
                  marginRight: 8,
                }}
              />
              {name}
            </span>
          ) : (
            name
          );
        },
      },
    },
  };

  return (
    <div>
      <Title title="Top Skills" />
      <div className="mx-12">
        {typeof window !== "undefined" && <Column {...config} />}
      </div>
    </div>
  );
};

export default Page;
