import { useContext, useState } from "react";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";
import DropDownIcon from "../assets/chevron-down-dark.svg";
// import { changeCartSelection } from "../global/reusableFunction";
import { useDispatch, useSelector } from "react-redux";
import { changeCartSelection, resetCart } from "../features/cartSlice";

const Cart = () => {
  // const {
  //   cart: cartData,
  //   size: cartSize,
  //   updateCart,
  //   subtotal,
  // } = useContext(CartContext);

  const {
    cart: cartData,
    size: cartSize,
    cartSubtotal: subtotal,
  } = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();

  const [emiDetailsOpen, setEmiDetailsOpen] = useState(false);

  const freeDeliveryThreshold = 499;
  const progress = Math.min((subtotal / freeDeliveryThreshold) * 100, 100);


  return (
    <div className="cart flex items-start gap-6 overflow-auto min-w-screen max-w-[100dvw] bg-[#e9eded]">
      <div className="cart m-auto flex items-start p-3 gap-6 overflow-auto">
        <div className="min-w-[642px] max-w-[1180px] products-list w-fit flex flex-col justify-center gap-3 p-4 bg-white">
          {/* Header */}
          <div className="flex flex-row gap-1 justify-between items-start">
            <h2 className="text-[28px]">Shopping Cart</h2>
            <button
              onClick={() => dispatch(resetCart())}
              style={{ padding: "4px", border: "2px solid red" , borderRadius: "8px", }}
            >
              Empty Cart
            </button>
          </div>

          <div className="h-px w-full border" />

          {/* Product List */}
          <div className="flex flex-col">
            {cartData.map((product) => (
              <div key={product.product_id} className="flex items-center gap-2">
                <CartProduct data={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="min-w-[300px] w-[300px] text-[#0F1111] flex flex-col gap-6">
          <div className="w-full p-5 pb-6 bg-white rounded flex flex-col gap-5">
            {/* Free Delivery Section */}
            <div className="is-free-delivery flex flex-col gap-1">
              <div className="w-full flex items-center gap-1">
                <div className="h-4 text-sm w-full rounded-md border border-[#067D62] bg-white overflow-hidden">
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-4 bg-[#067D62]"
                  />
                </div>
              </div>
              <span>₹{freeDeliveryThreshold}</span>
              <div className="text-xs flex justify-start items-start gap-2">
                <input
                  type="checkbox"
                  className="bg-[#067D62] rounded-full my-2"
                />
                <span className="w-full flex-1 flex flex-wrap ">
                  {subtotal >= freeDeliveryThreshold ? (
                    <strong className="text-[#067D62]">
                      Your order is eligible for FREE Delivery.
                    </strong>
                  ) : (
                    <div className="text-xs">
                      ₹{(freeDeliveryThreshold - subtotal).toFixed(2)} more for
                      FREE Delivery.
                    </div>
                  )}
                  Choose
                  <Link to="#" className="text-[#007185]">
                    FREE Deliver
                  </Link>{" "}
                  option at checkout.
                </span>
              </div>
            </div>

            {/* Subtotal Section */}
            <div className="text-lg cart-total flex flex-wrap">
              <span className="w-full flex flex-wrap">
                Subtotal ({cartSize} items):{" "}
                <strong>₹{subtotal.toFixed(2)}</strong>
              </span>
              <div className="flex items-center gap-1 text-sm">
                <input type="checkbox" className="w-4 h-4" />
                This order contains a gift
              </div>
            </div>

            {/* Proceed to Buy Button */}
            <button className="rounded-full text-sm py-1 pb-1.5 px-1.5 bg-[#ffd814]">
              Proceed to Buy
            </button>

            {/* EMI Available */}
            <div className="text-sm border rounded flex flex-col gap-5">
              <div
                className="py-3 px-[18px] flex items-center justify-between cursor-pointer outline-none active:outline-[#017185] hover:outline-[#017185]"
                onClick={() => {
                  setEmiDetailsOpen(!emiDetailsOpen);
                }}
              >
                EMI Available
                <img
                  src={DropDownIcon} // Ensure you have the DropDownIcon imported correctly
                  alt="drop-down-icon"
                  className={`w-4 h-4 ${emiDetailsOpen && "rotate-180"}`}
                />
              </div>
              {emiDetailsOpen && (
                <div className="pb-3 px-[18px]">
                  Your order qualifies for EMI with valid credit cards (not
                  available on purchase of Gold, Jewelry, Gift cards and Amazon
                  pay balance top up).{" "}
                  <Link to="#" className="text-[#007185]">
                    Learn more
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/*  suggested products */}

          <div className="min-w-[300px] w-[300px] p-5 pb-6 bg-white rounded flex flex-col gap-5">
            <span className="text-[18px] font-bold">
              Customers who bought items in your cart also bought
            </span>
            {[...cartData, ...cartData, ...cartData]
              .slice(0, 8)
              .map((product) => (
                <SuggestionCard data={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;

const SuggestionCard = ({ data }) => {
  const { product_name, img_link, discounted_price } = data;
  return (
    <div className="suggestion-card h-min flex gap-3">
      <img src={img_link} className="max-w-[100px] h-full max-h-full" />
      <div className="text-[#007185] text-sm details flex flex-col items-start gap-1">
        <span className="max-h-[40px] text-wrap truncate text-ellipsis">
          {product_name}
        </span>
        <span>⭐⭐⭐⭐⭐ 764</span>
        <span className="text-[#B12704]">{discounted_price}</span>
        <button className="w-fit text-[#0F1111] rounded-full text-sm py-0.5 pb-1 px-3.5 bg-[#ffd814]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
