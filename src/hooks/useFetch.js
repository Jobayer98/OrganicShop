import { useState, useEffect, useContext } from "react";
import axios from "../utils/axios";
import { ProductContext } from "../context/ProductContext";

const useFetch = (urlPath) => {
  const { setProducts, setLoading, setError } = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios.get(urlPath);
        setProducts(res.data.data);
        setLoading(false);
      } catch (error) {
        setProducts([]);
        setError(error);
        setLoading(false);
      }
    })();
  }, [urlPath]);
};

export default useFetch;
