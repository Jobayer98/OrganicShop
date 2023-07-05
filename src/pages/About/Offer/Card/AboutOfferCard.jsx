import React from "react";

const AboutOfferCard = ({ img, pd_name }) => {
  return (
    <div>
      <img className="rounded-xl h-60 w-60" src={img} alt="products" />
      <p className="text-white text-center mt-3">{pd_name}</p>
    </div>
  );
};

export default AboutOfferCard;
