import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "../../../utils/axios";
import { ProductContext } from "../../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const notify = () => toast.success("Product added successfully");
const AddForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const { setProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const productInfo = {
      ...data,
      price: parseFloat(data.price),
    };
    // console.log(productInfo);
    setLoading(true);
    try {
      const response = await axios.post("/add-product", productInfo, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data) {
        notify();
        setProduct(response.data.data);
        navigate("/admin/products");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="border-t-2 border-[#7eb693] shadow-md rounded bg-white max-w-2xl mb-24">
      <h3 className="text-xl text-center my-4 p-3">Product Details</h3>
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
            />
          </div>
        </div>
        <div className="mx-6 pb-6 grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* <div className="col-span-6">
            <label className="block mb-2" htmlFor="quantity">
              Quantity
            </label>
            <input
              {...register("stock", { required: true })}
              className="block outline-none p-2 border rounded bg-slate-50 w-full text-gray-600"
              type="number"
              placeholder="100"
              required
              min={1}
              max={200}
            />
          </div> */}
          <div className="col-span-6">
            <label className="block mb-2" htmlFor="weight">
              Category
            </label>
            <select
              className="outline-none border p-2 rounded bg-slate-50 w-full text-gray-600"
              name="category"
              id="category"
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
        <div className="mx-6 pb-6 text-right">
          <input
            className="bg-[#7eb693] text-white p-1 px-4 rounded cursor-pointer"
            type="submit"
            value={loading ? "Loading..." : "Add"}
          />
        </div>
      </form>
    </div>
  );
};

export default AddForm;
