// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import { Link } from "react-router";
import { useState } from "react";

export default function Layout() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <header>
      <Link to='/'><h1>My E-commerce Store</h1></Link>
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart{cartItems.length > 0 && `(${cartItems.length})`}</Link>
      </nav>
    </header>
      <main>
        <Outlet context={[cartItems, setCartItems]}/>
      </main>
    </>
  );
}
