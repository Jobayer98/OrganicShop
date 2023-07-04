const ChooseCard = ({ img, title, para }) => {
  return (
    <div className="w-[220px] flex flex-col items-center justify-center bg-white gap-1 py-6 rounded-xl">
      <img className="bg-[#F9F8F8] p-3 rounded-xl mb-3" src={img} alt="icon" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="w-4/5 text-center">{para}</p>
    </div>
  );
};

export default ChooseCard;
