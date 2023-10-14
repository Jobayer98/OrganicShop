import { useForm } from "react-hook-form";

import { useContext } from "react";

const UpdatePassword = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="border-t mt-3 pb-4">
      <h3 className="text-xl border-b p-3">Change Password</h3>
      <form>
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          <span>
            <label className="block mb-2" htmlFor="password">
              Old password
            </label>
            <input
              className="border bg-slate-50 w-full outline-none p-3 rounded-md text-sm mb-4"
              type="password"
              {...register("oldPassword")}
            />
          </span>
          <span>
            <label className="block mb-2" htmlFor="password">
              New password
            </label>
            <input
              className="border bg-slate-50 w-full outline-none p-3 rounded-md text-sm"
              type="password"
              {...register("newPassword")}
            />
          </span>
          <div>
            <input
              className="bg-[#7EB693]  px-4 py-2 rounded text-white cursor-pointer"
              type="submit"
              value="Save"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
