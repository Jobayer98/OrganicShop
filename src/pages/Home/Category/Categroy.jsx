import img1 from "../../../assets/Home/Card/card7.jpg";
import img2 from "../../../assets/Home/Card/card8.jpg";
import img3 from "../../../assets/Home/Card/card9.jpg";
const Categroy = () => {
  return (
    <div className="flex justify-center gap-8 bg-[#F1F8F4] py-20">
      <figure className="relative flex justify-center items-center">
        <img className="h-72" src={img1} alt="organic" />
        <p className="absolute bg-white px-4 py-2 rounded-lg text-[#274c5b] font-semibold">
          Organic Juice
        </p>
      </figure>
      <figure className="relative flex justify-center items-center">
        <img className="h-72" src={img2} alt="organic" />
        <p className="absolute bg-white px-4 py-2 rounded-lg text-[#274c5b] font-semibold">
          Organic Food
        </p>
      </figure>
      <figure className="relative flex justify-center items-center">
        <img className="h-72" src={img3} alt="organic" />
        <p className="absolute bg-white px-4 py-2 rounded-lg text-[#274c5b] font-semibold">
          Nuts Cookies
        </p>
      </figure>
    </div>
  );
};

export default Categroy;
