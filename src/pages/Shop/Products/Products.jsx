import React from "react";
import Card from "../../../components/UI/Card/Card";

import img from "../../../assets/Home/Product/pdc3.png";

const Products = () => {
  const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    xl:grid-cols-4 2xl:grid-cols-5 gap-6 justify-center justify-items-center mx-auto md:mx-20 lg:mx-16 xl:mx-10 2xl:mx-48 mt-20"
    >
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
  );
};

export default Products;
