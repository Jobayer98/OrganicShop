import React from "react";
import ProductBanner from "./Banner/ProductBanner";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const Product = () => {
  return (
    <div>
      <ProductBanner />
      <div className="flex justify-center items-center gap-4 bg-[#f9f8f8] pt-24">
        <ProductImage />
        <ProductInfo />
      </div>
    </div>
  );
};

export default Product;
