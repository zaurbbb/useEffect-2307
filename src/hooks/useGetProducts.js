import { useEffect, useState } from "react";
import axios from "axios";

export const useGetProducts = (search) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products?title=${search}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    getProducts();
  }, [search]);

  return products;
};
