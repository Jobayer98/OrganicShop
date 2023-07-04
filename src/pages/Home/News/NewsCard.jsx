import { BsArrowRightShort } from "react-icons/bs";
import Button from "../../../components/UI/Buttons/Button";
const NewsCard = ({ img, title }) => {
  return (
    <div className="relative rounded-xl w-[450px]">
      <div className="bg-white w-14 h-14 rounded-full flex flex-col justify-center items-center absolute top-6 left-4">
        <p className="text-lg font-bold">25</p>
        <p className="-mt-2 font-semibold text-base">Nov</p>
      </div>
      <figure className="">
        <img className=" rounded-xl" src={img} alt="" />
      </figure>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white w-[80%] rounded-xl p-4 shadow-lg">
        <p className="text-xs">By Rachi Card</p>
        <h3 className="font-semibold my-1">{title}</h3>
        <p className="text-sm -mb-3">
          Simply dummy text of the printing and typesetting industry.
        </p>
        <Button className="w-[140px] mt-8 bg-[#EFD372] text-[#274c5b] text-sm">
          More News{" "}
          <BsArrowRightShort className="bg-[#335B6B] text-white rounded-full ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
