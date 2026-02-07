import {useOutletContext} from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Cart() {
    const [cartItems, setCartItems] = useOutletContext();

    function handleRemoveFromCart(product) {
        setCartItems((items) => items.filter((item) => item.id !== product.id));
    }

    function handleQtyIncrement(product) {
        setCartItems((items) =>
          items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      }
    
      function handleQtyDecrement(product) {
        setCartItems((items) =>
          items.map((item) =>
            item.id === product.id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      }
  return (
    <div className="product-list">
        {cartItems.length === 0 ? ( <p>Your cart is empty.</p> ) : 
      cartItems.map((item) => (
              <ProductCard text="Remove from Cart" variant="secondary" qtyIncrement={() => handleQtyIncrement(item)} qtyDecrement={() => handleQtyDecrement(item)} onClick={() => handleRemoveFromCart(item)} key={item.id} product={item} quantity={item.quantity}  />
                      ))  }
                  </div>
  );
}