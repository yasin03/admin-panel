import React from "react";
import { SideNavItem } from "../types/types";
import { LuHome } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import { LuXSquare } from "react-icons/lu";

export const sideNavItems: SideNavItem[] = [
  {
    title: "Dashboard",
    path: "/",
    icon: <LuHome size={20} />,
  },
  {
    title: "Teams",
    path: "/teams",
    icon: <LuUsers2 size={20} />,
  },
  {
    title: "Employee",
    path: "/employee",
    icon: <LuHome size={20} />,
  },
  {
    title: "Exit",
    path: "/exit",
    icon: <LuXSquare size={20} />,
  },
];
