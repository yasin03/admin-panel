"use client";
import useMenuStore from "@/store/menu-store";
import { SideNavItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";



const SideBarMenuItem = ({ item }: { item: SideNavItem }) => {
 const toggleSidebar = useMenuStore((state) => state.toggleSidebar);
  const path = usePathname();
  const linkStyle = `hover:bg-gray-700 hover:scale-105 text-gray-300 hover:text-gray-100  rounded-xl transition-all duration-300 flex gap-x-3 ${
    toggleSidebar ? "p-2 py-4 m-2 flex justify-center " : "p-4 mx-4 my-2"
  }`;
  const activeLinkStyle = "bg-gray-700 text-gray-50";
  return (
    <>
      <Link
        href={item.path}
        className={`${linkStyle} ${path === item.path ? activeLinkStyle : ""}`}
      >
        {item.icon}
        {!toggleSidebar && <span>{item.title}</span>}
      </Link>
    </>
  );
};

export default SideBarMenuItem;
