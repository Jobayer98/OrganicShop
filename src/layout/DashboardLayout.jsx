import React from "react";
import SideNav from "../components/SideNav";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-start bg-slate-100">
      <SideNav />
      {children}
    </div>
  );
};

export default DashboardLayout;
