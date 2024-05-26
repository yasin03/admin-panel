import useMenuStore from "@/store/menu-store";
import React, { Dispatch, SetStateAction } from "react";
import {
  LuAlignJustify,
  LuUserCircle2,
  LuX,
  LuChevronDown,
} from "react-icons/lu";

const Header = () => {
  const toggleSidebar = useMenuStore((state) => state.toggleSidebar);
  const setToggleSidebar = useMenuStore((state) => state.setToggleSidebar);
  const buttonStyle =
    "text-gray-300 hover:text-gray-100 hover:scale-105 transition-all";

  return (
    <header
      className={`absolute right-0 ${
        toggleSidebar ? "left-[5rem]" : "left-[15rem]"
      }  bg-slate-800  shadow-md transition-all`}
    >
      <div className="flex items-center justify-between ml-4 h-16 transition-all">
        <button onClick={() => setToggleSidebar(!toggleSidebar)}>
          {toggleSidebar ? (
            <LuX size={25} className={buttonStyle} />
          ) : (
            <LuAlignJustify size={25} className={buttonStyle} />
          )}
        </button>
        <button className="bg-red-600 h-full w-12 md:w-60 px-3 md:px-4 flex justify-evenly items-center hover:bg-red-500 transition-all">
          <LuUserCircle2 size={35} className={buttonStyle} />
          <span className="hidden md:inline-flex text-lg font-medium text-gray-100">
            Yasin Türk
          </span>
          <LuChevronDown
            size={25}
            className={`${buttonStyle} hidden md:inline-flex`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
