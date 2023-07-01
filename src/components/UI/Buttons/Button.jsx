const Button = ({ children, className }) => {
  return (
    <button
      className={`px-4 py-3 text-white text-base rounded-2xl flex justify-center items-center font-semibold mt-8 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
