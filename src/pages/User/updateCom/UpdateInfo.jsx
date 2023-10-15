import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "../../../utils/axios";
import UpdatePhoto from "./UpdatePhoto";
import UpdatePassword from "./UpdatePassword";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/Usercontext";

const UpdateInformation = () => {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const updateInfo = {
      name: data.name,
      email: user?.email,
      phone: data.phone,
      address: {
        city: data.city,
        street: data.street,
        postalCode: data.postalCode,
      },
    };

    try {
      setLoading(true);
      const res = await axios.patch("/user/update", updateInfo, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setLoading(false);
      if (res.status === 200) {
        const notify = () => toast.success("Information updated");
        setUser(res.data.data);
        navigate("/user/profile");
        notify();
      }
    } catch (error) {
      setLoading(false);
      const notify = () => toast.error("Information not updated");
      notify();
    }
  };
  return (
    <div className="border-t-2 border-[#7eb693] shadow-md rounded bg-white max-w-2xl">
      <h3 className="text-xl p-3">Personal Information</h3>
      <UpdatePhoto />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="p-3 ">
            <span className="mb-6 block">
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="border bg-slate-50 w-1/2 outline-none p-3 rounded-md text-sm"
                type="text"
                id="name"
                defaultValue={user.name}
                {...register("name", { required: true })}
              />
            </span>
            <div className="border-t pt-2">
              <span>
                <label
                  className="block mb-2 text-xl border-b pb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border-b pb-6">
                  <span>
                    <label htmlFor="city">City</label>
                    <input
                      className="border bg-slate-50 w-full outline-none p-3 rounded-md text-sm"
                      type="text"
                      id="city"
                      defaultValue={user?.address.city}
                      {...register("city")}
                    />
                  </span>
                  <span>
                    <label htmlFor="street">Street</label>
                    <input
                      className="border bg-slate-50 w-full outline-none p-3 rounded-md text-sm"
                      type="text"
                      id="street"
                      defaultValue={user?.address.street}
                      {...register("street")}
                    />
                  </span>
                  <span>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                      className="border bg-slate-50 w-full outline-none p-3 rounded-md text-sm"
                      type="text"
                      id="postalCode"
                      defaultValue={user?.address.postalCode}
                      {...register("postalCode")}
                    />
                  </span>
                </div>
              </span>
            </div>
            <span>
              <label className="block mt-6 mb-2" htmlFor="phone">
                Mobile number
              </label>
              <input
                className="border bg-slate-50 w-1/2 outline-none p-3 rounded-md text-sm"
                type="text"
                id="phone"
                defaultValue={user.phone}
                {...register("phone")}
              />
            </span>
          </div>
        </div>
        <div className="px-4 mt-4">
          <input
            className="bg-[#7EB693]  px-6 py-2 rounded text-white cursor-pointer"
            type="submit"
            value={`${loading ? "Updating..." : "Update"}`}
            disabled={loading}
          />
        </div>
      </form>
      <UpdatePassword />
    </div>
  );
};

export default UpdateInformation;
