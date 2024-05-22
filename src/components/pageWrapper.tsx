import React, { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="bg-slate-50 text-black flex-grow p-3 pl-[16rem] mt-16">{children}</div>;
};

export default PageWrapper;
