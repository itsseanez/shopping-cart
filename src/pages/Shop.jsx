import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useOutletContext();

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

  function handleAddToCart(product, quantity) {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((items) =>
        items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCartItems((items) => [...items, { ...product, quantity: quantity }]);
    }
  }

  return (
    <div className="product-list">
      {products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={handleAddToCart}  />
        ))}
    </div>
  );
}
