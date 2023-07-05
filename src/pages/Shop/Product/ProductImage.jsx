import product from "../../../assets/Home/Product/pdc3.png";

const ProductImage = () => {
  return (
    <div className="relative">
      <p className="bg-[#274c5b] absolute top-0 left-0 text-white text-center rounded-md w-fit px-2 py-1 mt-4 ml-6">
        {"Millets"}
      </p>
      <figure>
        <img className="rounded-2xl h-52 lg:h-96" src={product} alt="product" />
      </figure>
    </div>
  );
};

export default ProductImage;
