import team1 from "../../../assets/Team/team1.png";
import team2 from "../../../assets/Team/team2.png";
import team3 from "../../../assets/Team/team3.png";
import TeamCard from "../../About/OurTeam/TeamCard/TeamCard";
const Experts = () => {
  return (
    <div className="my-24 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
      <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <TeamCard img={team1} name="Glovani Bacardo" passion="Farmer" />
        <TeamCard img={team2} name="Marianne Loreno" passion="Farmer" />
        <TeamCard img={team3} name="Glovani Bacardo" passion="Farmer" />
        <TeamCard img={team1} name="Glovani Bacardo" passion="Farmer" />
        <TeamCard img={team2} name="Marianne Loreno" passion="Farmer" />
        <TeamCard img={team3} name="Glovani Bacardo" passion="Farmer" />
      </div>
    </div>
  );
};

export default Experts;
