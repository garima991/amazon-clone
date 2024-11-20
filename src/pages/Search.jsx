import React from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const resultProducts = [];
  const params = useParams();
  return (
    <div className="text-6xl text-wrap flex flex-wrap">
      This is Search Page : {JSON.stringify(params)} 
    </div>
  );
};


const SearchedProduct = ({ data, cartData, updateCart }) => {
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

export default Search;