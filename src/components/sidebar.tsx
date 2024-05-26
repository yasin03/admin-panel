import { sideNavItems } from "../constants/sideNavItems";
import React from "react";
import { LuCherry } from "react-icons/lu";
import SideBarMenuItem from "./sideBarMenuItem";
import useMenuStore from "@/store/menu-store";

const Sidebar = () => {
  const toggleSidebar = useMenuStore((state) => state.toggleSidebar);
  return (
    <aside
      className={`fixed bg-slate-800 h-full ${
        toggleSidebar ? "w-[5rem]" : "w-[15rem]"
      } shadow-md transition-all duration-500`}
    >
      <div
        className={`flex relative items-center gap-2 border-b-[1px] border-b-gray-500 h-16 ${
          toggleSidebar ? "justify-center" : ""
        } py-5 px-3 transition-all duration-500`}
      >
        <LuCherry className="text-red-600 w-9 h-9" />
        <h3 className="pl-2  text-xl text-white min-w-max">
          {!toggleSidebar && <span className="">Admin Panel</span>}
        </h3>
      </div>
      <nav className="mt-12">
        {sideNavItems.map((item, index) => (
          <div key={index} className=" ">
            <SideBarMenuItem item={item} />
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
