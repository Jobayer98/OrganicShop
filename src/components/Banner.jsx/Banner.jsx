import "./Banner.css";
const BannerComponent = ({ img1, img2, title, className }) => {
  return (
    <div
      className={`h-64 flex justify-center items-center ${className}`}
      style={{ backgroundImage: `url(${img1}), url(${img2})` }}
    >
      <h2 className="text-4xl font-bold ">{title}</h2>
    </div>
  );
};

export default BannerComponent;
