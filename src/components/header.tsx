import useMenuStore from "@/store/menu-store";
import React, { Dispatch, SetStateAction } from "react";
import { LuAlignJustify, LuUserCircle2, LuX } from "react-icons/lu";

const Header = () => {
  const toggleSidebar = useMenuStore((state) => state.toggleSidebar);
  const setToggleSidebar = useMenuStore((state) => state.setToggleSidebar);
  const buttonStyle =
    "text-gray-300 hover:text-gray-100 hover:scale-105 transition-all";

  return (
    <header
      className={`absolute right-0 ${
        toggleSidebar ? "left-[5rem]" : "left-[15rem]"
      }  bg-slate-800 px-4  shadow-md transition-all`}
    >
      <div className="flex items-center justify-between h-16 transition-all">
        <button onClick={() => setToggleSidebar(!toggleSidebar)}>
          {toggleSidebar ? (
            <LuX size={25} className={buttonStyle} />
          ) : (
            <LuAlignJustify size={25} className={buttonStyle} />
          )}
        </button>
        <button>
          <LuUserCircle2 size={25} className={buttonStyle} />
        </button>
      </div>
    </header>
  );
};

export default Header;
