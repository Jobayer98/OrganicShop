import { useParams } from "react-router-dom";
import ShopBanner from "./Banner/ShopBanner";
import CategoryList from "./CategoryList/CategoryList";
import Filter from "./Filter/Filter";
import Products from "./Products/Products";

const ShopPage = () => {
  const { name } = useParams();
  return (
    <div className="sm:px-12">
      <ShopBanner name={name} />
      <div className="grid grid-cols-12 items-start">
        <div className="col-span-3 lg:col-span-2 hidden lg:block">
          <CategoryList />
        </div>
        <div className="col-span-12 lg:col-span-10">
          <Filter />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
