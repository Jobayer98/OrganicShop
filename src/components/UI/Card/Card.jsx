import { Rating } from "@mui/material";

const Card = ({ label, img, title, price, className }) => {
  return (
    <div
      className={`flex flex-col  gap-6 border hover:shadow-xl hover:scale-95 transition-all ease-in-out duration-200 rounded-xl w-72 relative bg-[#f9f8f8] justify-self-center ${className}`}
    >
      <p className="bg-[#274c5b] absolute top-0 left-0 text-white text-center rounded-md w-fit px-2 py-1 mt-4 ml-6">
        {label}
      </p>
      <figure className="flex justify-center items-center mt-16 ">
        <img className="h-52" src={img} alt={title} />
      </figure>
      <div className="text-lg font-bold mx-6 mb-2 mt-6">
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
            <Rating size="small" name="read-only" value={5} readOnly />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
