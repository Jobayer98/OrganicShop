import { Rating } from "@mui/material";

const Card = ({ label, img, title, price }) => {
  return (
    <div className="border shadow rounded-xl">
      <p className="bg-[#274c5b] text-white text-center rounded-md w-fit px-2 py-1 mt-4 ml-6">
        {label}
      </p>
      <figure>
        <img className="h-52" src={img} alt={title} />
      </figure>
      <div className="text-lg font-bold px-6">
        <h3 className="mb-2">{title}</h3>
        <hr />
        <div className="mt-2 flex justify-between">
          <p>
            <span>
              <strike className="text-[#B8B8B8] text-base font-normal">
                $20.00
              </strike>
            </span>{" "}
            ${price}
          </p>
          <p>
            <Rating name="read-only" value={5} readOnly />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
