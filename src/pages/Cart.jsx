import "./Cart.css";
import CartProduct from "./CartProduct";

const Cart = () => {
  return (
    <div className="cart flex justify-center">
      <div className="products-list ">
        <h2>Shopping Cart</h2>
        <hr />
        <CartProduct data={sampleProductData[0]} />
        <CartProduct data={sampleProductData[0]} />
        <CartProduct data={sampleProductData[0]} />
        <CartProduct data={sampleProductData[0]} />
      </div>
    </div>
  );
};
export default Cart;

const sampleProductData = [
  {
    title:
      "Logitech Combo Touch iPad Pro 13-inch (M4)(2024) Keyboard Case - Detachable Backlit Keyboard with Kickstand, Comfortable Typing, Multi-use Mode - Graphite",
    img: "https://via.placeholder.com/400x400",
    price: 22995,
    mrp_price: 26995,
    rating: 4,
    offer: "15% off",
    inStock: true,
    fastDelivery: true,
    freeShipping: true,
    gift: false,
    quantity: 1,
  },
];