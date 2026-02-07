import {useOutletContext} from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Cart() {
    const [cartItems, setCartItems] = useOutletContext();

    function handleRemoveFromCart(product) {
        setCartItems((items) => items.filter((item) => item.id !== product.id));
    }
  return (
    <div className="product-list">
        {cartItems.length === 0 ? ( <p>Your cart is empty.</p> ) : 
      cartItems.map((item) => (
              <ProductCard text="Remove from Cart" variant="secondary" onClick={() => handleRemoveFromCart(item)} key={item.id} product={item} quantity={item.quantity}  />
                      ))  }
                  </div>
  );
}