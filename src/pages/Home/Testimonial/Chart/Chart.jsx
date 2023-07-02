const Chart = ({ num, label }) => {
  return (
    <div className="h-32 w-32 bg-[#f1f1f1] rounded-full flex flex-col justify-center items-center gap-1 border-4 border-white ring ring-[#68A47F]">
      <h3 className="text-3xl font-bold">{num}</h3>
      <p className="text-xs font-semibold">{label}</p>
    </div>
  );
};

export default Chart;
