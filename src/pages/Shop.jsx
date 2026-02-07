import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
          <ProductCard key={product.id} product={product} onAction={() => {}} />
        ))}
    </div>
  );
}
