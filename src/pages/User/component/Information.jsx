import { useContext } from "react";
import { UserContext } from "../../../context/Usercontext";

const Information = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="border-t-2 border-[#7eb693] shadow-md rounded bg-white max-w-2xl">
      <form>
        <h3 className="text-xl p-4">Personal Information</h3>
        <div className="p-4 border-t mt-3">
          <label htmlFor="photo">Your Profile Photo</label>
          <img
            className="mt-2 rounded-full bg-slate-200 w-32 h-32 object-cover"
            src=""
            alt="name"
          />
        </div>
        <div>
          <div className="p-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <span className="">
                <label className="block mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="border bg-slate-50 w-full outline-none p-4 rounded-md text-sm"
                  type="text"
                  id="name"
                  defaultValue={user.name}
                  readOnly
                />
              </span>
              <span>
                <label className="block mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="border bg-slate-50 w-full outline-none p-4 rounded-md text-sm"
                  type="email"
                  id="email"
                  defaultValue={user.email}
                  readOnly
                />
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <span>
                <label className="block mt-6 mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  className="border bg-slate-50 w-full outline-none p-4 rounded-md text-sm"
                  type="text"
                  id="address"
                  defaultValue={user.address}
                  readOnly
                />
              </span>
              <span>
                <label className="block mt-6 mb-2" htmlFor="phone">
                  Mobile number
                </label>
                <input
                  className="border bg-slate-50 w-full outline-none p-4 rounded-md text-sm"
                  type="text"
                  id="phone"
                  defaultValue={user.phone}
                  readOnly
                />
              </span>
            </div>
            <span>
              <label htmlFor="gender" className="block mt-6 mb-2">
                Gender
              </label>
              <span className="flex gap-3 text-sm">
                <span>
                  <input type="radio" name="gender" id="male" value={"male"} />
                  <label className=" bg-slate-50 ml-2" htmlFor="male">
                    Male
                  </label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value={"female"}
                  />
                  <label className="ml-2" htmlFor="female">
                    Female
                  </label>
                </span>
              </span>
            </span>
          </div>
        </div>

        <div className="border-t mt-3 pb-4">
          <h3 className="text-xl border-b p-4">Change Password</h3>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <span>
              <label className="block mb-2" htmlFor="password">
                Old password
              </label>
              <input
                className="border bg-slate-50 w-full outline-none p-3 rounded-md text-sm mb-4"
                type="password"
              />
            </span>
            <span>
              <label className="block mb-2" htmlFor="password">
                New password
              </label>
              <input
                className="border bg-slate-50 w-full outline-none p-3 rounded-md text-sm"
                type="password"
              />
            </span>
          </div>
        </div>
        <div className="px-8 pb-8">
          <input
            className="bg-[#7EB693] w-full p-3 rounded-md text-white cursor-pointer"
            type="submit"
            value="Save"
          />
        </div>
      </form>
    </div>
  );
};

export default Information;
