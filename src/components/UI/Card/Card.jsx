import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const Card = ({ item, img }) => {
  return (
    <Link
      to={`/shop/${item?.category.toLowerCase()}/${item?._id}`}
      className={`flex flex-col  gap-6 border hover:shadow-xl hover:scale-95 transition-all ease-in-out duration-200 w-full rounded-md relative bg-[#f9f8f8] justify-self-center`}
    >
      <p className="bg-[#274c5b] text-sm absolute top-0 left-0 text-white text-center rounded w-fit px-2 py-1 mt-4 ml-6">
        {item?.category}
      </p>
      <figure className="flex justify-center items-center mt-16 ">
        <img className="h-52" src={item?.image} alt={item?.name} />
      </figure>
      <div className="text-lg font-bold mx-6 mb-2 mt-2">
        <h3 className="mb-2">{item?.name}</h3>
        <hr />
        <div className="mt-2 flex justify-between">
          <p>
            <span>
              <strike className="text-[#B8B8B8] text-base font-normal">
                $20.00
              </strike>
            </span>{" "}
            ${item?.price}
          </p>
          <p>
            <Rating
              size="small"
              name="half-rating-read"
              defaultValue={item?.rating}
              precision={0.5}
              readOnly
            />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
