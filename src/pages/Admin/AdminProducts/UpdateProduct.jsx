import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import DashboardLayout from "../../../layout/DashboardLayout";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { ProductContext } from "../../../context/ProductContext";
import axios from "../../../utils/axios";

const notify = () => toast.success("Product updated successfully");
const UpdateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  useFetch(`/admin/product/${id}`);
  const { products } = useContext(ProductContext);
  const onSubmit = async (data) => {
    const productInfo = {
      ...data,
      price: parseFloat(data.price),
    };

    setLoading(true);
    try {
      const response = await axios.patch(`/admin/product/${id}`, productInfo, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data) {
        notify();
        navigate("/admin/products");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-12 my-12  flex justify-center items-start gap-6 bg-white border ml-4">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-6 pb-6 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="col-span-6">
                <label className="block mb-2" htmlFor="productName">
                  Product Name
                </label>
                <input
                  {...register("productName", { required: true })}
                  className="block outline-none p-2 border rounded bg-slate-50 w-full text-gray-600"
                  type="text"
                  placeholder="Product Name"
                  defaultValue={products?.productName}
                  required
                />
              </div>
              <div className="col-span-6">
                <label className="block mb-2" htmlFor="description">
                  Description
                </label>
                <input
                  {...register("description")}
                  className="block outline-none p-2 border rounded bg-slate-50 w-full text-gray-600"
                  type="text"
                  placeholder="Description"
                  defaultValue={products?.description}
                />
              </div>
            </div>
            <div className="mx-6 pb-6 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="col-span-6">
                <label className="block mb-2" htmlFor="price">
                  Price
                </label>
                <input
                  {...register("price", { required: true })}
                  className="block outline-none p-2 border rounded bg-slate-50 w-full text-gray-600"
                  type="text"
                  placeholder="100"
                  required
                  defaultValue={products?.price}
                />
              </div>
              <div className="col-span-6">
                <label className="block mb-2" htmlFor="weight">
                  Weight
                </label>
                <input
                  {...register("weight", { required: true })}
                  className="block outline-none p-2 border rounded bg-slate-50 w-full text-gray-600"
                  type="text"
                  placeholder="2 kg"
                  required
                  defaultValue={products?.weight}
                />
              </div>
            </div>
            <div className="mx-6 pb-6 grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="col-span-6">
                <label className="block mb-2" htmlFor="stock">
                  Stock
                </label>
                <select
                  className="outline-none border p-2 rounded bg-slate-50 w-full text-gray-600"
                  name="stock"
                  id="stock"
                  {...register("stock")}
                  defaultValue={products?.stock}
                >
                  <option value="in-stock">In Stock</option>
                  <option value="stock-out">Stock Out</option>
                </select>
              </div>
              <div className="col-span-6">
                <label className="block mb-2" htmlFor="weight">
                  Category
                </label>
                <select
                  className="outline-none border p-2 rounded bg-slate-50 w-full text-gray-600"
                  name="category"
                  id="category"
                  defaultValue={products?.category}
                  {...register("category", { required: true })}
                >
                  <option value="default">Select Category</option>
                  <option value="honey">Honey</option>
                  <option value="ghee">Ghee</option>
                  <option value="oil">Oil</option>
                  <option value="fruits">Fruits</option>
                  <option value="nuts & seeds">Nuts & Seeds</option>
                  <option value="tead & snacks">Tea & Snacks</option>
                  <option value="spices">Spices</option>
                  <option value="rice">Rice</option>
                </select>
              </div>
            </div>
            <div className="mx-6 mt-6 text-right">
              <input
                className="bg-[#7eb693] text-white p-1 px-4 rounded cursor-pointer"
                type="submit"
                value={loading ? "Updating..." : "Update"}
              />
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UpdateProduct;
