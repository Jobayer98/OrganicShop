const Button = ({ children, className }) => {
  return (
    <button
      className={`px-4 py-3 text-base rounded-xl flex justify-center items-center font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
