import { useState, createContext } from "react";

export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
  loading: false,
  setLoading: () => {},
  error: false,
  setError: () => {},
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <ProductContext.Provider
      value={{ products, loading, error, setProducts, setLoading, setError }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
