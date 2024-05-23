"use client";
import Title from "@/components/title";
import useMenuStore from "@/store/menu-store";
import { DashboardData } from "@/types/types";
import { Table, TableProps } from "antd";
import React, { useState } from "react";

const Page: React.FC = () => {
  const dashboardData = useMenuStore((state) => state.dashboardData);
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);

  const columns: TableProps<DashboardData>["columns"] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
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
      render: (_: any, record: DashboardData) => {
        return <p>{record?.description.slice(0, 20) + "..."}</p>;
      },
    },
    Table.EXPAND_COLUMN,
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_: any, record: DashboardData) => {
        return <p className="bg-green-300 p-2 rounded-lg w-24">{record?.status}</p>;
      },
    },
  ];

  return (
    <div>
      <Title title="In Progress Courses" />
      <div className="shadow-md m-12">
        <Table
          dataSource={dashboardData?.in_progress_courses}
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.description}</p>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default Page;
