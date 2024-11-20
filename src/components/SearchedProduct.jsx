import { addToCart, removeFromCart } from "../global/reusableFunction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate , Link} from "react-router-dom";

const SearchedProduct = ({ data, cartData, updateCart }) => {
  const {
    product_name,
    product_id,
    img_link,
    discounted_price,
    quantity,
    actual_price,
    selected = false,
  } = data;
  console.log(data, selected);

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = cart.find((item) => item.product_id === data.product_id);
  const countInCart = product ? product.quantity : 0;

  const buttonStyleClass =
    "bg-[#f0c14b] border border-[#a88734] border-t-[#9c7e31] border-b-[#846a29] text-[#111] p-1.5 rounded-lg cursor-pointer flex-1";

  return (
    <div className="cart-product flex gap-3 p-4 max-w-full border-b border-slate-300">
      <div class="h-[50%] aspect-h-1 p-8">
      <img src={img_link} className="max-w-[180px]" />
      </div>
      <div className="details flex-1 ">
        <div className="info flex flex-col gap-2">
          <Link to={`/product/${product_id}`} className="text-base font-semibold">
            <div>{product_name}</div>
          </Link>
          <strong className="text-xl text-green-600">{discounted_price}</strong>
          <span className="line-through text-gray-500">{actual_price}</span>
        </div>
        <div className="controls mt-3">
          <div className="flex gap-2">
            {countInCart ? (
              <>
                <button
                  className={buttonStyleClass}
                  onClick={() => dispatch(addToCart(data))}
                >
                  +
                </button>
                <button
                  className={buttonStyleClass}
                  onClick={() =>
                    dispatch(removeFromCart({ product: data, quantity: 1 }))
                  }
                >
                  -
                </button>
                <button
                  className={buttonStyleClass}
                  onClick={() => dispatch(removeFromCart({ product: data }))}
                >
                  delete
                </button>
              </>
            ) : (
              <button
                className={buttonStyleClass}
                onClick={() => dispatch(addToCart(data))}
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedProduct;
