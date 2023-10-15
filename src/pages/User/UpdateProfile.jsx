import React from "react";
import UpdateInformation from "./updateCom/UpdateInfo";
import DashboardLayout from "../../layout/DashboardLayout";

const UpdateProfile = () => {
  return (
    <DashboardLayout>
      <div className="p-12 flex justify-center items-start gap-6 bg-slate-100">
        <div className="w-[720px]">
          <UpdateInformation />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UpdateProfile;
