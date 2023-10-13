import { Link } from "react-router-dom";

const CatCard = ({ item }) => {
  const { img, name } = item;
  return (
    <div className="place-self-center text-center flex flex-col justify-center items-center cursor-pointer">
      <Link to={`/category/${name.toLowerCase()}`} className="w-16 lg:w-36">
        <img className="w-full" src={img} />
      </Link>
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default CatCard;
