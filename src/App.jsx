import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import Cart from "./pages/Cart.jsx";
import Layout from "./layout.jsx";
import Search from "./pages/Search.jsx";
import Product from "./pages/Product.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Login from './components/Login';

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { createContext, useState } from "react";
import ProductDetail from "./components/ProductDetails.jsx";
import AuthProvider from "./firebase/auth.jsx";
import Account from "./pages/Account.jsx";


const layout = (element) => <Layout>{element}</Layout>;

const App = () => {
  console.log("App");
 
  
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={layout(<Home />)} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={layout(<Cart />)} />
            <Route path="/account" element={layout(<Account />)} />
            <Route path="/search" element={layout(<Search />)} />
            <Route path="/search/:searchId" element={layout(<Search />)} />
            <Route path="/search/:searchId/:eview/:reviewId" element={layout(<Search />)} />
            <Route path="/product" element={layout(<Product/>)} />
            <Route path="/product/:productId" element={layout(<ProductDetails/>)} />
            
          </Routes>
        </BrowserRouter>
        </AuthProvider>
    //   </CartContext.Provider>
    // </ThemeContext.Provider>
  );
};
export default App;
// export { ThemeContext, CartContext };
