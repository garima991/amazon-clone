import { useState, useEffect } from "react";
import { useParams , useNavigate, Link} from "react-router-dom";
import SearchedProduct from "../components/SearchedProduct";
import {data} from "../productData.js";

const Search = () => {
  const { searchId} = useParams(); // Get the search term from the URL parameter
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputValue, setInputValue] = useState(searchId || ""); // Controlled input state
  const navigate = useNavigate();

  useEffect(() => {
    // Filter products based on the search term
    if (searchId) {
      const filtered = data.filter((product) =>
        product.product_name.toLowerCase().includes(searchId.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(data); // Show all products if no search term
    }
  }, [searchId]);

  return (
    <div className="search-page p-4">
      <h2 className="search-results-title text-xl font-semibold text-gray-800 mb-4">
        Search Results for:{" "}
        <span className="text-yellow-500">{searchId || "All Products"}</span>
      </h2>

      {/* Display Filtered Products */}
      <div className="search-results grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={product.product_id} className="search-result-item">
            <div className="block">
              <SearchedProduct data = {product} />
            </div>
          </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
