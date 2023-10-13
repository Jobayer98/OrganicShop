const Filter = () => {
  return (
    <div className="flex justify-between items-center flex-wrap my-8">
      <div className="text-sm breadcrumbs mb-1 md:mb-0">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Shop</a>
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
