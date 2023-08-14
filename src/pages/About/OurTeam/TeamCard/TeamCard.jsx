import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const TeamCard = ({ img, name, passion }) => {
  return (
    <div className="w-[250px] pb-3 rounded-xl hover:shadow-xl hover:bg-white bg-[#f9f8f8] justify-self-center">
      <img className="rounded-t-xl" src={img} alt="team_member" />
      <h4 className="font-bold text-lg mt-4 pl-4">{name}</h4>
      <div className="flex justify-between items-center px-4">
        <p className="font-[Yellowtail] text-[#7EB693]">{passion}</p>
        <div className="flex justify-center items-center gap-2">
          <BsInstagram />
          <BsFacebook />
          <BsTwitter />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
