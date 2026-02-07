import { Link } from "react-router";

export default function Header() {
  return (
    <header>
      <Link to='/'><h1>My E-commerce Store</h1></Link>
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}