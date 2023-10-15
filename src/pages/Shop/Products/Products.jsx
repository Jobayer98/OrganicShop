import React, { useContext } from "react";
import Card from "../../../components/UI/Card/Card";

import img from "../../../assets/Home/Product/pdc3.png";
import useFetch from "../../../hooks/useFetch";
import { ProductContext } from "../../../context/ProductContext";
import { useParams } from "react-router-dom";

const Products = () => {
  const { name } = useParams();
  useFetch(`/products?category=${name}`);
  const { products, loading, error } = useContext(ProductContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error.status === 404) {
    return (
      <h1 className="text-black text-xl text-center mt-16">
        {error.response.data.msg}
      </h1>
    );
  }

  return (
    <div className="mb-8 px-4 lg:px-8">
      {products.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, i) => (
            <Card key={product._id} img={img} item={product} />
          ))}
        </div>
      ) : (
        <h1 className="text-black text-xl text-center mt-32 ">
          No Products Found
        </h1>
      )}
    </div>
  );
};

export default Products;
