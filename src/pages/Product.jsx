import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../productData";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out bg-white p-4">
      <Link to={`/product/${product.product_id}`} className="block">
        <div className="aspect-square flex items-center justify-center mb-4">
          <img
            src={product.img_link}
            alt={product.product_name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm text-[#0F1111] line-clamp-2 min-h-[2.5rem]">{product.product_name}</h3>
          
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">{'★'.repeat(Math.floor(product.rating))}</span>
            <span className="text-[#007185] text-xs hover:text-[#C7511F] hover:underline cursor-pointer">
              {product.rating_count}
            </span>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold text-[#0F1111]">{product.discounted_price}</span>
            <span className="text-sm text-[#565959] line-through">{product.actual_price}</span>
            {product.discount_percentage && (
              <span className="text-sm text-[#B12704]">{product.discount_percentage}% off</span>
            )}
          </div>

          {product.delivery_date && (
            <div className="text-sm text-[#0F1111]">
              Get it by <span className="font-bold">{product.delivery_date}</span>
            </div>
          )}

          {product.free_delivery && (
            <div className="text-sm text-[#565959]">
              FREE Delivery by Amazon
            </div>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addToCart(product));
            }}
            className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] shadow-sm rounded-full py-1 text-sm text-[#0F1111] transition-colors duration-200"
          >
            Add to Cart
          </button>

          <button
            className="w-full bg-[#FFA41C] hover:bg-[#FA8900] border border-[#DD8C00] shadow-sm rounded-full py-1 text-sm text-[#0F1111] transition-colors duration-200"
          >
            Buy Now
          </button>
        </div>
      </Link>
    </div>
  );
};

const Product = () => {
  return (
    <div className="product-page bg-[#EAEDED] min-h-screen">
      <div className="max-w-[2000px] mx-auto px-4 py-6">
        <div className="bg-white p-4 mb-4 rounded-lg shadow-sm">
          <h2 className="text-2xl font-medium text-[#0F1111]">Shop Products</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;

