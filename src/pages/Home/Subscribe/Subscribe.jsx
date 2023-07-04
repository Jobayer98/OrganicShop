import Button from "../../../components/UI/Buttons/Button";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="subscribe flex justify-between items-center px-12 mt-40">
      <div>
        <h3 className="text-4xl font-semibold text-white">
          Subscribe to <br />
          our Newsletter
        </h3>
      </div>
      <div className="flex justify-center items-center gap-4">
        <input
          className="bg-white text-gray-500 py-3 rounded-xl pl-3 outline-none"
          type="email"
          placeholder="Your Email Address"
        />
        <Button className="bg-[#274C5B] rounded-xl text-white px-5">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Subscribe;
