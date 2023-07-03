import { BsArrowRightShort } from "react-icons/bs";
import Button from "../UI/Buttons/Button";
import "./About.css";

const AboutCard = ({ bannerImg, children }) => {
  return (
    <div className="flex justify-center items-center bg-[#f9f8f8] p-12">
      <div
        className="about w-1/2"
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></div>
      <div className="bg-transparent w-1/2 flex flex-col gap-3 -ml-16">
        {children}
        <Button className={"w-[150px] bg-[#274c5b] text-white"}>
          Explore Now{" "}
          <BsArrowRightShort className="bg-[#335B6B] text-white rounded-full ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default AboutCard;
