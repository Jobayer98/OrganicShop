import CatCard from "../../../components/UI/Card/catCard";

const catObj = [
  {
    img: "https://organiconline.com.bd/wp-content/uploads/2021/09/Honeycm.png",
    name: "Honey",
  },
  {
    img: "https://organiconline.com.bd/wp-content/uploads/2021/09/Gheecm.png",
    name: "Ghee",
  },
  {
    img: "https://organiconline.com.bd/wp-content/uploads/2021/09/Oilcm.png",
    name: "Oil",
  },
  {
    img: "https://organiconline.com.bd/wp-content/uploads/2021/10/Gift-Items.png",
    name: "Gitf Items",
  },
  {
    img: "https://organiconline.com.bd/wp-content/uploads/2021/09/Superfoodcm.png",
    name: "Super Foods",
  },
  {
    img: "https://organiconline.com.bd/wp-content/uploads/2021/09/Herbalcm.png",
    name: "Herbal Powders",
  },
  {
    img: "https://organiconline.com.bd/wp-content/uploads/2021/09/Grocerycm.png",
    name: "Grocery Items",
  },
  {
    img: "https://organiconline.com.bd/wp-content/uploads/2021/09/Spicescm.png",
    name: "Spices Powders",
  },
  {
    img: "https://organiconline.com.bd/wp-content/uploads/2021/09/Seedscm.png",
    name: "Seeds",
  },
  {
    img: "https://organiconline.com.bd/wp-content/uploads/2021/09/otherscm.png",
    name: "Tea & Snacks",
  },
  {
    img: "https://organiconline.com.bd/wp-content/uploads/2021/09/Nutscm.png",
    name: "Nuts",
  },
  {
    img: "https://organiconline.com.bd/wp-content/uploads/2021/10/Fish.png",
    name: "Fish & Meat",
  },
];
const Categroy = () => {
  return (
    <div className="mt-12">
      <div className="text-center">
        <p className="text-[#7EB693] font-[Yellowtail] text-3xl ">Categories</p>
        <h3 className="text-[#274C5B] text-4xl font-bold my-3 mb-8">
          Our Products
        </h3>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-6 gap-6 mt-16">
        {catObj.map((item, index) => (
          <CatCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categroy;
