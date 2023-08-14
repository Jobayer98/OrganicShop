import "./Testimonial.css";
import user from "../../../assets/Home/img/user.png";
import { Rating } from "@mui/material";
import Chart from "./Chart/Chart";
const Testimonial = () => {
  return (
    <div className="testimonial h-[680px] flex flex-col justify-center items-center gap-6">
      <div className="text-center">
        <p className="font-[Yellowtail] text-[#68A47F] text-2xl">Testimonial</p>
        <h2 className="text-[#274c5b] text-4xl font-bold my-3">
          What Our Customer Saying?
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <figure>
          <img className="rounded-full mb-4" src={user} alt="user" />
        </figure>
        <Rating size="small" value={5} readOnly />

        <p className="w-[55%] mt-4 text-[#525C60]">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been.
        </p>
        <h3 className="text-[#274c5b] text-lg font-bold mt-2">Sarah Tylor</h3>
        <span className="text-sm text-[#525C60]">Consumer</span>
      </div>
      <div className="flex justify-center items-center gap-8 ">
        <Chart num={"100%"} label={"Organic"} />
        <Chart num={"285"} label={"Active Product"} />
        <Chart num={"350+"} label={"Organic Orchads"} />
        <Chart num={"25+"} label={"Years of Farming"} />
      </div>
    </div>
  );
};

export default Testimonial;
