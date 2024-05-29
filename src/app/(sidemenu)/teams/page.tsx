"use client";
import Title from "@/components/title";
import useMenuStore from "@/store/menu-store";
import { Column, ColumnConfig } from "@ant-design/charts";
import { Table } from "antd";
import React, { useRef } from "react";

interface Employee {
  current_score: number | { value: string; type: string };
  email: string;
  name: string;
  title: string;
  lessons_taken: number;
  skills_being_developed: string[];
}

interface Team {
  description: string;
  employees: Employee[];
  overall_score: string;
  title: string;
  total_employee_count: number;
}

const Page: React.FC = () => {
  const dashboardData = useMenuStore((state) => state.dashboardData);

  const teams: Team[] = dashboardData?.teams || null;

  const data: Employee[] = teams.flatMap((team) => team.employees);

  const chartRef = useRef<any>();

  const config: ColumnConfig = {
    data,
    xField: "name",
    yField: "current_score",
    colorField: "title",
    onReady: ({ chart }) => {
      chartRef.current = chart;
    },
    tooltip: {
      customContent: (title: any, items: any) => {
        if (items && items.length) {
          const { data } = items[0];
          const currentScore =
            typeof data.current_score === "object"
              ? data.current_score.value
              : data.current_score;
          return (
            `<div style="padding: 10px;">` +
            `<p><strong>Name:</strong> ${data.name}</p>` +
            `<p><strong>Title:</strong> ${data.title}</p>` +
            `<p><strong>Email:</strong> ${data.email}</p>` +
            `<p><strong>Current Score:</strong> ${currentScore}</p>` +
            `<p><strong>Lessons Taken:</strong> ${data.lessons_taken}</p>` +
            `<p><strong>Skills Being Developed:</strong> ${data.skills_being_developed.join(
              ", "
            )}</p>` +
            `</div>`
          );
        }
        return "";
      },
    },
  };

  const truncate = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  const expandedRowRender = (team: Team) => {
    const employeeColumns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Title", dataIndex: "title", key: "title" },
      { title: "Email", dataIndex: "email", key: "email" },
      {
        title: "Current Score",
        dataIndex: "current_score",
        key: "current_score",
        render: (score: any) =>
          typeof score === "object" ? score.value : score,
      },
      {
        title: "Lessons Taken",
        dataIndex: "lessons_taken",
        key: "lessons_taken",
      },
      {
        title: "Skills Being Developed",
        dataIndex: "skills_being_developed",
        key: "skills_being_developed",
        render: (skills: string[]) => skills.join(", "),
      },
    ];

    return (
      <div>
        <p>
          <strong>Description:</strong> {team.description}
        </p>
        <Table
          columns={employeeColumns}
          dataSource={team.employees}
          pagination={false}
          rowKey="email"
        />
      </div>
    );
  };

  const columns = [
    {
      title: "Team",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text: string) => truncate(text, 100), // Limit description to 100 characters
    },
    {
      title: "Overall Score",
      dataIndex: "overall_score",
      key: "overall_score",
    },
    {
      title: "Total Employee Count",
      dataIndex: "total_employee_count",
      key: "total_employee_count",
    },
  ];

  return (
    <div>
      <Title title="Team and Employee Details" />
      <div className="mx-12">
        <Column {...config} />
      </div>
      <Title title="Team Details" />
      <div className="mx-12 mt-6">
        <Table
          columns={columns}
          dataSource={teams}
          expandable={{ expandedRowRender }}
          rowKey="title"
        />
      </div>
    </div>
  );
};

export default Page;
