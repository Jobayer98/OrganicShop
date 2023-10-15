import React from "react";

const AdminProducts = () => {
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>Cy Ganderton</td>
                  <td>Available</td>
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
