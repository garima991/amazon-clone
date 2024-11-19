import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import Cart from "./pages/Cart.jsx";
import Layout from "./layout.jsx";

const approutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

const layout = (element) => <Layout>{element}</Layout>

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={layout(<Home />)} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/cart" element={layout(<Cart />)} />
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);