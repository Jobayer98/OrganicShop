import Card from "../../../components/UI/Card/Card";
import img from "../../../assets/Home/Product/pdc2.png";

const ProductOffer = () => {
  const array = [1, 2, 3];
  return (
    <div className="h-[680px] bg-[#274C5B] flex flex-col justify-center gap-8 px-32 py-4">
      <div>
        <p className="font-[Yellowtail] text-[#68A47F] text-2xl">Offer</p>
        <h3 className="text-white text-4xl font-bold my-3">
          We Offer Organic For You
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-12 justify-center items-center">
        {array.map((item) => (
          <Card
            className="bg-white w-72"
            key={item}
            img={img}
            item={{
              name: "White Nuts",
              price: "15",
              category: "Millets",
              rating: 4.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductOffer;
