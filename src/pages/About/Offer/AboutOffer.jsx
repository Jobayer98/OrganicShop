import React from "react";
import AboutOfferCard from "./Card/AboutOfferCard";
import img from "../../../assets/About/product/spicy.png";

const AboutOffer = () => {
  const array = [1, 2, 3, 4];
  return (
    <div className="h-[680px] bg-[#274C5B] flex flex-col justify-center gap-8 px-32 py-4">
      <div className="text-center">
        <p className="font-[Yellowtail] text-[#68A47F] text-2xl">About Us</p>
        <h3 className="text-white text-4xl font-bold my-3">
          We Offer Organic For You
        </h3>
      </div>
      <div className="flex gap-6 justify-center items-center">
        {array.map((item) => (
          <AboutOfferCard key={item} img={img} pd_name="Spicy" />
        ))}
      </div>
    </div>
  );
};

export default AboutOffer;
