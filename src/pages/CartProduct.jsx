import "./Cart.css";

const CartProduct = ({ data }) => {
  const { product_id, product_name, img_link, actual_price, discounted_price, quantity } = data;
  return (
    <div
      key={product_id}
      className="cart-item flex justify-between items-center py-4 px-6 bg-gray-50 border-b border-gray-200 hover:bg-gray-100 rounded-lg mb-4"
    >
      <div className="cart-item-image ">
        <img
          src={img_link}
          alt={product_name}
          className="w-full h-auto object-contain rounded-md"
        />
      </div>
      <div className="cart-item-details w-3/4 pl-6 flex flex-col justify-between">
        <p className="text-xl font-semibold text-gray-800">
          {product_name}
        </p>
        <div className="product-pricing mt-2">
          <p className="text-lg font-semibold text-green-600">
            {discounted_price}
          </p>
          <p className="text-sm text-gray-400 line-through">
            {actual_price}
          </p>
        </div>
        <div className="flex justify-start items-center">
        <div className="controls flex gap-3 border-3 border-solid border-orange-400 px-4 rounded-full w-[110px] justify-center">
          <button className="control ">{quantity === 1 ? "🗑️" : "-"}</button>
          <p>{quantity}</p>
          <button className="control ">+</button>
        </div>
        
        </div>
      </div>
      
    </div>
  );
};
export default CartProduct;
