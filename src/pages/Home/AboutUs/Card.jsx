const Card = ({ children, img }) => {
  return (
    <div className="flex gap-8 mt-4">
      <figure>
        <img className="bg-white p-4 rounded-xl" src={img} alt="banner" />
      </figure>
      <div className="w-[70%]">{children}</div>
    </div>
  );
};

export default Card;
