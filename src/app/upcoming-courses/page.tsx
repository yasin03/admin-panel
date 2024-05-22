"use client";
import useMenuStore from "@/store/menu-store";
import { Table } from "antd";
import React from "react";

const Page = () => {
  const dashboardData = useMenuStore((state) => state.dashboardData);
  
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key:"title"
    },
    {
      title: "Date",
      dataIndex: "due_date",
      key: "due_date",
    },
    {
      title: "Assigned to",
      dataIndex: "assigned_to",
      key: "assigned_to",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  return (
    <div>
      Upcoming Courses
      <div className="shadow-md m-12">
        <Table dataSource={dashboardData?.upcoming_courses} columns={columns} />
      </div>
    </div>
  );
};

export default Page;
