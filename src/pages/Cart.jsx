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
    <div className="min-h-screen bg-[#EAEDED] py-6">
      <div className="max-w-[2000px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Cart Section */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl text-[#0F1111]">Shopping Cart</h1>
                <button
                  onClick={() => dispatch(resetCart())}
                  className="text-[#007185] hover:text-[#C7511F] hover:underline text-sm"
                >
                  Delete all items
                </button>
              </div>

              <div className="h-px w-full bg-gray-200 mb-4" />

              {/* Product List */}
              <div className="space-y-4">
                {cartData.length === 0 ? (
                  <div className="text-center py-8">
                    <h2 className="text-xl text-[#0F1111] mb-2">Your Cart is empty</h2>
                    <Link to="/" className="text-[#007185] hover:text-[#C7511F] hover:underline">
                      Continue shopping
                    </Link>
                  </div>
                ) : (
                  cartData.map((product) => (
                    <div key={product.product_id} className="flex items-start gap-4">
                      <CartProduct data={product} />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-[350px]">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              {/* Free Delivery Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${progress}%` }}
                      className="h-full bg-[#067D62]"
                    />
                  </div>
                  <span className="text-sm text-[#0F1111]">₹{freeDeliveryThreshold}</span>
                </div>
                <div className="text-sm">
                  {subtotal >= freeDeliveryThreshold ? (
                    <span className="text-[#067D62] font-medium">
                      Your order is eligible for FREE Delivery
                    </span>
                  ) : (
                    <span className="text-[#0F1111]">
                      Add ₹{(freeDeliveryThreshold - subtotal).toFixed(2)} more for FREE Delivery
                    </span>
                  )}
                </div>
              </div>

              {/* Subtotal Section */}
              <div className="space-y-2">
                <div className="text-lg text-[#0F1111]">
                  Subtotal ({cartSize} items): <span className="font-bold">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#0F1111]">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>This order contains a gift</span>
                </div>
              </div>

              {/* Proceed to Buy Button */}
              <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] shadow-sm rounded-full py-2 text-sm text-[#0F1111] transition-colors duration-200">
                Proceed to Buy
              </button>

              {/* EMI Section */}
              <div className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => setEmiDetailsOpen(!emiDetailsOpen)}
                  className="w-full px-4 py-3 flex items-center justify-between text-sm text-[#0F1111] hover:bg-gray-50 transition-colors duration-200"
                >
                  EMI Available
                  <img
                    src={DropDownIcon}
                    alt="drop-down-icon"
                    className={`w-4 h-4 transition-transform duration-200 ${emiDetailsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {emiDetailsOpen && (
                  <div className="px-4 py-3 text-sm text-[#0F1111] border-t">
                    Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).{" "}
                    <Link to="#" className="text-[#007185] hover:text-[#C7511F] hover:underline">
                      Learn more
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Suggested Products */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-lg font-medium text-[#0F1111] mb-4">
                Customers who bought items in your cart also bought
              </h2>
              <div className="space-y-4">
                {[...cartData, ...cartData, ...cartData]
                  .slice(0, 4)
                  .map((product, index) => (
                    <SuggestionCard key={index} data={product} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuggestionCard = ({ data }) => {
  const { product_name, img_link, discounted_price } = data;
  return (
    <div className="flex gap-4">
      <img 
        src={img_link} 
        alt={product_name}
        className="w-24 h-24 object-contain" 
      />
      <div className="flex-1 space-y-1">
        <h3 className="text-sm text-[#0F1111] line-clamp-2">{product_name}</h3>
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">{'★'.repeat(4)}</span>
          <span className="text-[#007185] text-xs">764</span>
        </div>
        <div className="text-sm font-medium text-[#B12704]">{discounted_price}</div>
        <button className="text-sm text-[#0F1111] bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] shadow-sm rounded-full px-3 py-1 transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
