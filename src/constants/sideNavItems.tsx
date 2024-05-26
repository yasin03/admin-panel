import React from "react";
import { SideNavItem } from "../types/types";
import {
  LuHome,
  LuUsers2,
  LuPower,
  LuSquareDashedBottomCode,
  LuRepeat,
  LuPencilRuler,
  LuArrowDown10,
  LuClock3,
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
    title: "Activity Hours",
    path: "/activity-hours",
    icon: <LuClock3 size={20} />,
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
    title: "Top Skills",
    path: "/skills",
    icon: <LuPencilRuler size={20} />,
  },
  {
    title: "Top Employees",
    path: "/top-employees",
    icon: <LuArrowDown10 size={20} />,
  },
  {
    title: "Exit",
    path: "https://www.google.com.tr/",
    icon: <LuPower size={20} />,
  },
];
