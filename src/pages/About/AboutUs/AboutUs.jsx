import img from "../../../assets/About/Banner/banner1.png";
import tractor from "../../../assets/About/img/Tractor.png";
import chemical from "../../../assets/About/img/Chemical.png";
import Button from "../../../components/UI/Buttons/Button";
import { BsArrowRightShort } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center bg-[#f9f8f8] p-12">
      <div
        className="about w-1/2"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="bg-transparent w-1/2 flex flex-col gap-3 -ml-16">
        <p className="font-[Yellowtail] text-[#7EB693] text-2xl">About Us</p>
        <h3 className="text-[#274c5b] text-4xl font-bold">
          We Believe in Working <br /> Accredited Farmers
        </h3>
        <p className="text-[#525C60] w-[90%]">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry standard dummy text ever since the 1500s,
          when an unknown printer took a galley.
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <img src={tractor} alt="tractor" />
            <h3 className="text-lg font-bold">Modern Agriculture Equipment</h3>
          </div>
        </div>
        <Button className={"w-[150px] bg-[#274c5b] text-white"}>
          Explore Now{" "}
          <BsArrowRightShort className="bg-[#335B6B] text-white rounded-full ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
