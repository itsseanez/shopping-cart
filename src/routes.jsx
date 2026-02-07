import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const routes = [
  {
    path: "/",
    element: <Layout />,   // This is the wrapper
    children: [
      { path: "", element: <Home /> },      // renders at "/"
      { path: "shop", element: <Shop /> },  // renders at "/shop"
      { path: "cart", element: <Cart /> },  // renders at "/cart"
    ],
  },
];

export default routes;
