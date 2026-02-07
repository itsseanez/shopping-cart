import Button from "./Button";
import styles from "../styles/ProductCard.module.css";
import { useState } from "react";

export default function ProductCard({
  product,
  onClick,
  text,
  variant,
  onQuantityChange,
}) {
  const [qty, setQty] = useState(1);

  function increment() {
    setQty((q) => q + 1);
    onQuantityChange(product.id, qty + 1);
  }

  function decrement() {
    if (qty > 1) {
      setQty((q) => q - 1);
      onQuantityChange(product.id, qty - 1);
    }
  }

  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <div className={styles.quantity}>
        <Button onClick={decrement} text="-" variant="secondary"/>
        <span>{qty}</span>
        <Button onClick={increment} text="+" variant="secondary" />
      </div>
      <Button text={text} variant={variant} onClick={() => onClick(product)} />
    </div>
  );
}
