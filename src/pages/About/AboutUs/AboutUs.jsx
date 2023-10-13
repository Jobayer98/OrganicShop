import img from "../../../assets/About/Banner/about.png";
import tractor from "../../../assets/About/img/Tractor.png";
import chemical from "../../../assets/About/img/Chemical.png";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center p-12 my-24">
      <div
        className="about_about w-1/2 bg-[110%]"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="bg-transparent w-1/2 flex flex-col gap-5 ml-12">
        <p className="font-[Yellowtail] text-[#7EB693] text-2xl">About Us</p>
        <h3 className="text-[#274c5b] text-4xl font-bold">
          We do Creative <br /> Things for Success
        </h3>
        <p className="text-[#525C60] w-[90%]">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry standard dummy text ever since the 1500s,
          when an unknown printer took a galley.
        </p>
        <div className="flex gap-8">
          <div className="flex items-center gap-3">
            <img src={tractor} alt="tractor" />
            <h3 className="text-lg font-semibold">
              Modern Agriculture <br /> Equipment
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <img src={chemical} alt="tractor" />
            <h3 className="text-lg font-semibold">
              No growth <br /> hormones are used
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
