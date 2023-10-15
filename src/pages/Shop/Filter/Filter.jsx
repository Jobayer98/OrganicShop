import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Filter = () => {
  const { name } = useParams();
  const [sort, setSort] = useState("");
  useFetch(`/products?category=${name}&sort=${sort}`);

  return (
    <div className="flex justify-between items-center flex-wrap my-8">
      <div className="text-sm breadcrumbs mb-1 md:mb-0">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Category</li>
        </ul>
      </div>
      <div className="flex gap-6">
        <div>
          <select
            className="outline-none border-b-2 pb-1"
            name="sort"
            id="sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="latest">Sort by latest</option>
            <option value="asc">Sort by price: low to high</option>
            <option value="desc">Sort by price: high to low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
