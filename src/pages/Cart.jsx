import {useOutletContext} from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Cart() {
    const [cartItems, setCartItems] = useOutletContext();
  return (
    <div className="product-list">
        {cartItems.length === 0 ? ( <p>Your cart is empty.</p> ) : 
      cartItems.map((item) => (
              <ProductCard key={item.id} product={item} onClick={() => {}}  />
                      ))  }
                  </div>
  );
}