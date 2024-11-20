import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import Cart from "./pages/Cart.jsx";
import Layout from "./layout.jsx";
import Search from "./pages/Search.jsx";

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { createContext, useState } from "react";


const layout = (element) => <Layout>{element}</Layout>;

const ThemeContext = createContext();
const CartContext = createContext();

const App = () => {
  console.log("App");
  const [theme, setTheme] = useState("light");
  const [cart, setCart] = useState(() =>
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CartContext.Provider
        value={{
          cart,
          size: cart.reduce((acc, curr) => parseInt(curr.quantity) + acc, 0),
          cartTotal: cart.reduce(
            (acc, curr) =>
              (curr.discounted_price
                ? parseFloat(
                    curr.discounted_price.substring(1).replaceAll(",", "")
                  )
                : curr.actual_price) *
                curr.quantity +
              acc,
            0
          ),
          subtotal: cart.reduce(
            (acc, curr) =>
              (curr.selected
                ? (curr.discounted_price
                    ? parseFloat(
                        curr.discounted_price.substring(1).replaceAll(",", "")
                      )
                    : curr.actual_price) * curr.quantity
                : 0) + acc,
            0
          ),
          updateCart,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={layout(<Home />)} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/cart" element={layout(<Cart />)} />
            <Route path="/search" element={layout(<Search />)} />
            <Route path="/search/abc" element={layout(<Search />)} />
            <Route path="/search/:searchId/:eview/:reviewId" element={layout(<Search />)} />
            <Route path="/product" element={layout(<>Product</>)} />
            <Route path="/product/:productId" element={layout(<>Product Dynamic</>)} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
};
export default App;
export { ThemeContext, CartContext };
