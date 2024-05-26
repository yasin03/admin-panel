"use client";
import useMenuStore from "@/store/menu-store";
import {
  LuCheckSquare,
  LuPlusCircle,
  LuUsers,
  LuRefreshCw,
  LuCog,
} from "react-icons/lu";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { IconType } from "react-icons/lib";

interface CustomBoxProps {
  icon: IconType;
  title: string;
  value: string | number;
  iconColor?: string;
  bgColor?: string;
}

const CustomBox: React.FC<CustomBoxProps> = ({
  icon: Icon,
  title,
  value,
  iconColor = "text-yellow-500",
  bgColor = "bg-yellow-300",
}) => {
  return (
    <div
      className={`w-full sm:w-2/5 md:w-1/3 lg:w-1/4 p-6 rounded-xl flex justify-between items-center flex-wrap gap-4 h-36 ${bgColor}`}
    >
      <div className="w-1/4">
        <Icon className={`text-2xl lg:text-6xl ${iconColor}`} />
      </div>
      <div className="flex flex-col items-end justify-between h-full w-2/4">
        <span className="text-xl lg:text-3xl font-bold">{value}</span>
        <span className="text-sm lg:text-md text-right italic">{title}</span>
      </div>
    </div>
  );
};


function Home() {
  const dashboardData = useMenuStore((state) => state.dashboardData);

  return (
    <main>
      <div className="flex flex-wrap justify-evenly gap-4 text-gray-500 p-4">
        <CustomBox
          icon={LuCheckSquare}
          title="Total Completed Course"
          value={dashboardData?.total_completed_courses || "0"}
          bgColor="bg-rose-300"
          iconColor="text-rose-500"
        />
        <CustomBox
          icon={LuPlusCircle}
          title="Average Employee Score"
          value={dashboardData?.average_employee_score || "0"}
          bgColor="bg-cyan-300"
          iconColor="text-cyan-500"
        />
        <CustomBox
          icon={LuUsers}
          title="Total Employees"
          value={dashboardData?.total_employees || "0"}
          bgColor="bg-lime-300"
          iconColor="text-lime-500"
        />
        <CustomBox
          icon={PiMicrosoftTeamsLogo}
          title="Teams"
          value={dashboardData?.teams?.length || "0"}
          bgColor="bg-yellow-300"
          iconColor="text-yellow-500"
        />
        <CustomBox
          icon={LuRefreshCw}
          title="In Progress Courses"
          value={dashboardData?.in_progress_courses?.length || "0"}
          bgColor="bg-fuchsia-300"
          iconColor="text-fuchsia-500"
        />
        <CustomBox
          icon={LuCog}
          title="Upcoming Courses"
          value={dashboardData?.upcoming_courses?.length || "0"}
          bgColor="bg-indigo-300"
          iconColor="text-indigo-500"
        />
      </div>
    </main>
  );
}
export default Home;
