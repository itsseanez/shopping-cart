// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import { Link } from "react-router";

export default function Layout() {
  return (
    <>
      <header>
      <Link to='/'><h1>My E-commerce Store</h1></Link>
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
