import { createSlice } from "@reduxjs/toolkit";

const localData = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const updateCart = (state) => {
  state.cartSize = state.cart.reduce(
    (acc, curr) => parseInt(curr.quantity) + acc,
    0
  );
  console.log("In Update Cart", state.cart);
  state.cartSubtotal = state.cart.reduce(
    (acc, curr) =>
      (curr.selected
        ? (curr.discounted_price
            ? parseFloat(curr.discounted_price.substring(1).replaceAll(",", ""))
            : curr.actual_price) * curr.quantity
        : 0) + acc,
    0
  );
  console.log(state.cartSubtotal, state.cart);
  state.cartTotal = state.cart.reduce(
    (acc, curr) =>
      (curr.discounted_price
        ? parseFloat(curr.discounted_price.substring(1).replaceAll(",", ""))
        : curr.actual_price) *
        curr.quantity +
      acc,
    0
  );
  localStorage.setItem("cart", JSON.stringify(state.cart));
};

const initialState = {
  cart: [],
  cartSize: 0,
  cartTotal: 0,
  cartSubtotal: 0,
};

initialState.cart = localData;
updateCart(initialState);

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      let product = state.cart.find(
        (item) => item.product_id === payload.product_id
      ) || { ...payload, quantity: 0 };
      product.quantity += 1;
      product.selected = true;
      if (
        state.cart.find((item) => item.product_id === payload.product_id) ===
        undefined
      ) {
        state.cart.push(product);
      } else {
        const newCart = state.cart.map((item) =>
          item.product_id != product.product_id ? item : product
        );
        state.cart = newCart;
      }
      state.cartSize = state.cart.reduce(
        (acc, curr) => parseInt(curr.quantity) + acc,
        0
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
      updateCart(state);
    },

    removeFromCart: (state, { payload: { product, quantity = null } }) => {
      let cartProduct = state.cart.find(
        (item) => item.product_id === product.product_id
      );
      if (cartProduct.quantity <= 1 || quantity === null) {
        state.cart = state.cart.filter(
          (item) => item.product_id != cartProduct.product_id
        );
      } else cartProduct.quantity -= quantity;

      localStorage.setItem("cart", JSON.stringify(state.cart));
      updateCart(state);
    },

    changeCartSelection: (state, { payload: product }) => {
      console.log(product, "Toggle");
      const cartProduct = state.cart.find(
        (item) => item.product_id === product.product_id
      );
      cartProduct.selected = !cartProduct.selected;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      updateCart(state);
    },

    resetCart: (state) => {
      state.cart = [];
      updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart, resetCart, changeCartSelection } =
  cartSlice.actions;
export default cartSlice.reducer;