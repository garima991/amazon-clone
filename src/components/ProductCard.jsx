import { useState , useContext} from "react";
import { addToCart, removeFromCart } from "../global/reusableFunction";
import { CartContext } from "../App";

const ProductCard = ({ data }) => {
  const {cart, updateCart } = useContext(CartContext);
  const product = cart.find((item) => item.product_id === data.product_id);
  const countInCart = product ? product.quantity : 0;
  const buttonStyleClass =
    "bg-[#f0c14b] border border-[#a88734] border-t-[#9c7e31] border-b-[#846a29] text-[#111] p-1.5 rounded-lg cursor-pointer flex-1";

  return (
    <div className="flex flex-col gap-2 p-2 border-2 border-[#f0f2f2] rounded-lg">
      <img
        className="h-[200px] w-fit max-w-[400px] object-cover"
        src={data.img_link}
        alt={data.product_name}
      />

      <div className="flex gap-2">
      {countInCart ? (
          <>
            <button
              className={buttonStyleClass}
              onClick={() => addToCart(data, cart, updateCart)}
            >
              +
            </button>{" "}
            <button
              className={buttonStyleClass}
              onClick={() => removeFromCart(data, cart, updateCart)}
            >
              -
            </button>
          </>
        ) : (
          <button
            className="product-button"
            onClick={() => addToCart(data, cart, updateCart)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

// function addToCart(product_to_add) {
//   let cart = localStorage.getItem("cart")
//     ? JSON.parse(localStorage.getItem("cart"))
//     : [];

//   let product = cart.find(
//     (item) => item.product_id === product_to_add.product_id
//   ) || { ...product_to_add, quantity: 0 };
//   product.quantity += 1;

//   const newCart = [
//     ...cart.filter((item) => item.product_id != product.product_id),
//     product,
//   ];
//   localStorage.setItem("cart", JSON.stringify(newCart));
// }

// function removeFromCart(product_to_remove) {
//   let cart = localStorage.getItem("cart")
//     ? JSON.parse(localStorage.getItem("cart"))
//     : [];

//   let product = cart.find(
//     (item) => item.product_id === product_to_remove.product_id
//   );
//   if (product.quantity > 1) {
//     product.quantity -= 1;
//   } else {
//     cart = cart.filter((item) => item.product_id != product.product_id);
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
// }


