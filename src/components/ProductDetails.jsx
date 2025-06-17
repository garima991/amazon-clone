import {data} from "../productData.js";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const dispatch = useDispatch();

  //  multiple image variations for demonstration
  const productImages = [
    product?.img_link,
    product?.img_link?.replace('.jpg', '_2.jpg'),
    product?.img_link?.replace('.jpg', '_3.jpg'),
    product?.img_link?.replace('.jpg', '_4.jpg'),
  ].filter(Boolean); // Remove undefined images

  useEffect(() => {
    // Find the product based on the productId from the URL params
    const foundProduct = data.find(
      (item) => item.product_id === productId
    );
    if (foundProduct){
      setProduct(foundProduct);
    } else {
      setError("Product not found.");
    }
  }, [productId]);

  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    product && (
      <div className="bg-[#EAEDED] min-h-screen py-6">
        <div className="max-w-[2000px] mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Product Images */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="flex items-center justify-center p-4 bg-white rounded-lg border group relative">
                  <img
                    src={productImages[selectedImage] || product.img_link}
                    alt={product.product_name}
                    className="max-h-[500px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-opacity duration-300 rounded-lg"></div>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-4 gap-2">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`p-2 border rounded-lg transition-all duration-200 ${
                        selectedImage === index 
                          ? 'border-[#007185] ring-2 ring-[#007185] ring-opacity-50' 
                          : 'border-gray-200 hover:border-[#007185] hover:shadow-md'
                      }`}
                    >
                      <div className="relative group">
                        <img
                          src={img}
                          alt={`Product view ${index + 1}`}
                          className="w-full h-24 object-contain transition-transform duration-200 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = product.img_link;
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-opacity duration-200 rounded"></div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Image Navigation */}
                <div className="flex justify-between items-center text-sm text-[#007185]">
                  <button 
                    onClick={() => setSelectedImage(prev => (prev > 0 ? prev - 1 : productImages.length - 1))}
                    className="hover:text-[#C7511F] hover:underline transition-colors duration-200 flex items-center gap-1"
                  >
                    <span className="text-lg">←</span> Previous
                  </button>
                  <span className="text-[#565959]">{selectedImage + 1} of {productImages.length}</span>
                  <button 
                    onClick={() => setSelectedImage(prev => (prev < productImages.length - 1 ? prev + 1 : 0))}
                    className="hover:text-[#C7511F] hover:underline transition-colors duration-200 flex items-center gap-1"
                  >
                    Next <span className="text-lg">→</span>
                  </button>
                </div>
              </div>

              {/* Right Column - Product Info */}
              <div className="space-y-6">
                {/* Title and Rating */}
                <div>
                  <h1 className="text-2xl text-[#0F1111] mb-2">{product.product_name}</h1>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <span className="text-yellow-500 text-xl">
                        {'★'.repeat(Math.floor(product.rating))}
                      </span>
                      <span className="text-gray-400 text-xl">
                        {'★'.repeat(5 - Math.floor(product.rating))}
                      </span>
                    </div>
                    <a href="#reviews" className="text-[#007185] hover:text-[#C7511F] hover:underline text-sm">
                      {product.rating_count} ratings
                    </a>
                  </div>
                </div>

                {/* Price Section */}
                <div className="border-t border-b border-gray-200 py-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl text-[#0F1111]">{product.discounted_price}</span>
                    <span className="text-sm text-[#565959] line-through">{product.actual_price}</span>
                    {product.discount_percentage && (
                      <span className="text-sm text-[#B12704]">{product.discount_percentage} off</span>
                    )}
                  </div>

                  {/* Delivery Info */}
                  <div className="mt-4 space-y-2">
                    <div className="text-sm">
                      <span className="text-[#0F1111]">Get it by </span>
                      <span className="font-bold">{product.delivery_date || 'Tomorrow'}</span>
                    </div>
                    {product.free_delivery && (
                      <div className="text-sm text-[#565959]">
                        FREE Delivery by Amazon
                      </div>
                    )}
                    <div className="text-sm text-[#565959]">
                      Or fastest delivery <span className="font-bold">Today</span>
                    </div>
                    <div className="text-sm text-[#565959]">
                      Order within <span className="text-[#B12704]">10 hrs 56 mins</span>
                    </div>
                  </div>
                </div>

                {/* About */}
                <div className="space-y-2">
                  <h2 className="text-lg font-medium text-[#0F1111]">About this item</h2>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[#0F1111]">
                    {product.about_product.split("|").map((about, index) => (
                      <li key={index}>{about.trim()}</li>
                    ))}
                  </ul>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <h2 className="text-lg font-medium text-[#0F1111]">Category</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.category.split("|").map((category, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-[#0F1111]">
                        {category.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] shadow-sm rounded-full py-2 text-sm text-[#0F1111] transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="w-full bg-[#FFA41C] hover:bg-[#FA8900] border border-[#DD8C00] shadow-sm rounded-full py-2 text-sm text-[#0F1111] transition-colors duration-200"
                  >
                    Buy Now
                  </button>
                </div>

                {/* Additional Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-[#0F1111]">
                    <p className="mb-2">Ships from and sold by Amazon.com</p>
                    <p className="mb-2">Return Policy: Eligible for Return, Refund or Replacement within 30 days of receipt</p>
                    <p>Gift-wrap available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div id="reviews" className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-medium text-[#0F1111] mb-4">Customer Reviews</h2>
              <div className="space-y-6">
                {product.review_title.split(',').map((title, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-[#0F1111]">{title}</h3>
                    <p className="mt-2 text-sm text-[#0F1111]">{product.review_content.split(',')[index]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
