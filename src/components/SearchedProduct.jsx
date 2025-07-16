import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const SearchedProduct = ({ data }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = cart.find((item) => item.product_id === data.product_id) || data;

  const about = data.about_product?.split("|")[0] || "";

  return (
    <div
      className="flex flex-col sm:flex-row bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-200 gap-4 border border-gray-200"
      key={data.product_id}
    >
      {/* Image */}
      <div className="flex-shrink-0 flex items-center justify-center w-full sm:w-44">
        <Link to={data.product_link || "#"} target="_blank" rel="noopener noreferrer">
          <img
            src={data.img_link}
            alt={data.product_name}
            className="object-contain h-40 w-40 mx-auto"
          />
        </Link>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 gap-1 min-w-0">
        <Link to={data.product_link || "#"} target="_blank" rel="noopener noreferrer">
          <div className="font-semibold text-base text-[#007185] hover:underline line-clamp-2 mb-1">
            {data.product_name}
          </div>
        </Link>
        <div className="flex items-center gap-2 mb-1">
          <span className="flex items-center text-yellow-500 text-sm">
            {Array(Math.floor(data.rating)).fill().map((_, i) => (
              <span key={i}>★</span>
            ))}
            {Array(5 - Math.floor(data.rating)).fill().map((_, i) => (
              <span key={i} className="text-gray-300">★</span>
            ))}
          </span>
          <span className="text-xs text-gray-600">{data.rating} ({data.rating_count})</span>
        </div>
        <div className="text-xs text-gray-700 mb-2 line-clamp-2">{about}</div>
        {data.discount_percentage && (
          <span className="inline-block bg-[#CC0C39] text-white text-xs font-bold px-2 py-0.5 rounded mb-1 w-fit">
            {data.discount_percentage} off
          </span>
        )}
      </div>

      {/* Price & Cart */}
      <div className="flex flex-col items-end justify-between min-w-[120px]">
        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold text-[#B12704] leading-tight">{data.discounted_price}</span>
          <span className="text-xs text-gray-500 line-through">{data.actual_price}</span>
        </div>
        <button
          className="mt-4 bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] shadow-sm rounded-full px-6 py-2 text-sm text-[#0F1111] font-bold transition-colors duration-200"
          onClick={() => dispatch(addToCart(data))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SearchedProduct;
