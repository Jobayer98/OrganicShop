import React from "react";
import Information from "./component/Information";
import SideNav from "./component/SideNav";

const Profile = () => {
  return (
    <div className="p-12 flex justify-center items-start gap-6 bg-slate-100">
      <div className="w-56">
        <SideNav />
      </div>
      <div className="w-[720px]">
        <Information />
      </div>
    </div>
  );
};

export default Profile;
