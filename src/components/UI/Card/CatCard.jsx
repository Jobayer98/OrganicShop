const CatCard = ({ item }) => {
  const { img, name } = item;
  return (
    <div className="place-self-center text-center flex flex-col justify-center items-center">
      <div className="w-16 lg:w-36">
        <img className="w-full" src={img} />
      </div>
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default CatCard;
