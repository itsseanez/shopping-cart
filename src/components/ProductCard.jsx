import Button from "./Button";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product, onClick, text, variant }) {
  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <Button text={text} variant={variant} onClick={() => onClick(product)} />
    </div>
  );
}
