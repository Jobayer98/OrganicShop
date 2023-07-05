import React from "react";
import Card from "../../../../components/UI/Card/Card";
import img from "../../../../assets/About/product/vegetable.png";

const RelatedProducts = () => {
  const ary = [1, 2, 3, 4];
  return (
    <div className="mt-20">
      <h3 className="text-4xl font-bold text-center">Related Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center justify-items-center mx-auto md:mx-20 lg:mx-16 xl:mx-10 2xl:mx-96 mt-8">
        {ary.map((item) => (
          <Card
            key={item}
            img={img}
            title="Ginger"
            price="15"
            label="Vegetable"
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
