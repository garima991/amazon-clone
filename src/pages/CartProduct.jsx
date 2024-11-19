import "./Cart.css";

const CartProduct = ({ data }) => {
    const { title, img, price, quantity } = data;
    return (
      <div className="cart-product">
        <img src={img} />
        <div className="details">
          <div className="info">
            <strong>{title}</strong>
            <strong>{price}</strong>
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
  export default CartProduct;
  