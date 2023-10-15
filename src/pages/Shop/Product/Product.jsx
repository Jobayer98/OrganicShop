import React from "react";
import ProductBanner from "./Banner/ProductBanner";
import ProductInfo from "./ProductInfo";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

const Product = () => {
  return (
    <div>
      <ProductBanner />
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-[#f9f8f8] pt-24 pb-12">
        <ProductInfo />
      </div>
      <RelatedProducts />
    </div>
  );
};

export default Product;
