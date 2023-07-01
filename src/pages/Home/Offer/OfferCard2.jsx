import banner3 from "../../../assets/Home/Banner/banner3.png";
import "./Offer.css";
const OfferCard1 = () => {
  return (
    <div
      className="h-64 w-[40%] my-24 offerCard relative"
      style={{ backgroundImage: `url(${banner3})` }}
    >
      <div className="w-[195px] text-[#274c5b] absolute offer_text">
        <p className="font-[Yellowtail] text-[#7EB693] text-xl">Offer!!</p>
        <h2 className="text-3xl font-bold">Get 10% off on Vegetables</h2>
      </div>
    </div>
  );
};

export default OfferCard1;
