import { useContext, useState } from "react";
import "./Cart.css";
// import CartProduct from "./CartProduct";
import { CartContext } from "../App";
import { Link } from "react-router-dom";
import { changeCartSelection } from "../global/reusableFunction";

const Cart = () => {
  const {
    cart: cartData,
    size: cartSize,
    updateCart,
    subtotal,
  } = useContext(CartContext);
  const [emiDetailsOpen, setEmiDetailsOpen] = useState(false);
  const selectedItems = cartData.filter((item) => item.selected);
  console.log();
  return (
    <div className="cart flex items-start p-3 bg-[#e9eded] h-full gap-6 overflow-auto">
      <div className="min-w-[642px] max-w-[1180px] products-list w-fit flex flex-col justify-center gap-3 p-4 bg-white">
        <div className="flex flex-col gap-1 justify-start items-start">
          <h2 className="text-[28px]">Shopping Cart</h2>
          <span>
            {selectedItems.length === 0 && "No items selected."}
            <button className="text-sm text-[#007185] hover:text-[#C7501F] hover:underline">
              {selectedItems.length === cartData.length ? "Deselect" : "Select"}{" "}
              all items
            </button>
          </span>
          <button onClick={() => updateCart([])} style={{ padding: "4px" }}>
            Empty Cart
          </button>
        </div>

        <div className="h-px w-full border" />

        <div className="flex flex-col ">
          {cartData.map((product) => (
            <CartProduct
              data={product}
              cartData={cartData}
              updateCart={updateCart}
            />
          ))}
        </div>
      </div>


      <div className="min-w-[300px] w-[300px] text-[#0F1111] flex flex-col gap-6">
        <div className="w-full p-5 pb-6 bg-white rounded flex flex-col gap-5">
          <div className="is-free-delivery flex flex-col gap-1 ">
            <div className="w-full flex items-center gap-1">
              <div className="h-4 text-sm w-full rounded-md border border-[#067D62] bg-white overflow-hidden">
                <div
                  className={`h-4 text-sm min-w-0 w-[${(
                    100 %
                    ((subtotal / 499) * 100)
                  ).toFixed(0)}%]  max-w-full bg-[#067D62]`}
                />
              </div>
              ₹499
            </div>
            <div className="text-xs flex justify-start items-start gap-2">
              <input
                type="checkbox"
                className="bg-[#067D62] rounded-full my-2"
                checked
              />
              <span className="w-full flex-1 flex flex-wrap ">
                <strong className="text-[#067D62]">
                  Your order is eligible for FREE Delivery.
                </strong>{" "}
                Choose
                <Link to={"#"} className="text-[007185]">
                  FREE Deliver
                </Link>{" "}
                option at checkout.
              </span>
            </div>
          </div>
          <div className="text-lg cart-total flex flex-wrap">
            <span className="w-full flex flex-wrap">
              Subtotal (8 items): <strong>₹{subtotal}</strong>
            </span>
            <div className="flex items-center gap-1 text-sm">
              <input type="checkbox" className="w-4 h-4" />
              This order contains a gift
            </div>
          </div>
          <button className="rounded-full text-sm py-1 pb-1.5 px-1.5 bg-[#ffd814]">
            Proceed to Buy
          </button>
          <div className="text-sm border rounded flex flex-col gap-5 ">
            <div
              className="py-3 px-[18px] flex items-center justify-between cursor-pointer outline-none active:outline-[#017185] hover:outline-[#017185]"
              onClick={() => {
                setEmiDetailsOpen(!emiDetailsOpen);
              }}
            >
              EMI Available
              <img
                src={DropDownIcon}
                alt="drop-down-icon"
                className={`w-4 h-4 ${emiDetailsOpen && "rotate-180"} `}
              />
            </div>
            {emiDetailsOpen ? (
              <div className="pb-3 px-[18px]">
                Your order qualifies for EMI with valid credit cards (not
                available on purchase of Gold, Jewelry, Gift cards and Amazon
                pay balance top up).{" "}
                <Link to={"#"} className="text-[#007185]">
                  Learn more
                </Link>
              </div>
            ) : null}
          </div>
        </div>

        {/*  */}

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
  );
};
export default Cart;

// Cart Product Component

const CartProduct = ({ data, cartData, updateCart }) => {
  const {
    product_name,
    img_link,
    discounted_price,
    quantity,
    selected = false,
  } = data;
  console.log(data, selected);
  return (
    <div className="cart-product flex gap-3 p-4 max-w-[1140px]">
      <input
        type="checkbox"
        checked={selected}
        onChange={() => changeCartSelection(data, cartData, updateCart)}
      />
      <img src={img_link} className="max-w-[180px]" />
      <div className="details">
        <div className="info">
          <div className="flex flex-col">
            <div>{product_name}</div>
          </div>
          <strong>{discounted_price}</strong>
        </div>
        <div className="controls">
          <select>
            <option>{quantity}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

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
