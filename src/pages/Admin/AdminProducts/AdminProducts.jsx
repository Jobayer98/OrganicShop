import { useEffect, useState } from "react";
import axios from "../../../utils/axios.js";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/admin/products");
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  if (loading) {
    return <h2 className="text-center text-2xl my-6">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center text-2xl my-6">Something went wrong</h2>;
  }
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
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>{product?.productName}</td>
                  <td>{product?.stock}</td>
                  <td>
                    <Link
                      className="tooltip"
                      data-tip="Update"
                      to={`/admin/product/update/${product._id}`}
                    >
                      <AiOutlineEdit />
                    </Link>
                  </td>
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
