import img from "../../../assets/Home/Banner/banner5.jpg";
const Our = () => {
  return (
    <div className="flex justify-center items-center relative">
      <figure className="w-full">
        <img className="h-[550px] w-1/2" src={img} alt="about" />
      </figure>
      <div className="absolute left-[550px] bg-white p-8 rounded-xl shadow">
        <p className="font-[Yellowtail] text-[#68A47F] text-2xl">
          Eco Friendly
        </p>
        <h2 className="text-[#274c5b] text-3xl font-bold my-3">
          Econis is a Friendly <br /> Organic Store
        </h2>
        <div>
          <h5 className="text-[#274c5b] font-semibold">
            Start with Our Company First
          </h5>
          <p className="w-[70%] mt-1 text-[#525C60] text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div className="mt-4">
          <h5 className="text-[#274c5b] font-semibold">
            Start with Our Company First
          </h5>
          <p className="w-[70%] mt-1 text-[#525C60] text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
        <div className="mt-4">
          <h5 className="text-[#274c5b] font-semibold">
            Start with Our Company First
          </h5>
          <p className="w-[70%] mt-1 text-[#525C60] text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptat
            accusantium doloremque laudantium. Sed ut perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Our;
