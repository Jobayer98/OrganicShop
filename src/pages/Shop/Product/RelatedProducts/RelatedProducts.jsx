import React from "react";
import Card from "../../../../components/UI/Card/Card";
import img from "../../../../assets/About/product/vegetable.png";

const RelatedProducts = () => {
  const ary = [1, 2, 3, 4];
  return (
    <div className="my-24 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {ary.map((item) => (
          <Card
            key={item}
            img={img}
            item={{
              name: "Organic Vegetable",
              price: 20,
              category: "Vegetable",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
