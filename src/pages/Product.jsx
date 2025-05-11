import React, { useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
import {data} from "../productData";
import Footer from "../components/Footer";


const Product = () => {
    return (
        <div className="product-page">
        <h2 className="text-3xl font-semibold mb-6 text-center mt-3">Shop Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-4">
          {data.map((product) => (
            <Link
              key={product.product_id}
              to={`/product/${product.product_id}`}
              className="border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <img
                src={product.img_link}
                alt={product.product_name}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 truncate">{product.product_name}</h3>
                <div className="flex items-center space-x-1 mt-2">
                  <span className="text-yellow-500">{'★'.repeat(Math.floor(product.rating))}</span>
                  <span className="text-gray-600 text-xs">({product.rating_count} reviews)</span>
                </div>
                <p className="text-xl font-bold text-green-600 mt-2">{product.discounted_price}</p>
                <p className="text-sm text-gray-500 line-through">{product.actual_price}</p>
                <div className="mt-4">
                  <button className="w-full bg-yellow-300 text-black py-2 rounded-lg hover:bg-blue-600">
                    View Product
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Footer/>
      </div>
    );
  };
  
export default Product;

