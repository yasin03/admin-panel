import useMenuStore from "@/store/menu-store";
import React, { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
    const toggleSidebar = useMenuStore((state) => state.toggleSidebar);

  return <div className={`bg-slate-50 text-black flex-grow p-3 ${
        toggleSidebar ? "pl-[6rem]" : "pl-[16rem]"} mt-16`}>{children}</div>;
};

export default PageWrapper;
