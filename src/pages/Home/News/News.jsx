import { BsArrowRightShort } from "react-icons/bs";
import Button from "../../../components/UI/Buttons/Button";
import NewsCard from "./NewsCard";
import img from "../../../assets/Home/Card/card10.png";
import img2 from "../../../assets/Home/Card/card11.png";

const News = () => {
  return (
    <div className="my-24 flex flex-col">
      <div className="flex justify-between items-center mx-[150px]">
        <div>
          <p className="font-[Yellowtail] text-[#68A47F] text-2xl">News</p>
          <h2 className="text-[#274c5b] text-4xl font-bold my-1">
            Discover weekly content about <br /> organic food, & more
          </h2>
        </div>
        <Button className="w-[150px] border border-[#274c5b] text-[#274c5b]">
          More News{" "}
          <BsArrowRightShort className="bg-[#335B6B] text-white rounded-full ml-1" />
        </Button>
      </div>
      <div className="flex justify-center items-center gap-12 mt-8">
        <NewsCard
          img={img}
          title={" The Benefits of Vitamin D & How to Get It"}
        />
        <NewsCard img={img2} title={"Our Favourite Summertime Tommeto"} />
      </div>
    </div>
  );
};

export default News;
