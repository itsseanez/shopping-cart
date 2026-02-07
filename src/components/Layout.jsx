// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />           {/* Appears on every page */}
      <main>
        <Outlet />         {/* Renders the page-specific component */}
      </main>
    </>
  );
}
