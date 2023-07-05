const Button = ({ children, className }) => {
  return (
    <button
      className={`px-2 py-1 md:px-4 md:py-3 text-sm md:text-base rounded-md md:rounded-xl flex justify-center items-center md:font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
