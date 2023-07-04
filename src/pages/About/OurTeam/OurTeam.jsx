import TeamCard from "./TeamCard/TeamCard";
import team1 from "../../../assets/About/team/team1.png";
import team2 from "../../../assets/About/team/team2.png";
import team3 from "../../../assets/About/team/team3.png";

const OurTeam = () => {
  return (
    <div className="my-24">
      <div className="text-center">
        <p className="font-[Yellowtail] text-[#7EB693] text-2xl">Team</p>
        <h3 className="text-[#274c5b] text-4xl font-bold mt-1 mb-4">
          Our Organic Experts
        </h3>
        <p className="text-[#525C60] lg:w-[60%] mx-auto">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry standard dummy text ever since the 1500s,
          when an unknown printer took a galley.
        </p>
      </div>
      <div className="flex justify-center gap-12 mt-12">
        <TeamCard img={team1} name="Glovani Bacardo" passion="Farmer" />
        <TeamCard img={team2} name="Marianne Loreno" passion="Farmer" />
        <TeamCard img={team3} name="Glovani Bacardo" passion="Farmer" />
      </div>
    </div>
  );
};

export default OurTeam;
