import React from "react";
import Card from "../../../components/UI/Card/Card";

import img from "../../../assets/Home/Product/pdc3.png";

const Products = () => {
  const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="mb-8 px-4 lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8">
        {ary.map((item) => (
          <Card
            key={item}
            img={img}
            title="White Nuts"
            price="15"
            label="Millets"
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
