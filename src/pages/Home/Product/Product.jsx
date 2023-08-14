import Card from "../../../components/UI/Card/Card";
import img from "../../../assets/Home/Product/pdc1.png";
import Button from "../../../components/UI/Buttons/Button";
import { BsArrowRightShort } from "react-icons/bs";

const Product = () => {
  const array = [1, 2, 3, 4];
  return (
    <div className="my-12 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="text-center">
        <p className="text-[#7EB693] font-[Yellowtail] text-3xl ">Categories</p>
        <h3 className="text-[#274C5B] text-4xl font-bold my-3 mb-8">
          Our Products
        </h3>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {array.map((item) => (
          <Card
            key={item}
            img={img}
            label={"Vegetable"}
            title={"Calabrese Brocoli"}
            price={"12.00"}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button className={"w-[150px] mt-4 bg-[#274c5b] text-white"}>
          Explore Now{" "}
          <BsArrowRightShort className="bg-[#335B6B] text-white rounded-full ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default Product;
