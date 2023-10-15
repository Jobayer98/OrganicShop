import { useContext } from "react";
import { UserContext } from "../../../context/Usercontext";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";

const Information = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="border-t-2 border-[#7eb693] shadow-md rounded bg-white max-w-2xl">
      <form>
        <div className="text-xl p-4 flex justify-between items-center">
          <h3>Personal Information</h3>
          <Link className="tooltip" data-tip="Edit" to="/user/profile/update">
            <AiOutlineEdit />
          </Link>
        </div>
        <div className="p-4 border-t mt-3">
          <label htmlFor="photo">Your Profile Photo</label>
          <img
            className="mt-2 rounded-full bg-slate-200 w-32 h-32 object-cover"
            src={
              user?.image?.secure_url ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="photo"
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
                  defaultValue={
                    user?.address.city + ", " + user?.address.street
                  }
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default Information;
