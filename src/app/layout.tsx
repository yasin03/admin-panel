"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import PageWrapper from "@/components/pageWrapper";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import axios from "axios";
import { useEffect } from "react";
import useMenuStore from "@/store/menu-store";
import { getDashboardData } from "@/api/service";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

async function fetchData() {
  const res = await getDashboardData();
  return res.data.data;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const dashboardData = useMenuStore((state) => state.dashboardData);
  const setDashboardData = useMenuStore((state) => state.setDashboardData);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setDashboardData(data);
    };

    getData();
  }, [setDashboardData]);

  console.log(dashboardData);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen ">
          <Sidebar />
          <Header />
          <PageWrapper>
            <AntdRegistry>{children}</AntdRegistry>
          </PageWrapper>
        </div>
      </body>
    </html>
  );
}
