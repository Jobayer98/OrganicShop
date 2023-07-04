import { BsArrowRightShort } from "react-icons/bs";
import img from "../../../assets/About/Banner/banner3.png";
import rtn_policy from "../../../assets/About/icon/return.png";
import fresh from "../../../assets/About/icon/fresh.png";
import support from "../../../assets/About/icon/support.png";
import payment from "../../../assets/About/icon/payment.png";
import ChooseCard from "./ChooseCard/ChooseCard";
const ChooseUs = () => {
  return (
    <>
      <div className="flex flex-row-reverse justify-center items-center pt-24 bg-[#F9F8F8]">
        <img className="h-96 rounded-xl" src={img} alt="" />
        <div className="bg-transparent w-1/2 flex flex-col gap-3 lg:ml-12">
          <p className="font-[Yellowtail] text-[#7EB693] text-2xl">
            Why Choose Us?
          </p>
          <h3 className="text-[#274c5b] text-4xl font-bold">
            We do not buy from the <br /> open market & traders.
          </h3>
          <p className="text-[#525C60] w-[90%]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard the 1500s, when an
            unknown
          </p>
          <div>
            <div className="mb-8">
              <p className="flex items-center gap-2 font-semibold mb-4 bg-[#ECECEC] p-3 rounded-full pl-4 lg:w-64">
                <span className="h-2 w-2 rounded-full ring-4 ring-[#7EB693] block"></span>{" "}
                100% Natural Product
              </p>
              <p className="ml-8 lg:w-96">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 font-semibold mb-4 bg-[#ECECEC] p-3 rounded-full pl-4 lg:w-64">
                <span className="h-2 w-2 rounded-full ring-4 ring-[#7EB693] block"></span>{" "}
                Increases resistance
              </p>
              <p className="ml-8 lg:w-96">
                Filling, and temptingly healthy, our Biona Organic Granola with
                Wild Berries is just the thing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8 py-20 bg-[#F9F8F8]">
        <ChooseCard
          img={rtn_policy}
          title="Return Policy"
          para="Simply dummy text of the printintypesetting industry."
        />
        <ChooseCard
          img={fresh}
          title="100% Fresh"
          para="Simply dummy text of the printintypesetting industry."
        />
        <ChooseCard
          img={support}
          title="Support 24/7"
          para="Simply dummy text of the printintypesetting industry."
        />
        <ChooseCard
          img={payment}
          title="Secured Payment"
          para="Simply dummy text of the printintypesetting industry."
        />
      </div>
    </>
  );
};

export default ChooseUs;
