import { useForm } from "react-hook-form";
import axios from "../../utils/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SignUp() {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.form?.pathname || "/profile";
  const onSubmit = async (data) => {
    // console.log(data)
    try {
      const response = await axios.post("/signup", data);
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex justify-center pt-12">
      <div className="border p-4 rounded shadow-md">
        <div className="mb-8 my-4">
          <h2 className="text-3xl font-bold">
            Welcome to <span className="text-[#274C5B]">Organic Food</span>
          </h2>
          <p className="text-sm text-[#7EB693] mt-2">
            Choose the best healthier way of life
          </p>
        </div>
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-[#9796A1] w-[400px] flex flex-col mt-3"
        >
          <div className="my-2">
            <label className="text-left" htmlFor="fullname">
              Full name
            </label>
            <br />
            <input
              {...register("name", { required: true })}
              className="focus:ring-1 focus:outline-none focus:ring-[#274C5B] w-full h-12 rounded-lg pl-3 text-black border mt-2"
              type="text"
              placeholder="Your full name"
            />
          </div>
          <div className="my-2">
            <label className="text-left" htmlFor="email">
              E-mail
            </label>
            <br />
            <input
              {...register("email", { required: true })}
              className="focus:ring-1 focus:outline-none focus:ring-[#274C5B] w-full h-12 rounded-lg pl-3 text-black border mt-2"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="my-2">
            <label className="text-left" htmlFor="password">
              Password
            </label>
            <br />
            <input
              {...register("password", { required: true })}
              className="focus:ring-1 focus:outline-none focus:ring-[#274C5B] w-full h-12 rounded-lg pl-3 text-black border mt-2"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center mt-8">
            <input
              className="uppercase bg-[#274C5B] hover:bg-[#326072] font-medium text-white rounded-full w-1/2 py-[10px] cursor-pointer transition-all duration-500 ease-in-out"
              type="submit"
              value="Sign Up"
            />
          </div>
        </form>
        <p className="my-4 text-center">
          Already have an account?{" "}
          <Link className="text-[#7EB693]" to="/login">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default SignUp;