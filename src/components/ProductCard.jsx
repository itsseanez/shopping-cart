import Button from "./Button";
import styles from "../styles/ProductCard.module.css";
import { useState } from "react";

export default function ProductCard({
  product,
  onClick,
  text,
  variant,
  quantity,
  qtyIncrement,
  qtyDecrement
}) {
  const [qty, setQty] = useState(quantity ?? 1);

  function increment() {
    const newQty = qty + 1;
    setQty(newQty);
  }

  function decrement() {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
    }
  }

  let newIncrement = qtyIncrement || increment;
  let newDecrement = qtyDecrement || decrement;

  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <div className={styles.quantity}>
        <Button onClick={newDecrement} text="-" variant="secondary" />
        <span>{quantity ?? qty}</span>
        <Button onClick={newIncrement} text="+" variant="secondary" />
      </div>
      <Button
        text={text}
        variant={variant}
        onClick={() => onClick(product, qty)}
      />
    </div>
  );
}
