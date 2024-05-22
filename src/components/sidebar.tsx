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
      } shadow-md transition duration-1000 ease-in-out`}
    >
      <div
        className={`flex relative items-center ${
          toggleSidebar ? "justify-center" : ""
        } py-5 px-3`}
      >
        <LuCherry className="text-rose-600 w-10 h-10" />
        <h3 className="pl-2  text-xl text-white min-w-max">
          {!toggleSidebar && <span className=" font-bold">Admin Panel</span>}
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
