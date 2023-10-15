import { useContext, useState } from "react";
import useFetch from "../../../hooks/useFetch.js";
import { ProductContext } from "../../../context/ProductContext.jsx";

const AdminProducts = () => {
  useFetch("/admin/products");
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      <h2 className="text-center text-2xl my-6">AdminProducts</h2>
      <div className="max-w-5xl mx-auto mb-8">
        <div className="overflow-x-auto border">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Total Product</th>
                <th>Name</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>{product?.productName}</td>
                  <td>{product?.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
