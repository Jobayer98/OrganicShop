import banner from "../../../assets/Home/Banner/image.png";
import Button from "../../../components/UI/Buttons/Button";
import { BsArrowRightShort } from "react-icons/bs";
const Banner = () => {
  return (
    <div
      className="bg-[#f1eff0] h-[520px] flex flex-col justify-center bg-center bg-cover pl-20"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div>
        <p className="font-[Yellowtail] text-[#68A47F]">100% Natural Food</p>
        <h2 className="text-7xl font-extrabold">
          Choose the best <br />
          healthier way <br /> of life
        </h2>
      </div>
      <Button className={"w-[150px] bg-[#EFD372] text-[#274c5b]"}>
        Explore Now{" "}
        <BsArrowRightShort className="bg-[#274c5b] text-white rounded-full ml-1" />
      </Button>
    </div>
  );
};

export default Banner;
