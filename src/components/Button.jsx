import styles from "../styles/Button.module.css";

export default function Button({
  text= "Add to Cart",
  variant = "primary",
  type = "button",
  onClick = () => {}
}) {
  return (
    <button type={type} className={styles[variant]} onClick={onClick}>
      {text}
    </button>
  );
}