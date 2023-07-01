import banner2 from "../../../assets/Home/Banner/banner2.png";
import "./Offer.css";
const OfferCard1 = () => {
  return (
    <div
      className="h-64 w-[40%] my-24 offerCard relative"
      style={{ backgroundImage: `url(${banner2})` }}
    >
      <div className="overlay"></div>
      <div className="w-40 text-white absolute offer_text">
        <p className="font-[Yellowtail] text-lg">Natural!</p>
        <h2 className="text-3xl font-bold">Get Garden Fresh Fruits</h2>
      </div>
    </div>
  );
};

export default OfferCard1;
