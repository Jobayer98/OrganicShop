import React from "react";
import AboutOfferCard from "./Card/AboutOfferCard";
import spicy from "../../../assets/About/product/spicy.png";
import nuts from "../../../assets/About/product/nuts.png";
import fruits from "../../../assets/About/product/fruits.png";
import vegetables from "../../../assets/About/product/vegetable.png";

const AboutOffer = () => {
  return (
    <div className="h-[680px] bg-[#274C5B] flex flex-col justify-center gap-8 px-32 py-4">
      <div className="text-center">
        <p className="font-[Yellowtail] text-[#68A47F] text-2xl">About Us</p>
        <h3 className="text-white text-4xl font-bold my-3">
          We Offer Organic For You
        </h3>
      </div>
      <div className="flex gap-6 justify-center items-center">
        <AboutOfferCard img={spicy} pd_name="Spicy" />
        <AboutOfferCard img={nuts} pd_name="Nuts" />
        <AboutOfferCard img={fruits} pd_name="Fruits" />
        <AboutOfferCard img={vegetables} pd_name="Vegetables" />
      </div>
    </div>
  );
};

export default AboutOffer;
