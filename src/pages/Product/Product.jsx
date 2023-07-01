import Card from "../../components/UI/Card/Card";
import img from "../../assets/Home/Product/pdc1.png";

const Product = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="grid grid-cols-4 gap-6 mx-24">
      {array.map((item) => (
        <Card
          key={item}
          img={img}
          label={"Vegetable"}
          title={"Calabrese Brocoli"}
          price={"12.00"}
        />
      ))}
    </div>
  );
};

export default Product;
