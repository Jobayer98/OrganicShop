import { useState, useEffect, useContext } from "react";
import axios from "../utils/axios";
import { ProductContext } from "../context/ProductContext";

const useFetch = (urlPath) => {
  const { setProduct, setLoading, setError } = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios.get(urlPath, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProduct(res.data.data);
        setLoading(false);
      } catch (error) {
        setProduct([]);
        setError(error);
        setLoading(false);
      }
    })();
  }, [urlPath]);
};

export default useFetch;
