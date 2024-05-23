"use client"
import useMenuStore from "@/store/menu-store";
import { LuCheckSquare, LuPlusCircle, LuUsers } from "react-icons/lu";

function Home() {
  const dashboardData = useMenuStore((state) => state.dashboardData);

  const boxStyle =
    "w-1/4 p-6 rounded-xl flex justify-between items-center gap-12 h-36";

  return (
    <main className="">
      <div className="flex justify-evenly gap-4 flex-wrap text-gray-500 ">
        <div className={`${boxStyle} bg-rose-300 `}>
          <LuCheckSquare className="text-rose-500 w-28 h-28" />
          <div className="flex flex-col-reverse items-end justify-between h-full">
            <span className="text-right italic">Total Completed Course</span>
            <span className="text-6xl font-bold ">
              {dashboardData?.total_completed_courses}
            </span>
          </div>
        </div>
        <div className={`${boxStyle} bg-cyan-300`}>
          <LuPlusCircle className="text-cyan-500 w-28 h-28" />
          <div className="flex flex-col-reverse items-end justify-between h-full ">
            <span className="text-right italic">Average Employee Score</span>
            <span className="text-6xl font-bold ">
              {dashboardData?.average_employee_score}
            </span>
          </div>
        </div>
        <div className={`${boxStyle} bg-lime-300`}>
          <LuUsers className="text-lime-500 w-28 h-28" />
          <div className="flex flex-col-reverse items-end justify-between h-full">
            <span className="text-right italic">Total Employees</span>
            <span className="text-6xl font-bold ">
              {dashboardData?.total_employees}
            </span>
          </div>
        </div>
        <div className={`${boxStyle} bg-yellow-300`}>
          <LuCheckSquare className="text-yellow-500 w-28 h-28" />
          <div className="flex flex-col-reverse items-end justify-between h-full">
            <span className="text-right italic">Teams</span>
            <span className="text-6xl font-bold ">
              {dashboardData?.teams?.length}
            </span>
          </div>
        </div>
        <div className={`${boxStyle} bg-fuchsia-300`}>
          <LuCheckSquare className="text-fuchsia-500 w-28 h-28" />
          <div className="flex flex-col-reverse items-end justify-between h-full">
            <span className="text-right italic">In Progress Courses</span>
            <span className="text-6xl font-bold">
              {dashboardData?.in_progress_courses?.length}
            </span>
          </div>
        </div>
        <div className={`${boxStyle} bg-indigo-300`}>
          <LuCheckSquare className="text-indigo-500 w-28 h-28" />
          <div className="flex flex-col-reverse items-end justify-between h-full">
            <span className="text-right italic">Upcoming Courses</span>
            <span className="text-6xl font-bold">
              {dashboardData?.upcoming_courses?.length}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Home;
