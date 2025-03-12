import { useState } from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import CustomLoader from "../components/CustomLoader";
import { Link } from "react-router-dom";

function HomePage() {
  const [search, setSearch] = useState("");
  const products = useGetProducts(search);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />
      {products.length === 0 && <CustomLoader />}
      <ul>
        {products.map((product) => (
          <li key={product.title}>
            <Link to={"/products/" + product.id}>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <p>{product.category.name}</p>
              <img
                src={product.images[0]}
                alt={product.title}
                width={80}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
