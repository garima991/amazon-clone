import { useState } from "react";
import "../pages/Cart.css";

const ProductCard = ({ data }) => {
  const currentQuantity = 1;
  const [countInCart, setCountInCart] = useState(() => {
    let cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    let product = cart.find((item) => item.product_id === data.product_id);
    return product ? product.quantity : 0;
  });

  return (
    <div className="product-container">
      <img
        className="product-image"
        src={data.img_link}
        alt={data.product_name}
      />

      <div className="product-button-continer">
        {countInCart ? (
          <>
            <button
              className="product-button"
              onClick={() => {
                setCountInCart((p) => p + 1);
                addToCart(data);
              }}
            >
              +
            </button>{" "}
            <button
              className="product-button"
              onClick={() => {
                setCountInCart((p) => p - 1);
                removeFromCart(data);
              }}
            >
              -
            </button>
          </>
        ) : (
          <button
            className="product-button"
            onClick={() => {
              setCountInCart((p) => p + 1);
              addToCart(data);
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

function addToCart(product_to_add) {
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  let product = cart.find(
    (item) => item.product_id === product_to_add.product_id
  ) || { ...product_to_add, quantity: 0 };
  product.quantity += 1;

  const newCart = [
    ...cart.filter((item) => item.product_id != product.product_id),
    product,
  ];
  localStorage.setItem("cart", JSON.stringify(newCart));
}
function removeFromCart(product_to_remove) {
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  let product = cart.find(
    (item) => item.product_id === product_to_remove.product_id
  );
  if (product.quantity > 1) {
    product.quantity -= 1;
  } else {
    cart = cart.filter((item) => item.product_id != product.product_id);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

export default ProductCard;
