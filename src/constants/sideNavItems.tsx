import React from "react";
import { SideNavItem } from "../types/types";
import {
  LuHome,
  LuUsers2,
  LuXSquare,
  LuSquareDashedBottomCode,
  LuRepeat,
} from "react-icons/lu";

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
    title: "Ongoing Courses",
    path: "/ongoing-courses",
    icon: <LuRepeat size={20} />,
  },
  {
    title: "Upcoming Courses",
    path: "/upcoming-courses",
    icon: <LuSquareDashedBottomCode size={20} />,
  },
  {
    title: "Exit",
    path: "/exit",
    icon: <LuXSquare size={20} />,
  },
];
