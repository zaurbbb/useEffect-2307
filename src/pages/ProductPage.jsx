import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function getSingleProduct() {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products/" + productId
        );
        setProduct(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }

    getSingleProduct();
  }, [productId]);

  if (Object.keys(product).length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {productId}
      <h1>product</h1>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category.name}</p>
    </div>
  );
}

export default ProductPage;
