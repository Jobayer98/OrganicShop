import React from "react";
import AddForm from "../comp/AddForm";
import DashboardLayout from "../../../layout/DashboardLayout";

const AddProduct = () => {
  return (
    <DashboardLayout>
      <div className="p-12 flex justify-center items-start gap-6 bg-slate-100">
        <div className="w-[720px]">
          <AddForm />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddProduct;
