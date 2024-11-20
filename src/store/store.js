import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice.js";
import themeReducer from "../features/themeSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});

export default store;