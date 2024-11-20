import {data} from "../productData.js";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Find the product based on the productId from the URL params
    const foundProduct = data.find(
      (item) => item.product_id === productId
    );
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError("Product not found.");
    }
  }, [productId]);

  if (error) return <div>{error}</div>;

  return (
    product && (
        <div className="product-detail p-4">
        {/* Product Name */}
        <div className="flex flex-row gap-4 mt-4">
          {/* Product Image */}
          <div class="h-[50%] aspect-h-1 p-8">
          <img
            src={product.img_link}
            alt={product.product_name}
            className="object-contain w-full h-full"
          />
          </div>
          

        
          <div className="flex-1">
            {/* {product name } */}
          <h2 className="self-auto text-2xl font-semibold">{product.product_name}</h2>
            {/* Pricing Section */}
            <p className="text-xl text-gray-700">{product.discounted_price}</p>
            <p className="line-through text-gray-500">{product.actual_price}</p>
            <p className="text-green-600">Discount: {product.discount_percentage}</p>

            {/* Rating Section */}
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">
                {Array.from({ length: Math.floor(product.rating) }).map(
                  (_, index) => (
                    <span key={index} className="text-xl">★</span>
                  )
                )}
                {Array.from({ length: 5 - Math.floor(product.rating) }).map(
                  (_, index) => (
                    <span key={index} className="text-xl text-gray-400">★</span>
                  )
                )}
              </span>
              <span className="ml-2 text-gray-500">
                ({product.rating} / 5) - {product.rating_count} Reviews
              </span>
            </div>

            {/* About Product Section */}
            <p className="text-gray-600 mt-2">{product.about_product.split("|").map((about, index) => (
                  <span key={index}>{about.trim()} </span>
                ))}</p>

            {/* Category with Line Breaks */}
            <div className="mt-4">
              <p className="font-semibold">Category:</p>
              <p>
                {product.category.split("|").map((category, index) => (
                  <span key={index}>{category.trim()} &nbsp;</span>
                ))}
              </p>
            </div>

            {/* Product Link */}
            <a
              href={product.product_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-4 inline-block"
            >
              View on Amazon
            </a>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Customer Reviews</h3>
          {product.review_title.split(',').map((title, index) => (
            <div key={index} className="mt-2">
              <h4 className="font-semibold">{title}</h4>
              <p className="text-gray-600">{product.review_content.split(',')[index]}</p>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default ProductDetails;
