import img from "../../../assets/Home/Banner/about.png";
import vegan from "../../../assets/Home/img/vegan.png";
import mail from "../../../assets/Home/img/mail.png";
import "./About.css";
import Card from "./Card";
import Button from "../../../components/UI/Buttons/Button";
import { BsArrowRightShort } from "react-icons/bs";
const About = () => {
  return (
    <div className="flex justify-center items-center bg-[#f9f8f8] p-12">
      <div
        className="about w-1/2"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="bg-transparent w-1/2 flex flex-col gap-3 -ml-28">
        <p className="font-[Yellowtail] text-[#7EB693] text-2xl">About Us</p>
        <h3 className="text-[#274c5b] text-4xl font-bold">
          We Believe in Working <br /> Accredited Farmers
        </h3>
        <p className="text-[#525C60] w-[90%]">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry standard dummy text ever since the 1500s,
          when an unknown printer took a galley.
        </p>
        <div className="flex flex-col gap-6">
          <Card img={vegan}>
            <h1 className="text-lg font-bold">Organic Foods Only</h1>
            <p className="text-sm text-[#525C60]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </Card>
          <Card img={mail}>
            <h1 className="text-lg font-bold">Organic Foods Only</h1>
            <p className="text-sm text-[#525C60]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </Card>
        </div>
        <Button className={"w-[150px] bg-[#274c5b] text-white"}>
          Explore Now{" "}
          <BsArrowRightShort className="bg-[#335B6B] text-white rounded-full ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default About;
