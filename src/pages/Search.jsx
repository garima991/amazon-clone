import { useState, useMemo } from "react";
import { data } from "../productData";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import SearchedProduct from "../components/SearchedProduct";

const priceRanges = [
  { label: "Under ₹500", min: 0, max: 500 },
  { label: "₹500 - ₹1000", min: 500, max: 1000 },
  { label: "₹1000 - ₹5000", min: 1000, max: 5000 },
  { label: "Over ₹5000", min: 5000, max: Infinity },
];

const ratingOptions = [
  { label: "4★ & up", value: 4 },
  { label: "3★ & up", value: 3 },
  { label: "2★ & up", value: 2 },
  { label: "1★ & up", value: 1 },
];

const discountOptions = [
  { label: "50% Off or more", value: 50 },
  { label: "25% Off or more", value: 25 },
  { label: "10% Off or more", value: 10 },
];

export default function Search() {
  const dispatch = useDispatch();
  const { searchId } = useParams();
  const [sort, setSort] = useState("relevance");

  // Pagination state
  const PRODUCTS_PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = data.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

  function Pagination() {
    if (totalPages <= 1) return null;
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - page) <= 2) {
        pageNumbers.push(i);
      } else if (
        (i === page - 3 && page - 3 > 1) ||
        (i === page + 3 && page + 3 < totalPages)
      ) {
        pageNumbers.push("...");
      }
    }
    // Remove duplicate ellipsis
    const filtered = pageNumbers.filter((n, i, arr) => n !== "..." || arr[i - 1] !== "...");
    return (
      <div className="flex justify-center mt-8 mb-4">
        <nav className="inline-flex items-center gap-1">
          <button
            className="px-3 py-1 border rounded-l bg-white text-sm font-medium hover:bg-gray-100 disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          {filtered.map((n, i) =>
            n === "..." ? (
              <span key={i} className="px-2 py-1 text-gray-500">...</span>
            ) : (
              <button
                key={n}
                className={`px-3 py-1 border-t border-b border-r bg-white text-sm font-medium hover:bg-yellow-100 ${n === page ? "bg-yellow-400 border-yellow-500" : ""}`}
                onClick={() => setPage(n)}
                disabled={n === page}
              >
                {n}
              </button>
            )
          )}
          <button
            className="px-3 py-1 border rounded-r bg-white text-sm font-medium hover:bg-gray-100 disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </nav>
      </div>
    );
  }

  return (
    <div className="bg-[#eaeded] h-screen py-6 ">
      <div className="max-w-[1400px] mx-auto flex gap-6 px-4">
        
        <aside className="hidden max-h-screen md:block w-72 bg-white rounded-lg p-6 shadow-lg sticky top-6 border-r border-gray-200 overflow-y-scroll mb-5">
        
          {/* Price */}
          <div className="mb-8">
            <h4 className="font-bold mb-3 text-[15px] text-gray-900 tracking-tight">Price</h4>
            <div className="mb-2 text-[15px] font-normal">₹58 – ₹86,100+</div>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="relative w-full h-4 flex items-center">
                <div className="absolute left-0 right-0 h-1 bg-[#e3e6e6] rounded"></div>
                <div className="absolute left-2 right-2 h-1 bg-[#008296] rounded"></div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#008296] rounded-full shadow flex items-center justify-center" style={{zIndex:2}}></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#008296] rounded-full shadow flex items-center justify-center" style={{zIndex:2}}></div>
              </div>
              <button className="ml-2 border border-gray-400 rounded px-3 py-1 text-[15px] font-normal bg-white hover:bg-gray-50" disabled>Go</button>
            </div>
            <div className="flex flex-col gap-1">
              <button className="text-left w-full text-[15px] text-[#0F1111] hover:underline hover:text-[#C7511F] px-1 py-1 rounded">Up to ₹300</button>
              <button className="text-left w-full text-[15px] text-[#0F1111] hover:underline hover:text-[#C7511F] px-1 py-1 rounded">₹300 – ₹450</button>
              <button className="text-left w-full text-[15px] text-[#0F1111] hover:underline hover:text-[#C7511F] px-1 py-1 rounded">₹450 – ₹600</button>
              <button className="text-left w-full text-[15px] text-[#0F1111] hover:underline hover:text-[#C7511F] px-1 py-1 rounded">Over ₹600</button>
            </div>
          </div>
        
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Color</h4>
            <div className="flex flex-col gap-2">
              {["Black", "White", "Blue", "Red", "Green", "Yellow", "Pink", "Grey", "Silver", "Gold"].map((color) => (
                <label key={color} className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                  <span className="text-[15px]">{color}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Material */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Material</h4>
            <div className="flex flex-col gap-2">
              {["Plastic", "Metal", "Wood", "Glass", "Fabric", "Leather"].map((mat) => (
                <label key={mat} className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                  <span className="text-[15px]">{mat}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Features */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Features</h4>
            <div className="flex flex-col gap-2">
              {["Waterproof", "Rechargeable", "Foldable", "Portable", "Eco-Friendly", "Warranty"].map((feat) => (
                <label key={feat} className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                  <span className="text-[15px]">{feat}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Department */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Department</h4>
            <div className="flex flex-col gap-2">
              {["Electronics", "Home & Kitchen", "Fashion", "Toys", "Books", "Sports", "Automotive"].map((dep) => (
                <label key={dep} className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                  <span className="text-[15px]">{dep}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Shipping */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Shipping</h4>
            <div className="flex flex-col gap-2">
              {["Free Shipping", "Express Delivery", "International Shipping"].map((ship) => (
                <label key={ship} className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                  <span className="text-[15px]">{ship}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Ratings */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Ratings</h4>
            <div className="flex flex-col gap-2">
              {[5, 4, 3, 2, 1].map((star) => (
                <label key={star} className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                  <span className="text-[15px]">{'★'.repeat(star)}{'☆'.repeat(5-star)} & Up</span>
                </label>
              ))}
            </div>
          </div>
          {/* Discount */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Discount</h4>
            <div className="flex flex-col gap-2">
              {["10% Off or more", "25% Off or more", "50% Off or more", "70% Off or more"].map((disc) => (
                <label key={disc} className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                  <span className="text-[15px]">{disc}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Size */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Size</h4>
            <div className="flex flex-col gap-2">
              {["Small", "Medium", "Large", "XL", "XXL"].map((size) => (
                <label key={size} className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                  <span className="text-[15px]">{size}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Pattern */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Pattern</h4>
            <div className="flex flex-col gap-2">
              {["Solid", "Striped", "Checked", "Printed", "Embroidered"].map((pat) => (
                <label key={pat} className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                  <span className="text-[15px]">{pat}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Offers */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Offers</h4>
            <div className="flex flex-col gap-2">
              {["No Cost EMI", "Bank Offer", "Exchange Offer", "Combo Offer"].map((offer) => (
                <label key={offer} className="flex items-center gap-2 cursor-pointer select-none">
                  <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                  <span className="text-[15px]">{offer}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Connectivity */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Connectivity</h4>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                <span className="text-[15px]">Wired</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                <span className="text-[15px]">Wireless</span>
              </label>
            </div>
          </div>
          {/* Wireless Technology */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Wireless Technology</h4>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                <span className="text-[15px]">Bluetooth</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                <span className="text-[15px]">Wi-Fi</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                <span className="text-[15px]">NFC</span>
              </label>
            </div>
          </div>
          {/* Item Condition */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Item Condition</h4>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                <span className="text-[15px]">New</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                <span className="text-[15px]">Renewed</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                <span className="text-[15px]">Used</span>
              </label>
            </div>
          </div>
          {/* Availability */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Availability</h4>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                <span className="text-[15px]">Include Out of Stock</span>
              </label>
            </div>
          </div>
          {/* Seller */}
          <div className="mb-8">
            <h4 className="font-bold mb-2 text-[15px] text-gray-900 tracking-tight">Seller</h4>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                <span className="text-[15px]">Amazon</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-yellow-500 h-4 w-4 border-gray-300 rounded" disabled />
                <span className="text-[15px]">Other Sellers</span>
              </label>
            </div>
          </div>
          {/* Promo/Info Box */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded text-center text-[15px] text-[#B12704] font-semibold">
            <div>Why shop with us?</div>
            <ul className="text-xs text-[#111] font-normal mt-2 text-left list-disc list-inside">
              <li>Free shipping on select items</li>
              <li>Easy returns & replacements</li>
              <li>100% secure payments</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <div className="text-lg font-semibold">
              {data.length} results for{" "}
              <span className="text-[#007185]">"{searchId}"</span>
            </div>
            <div>
              <label className="mr-2 font-medium">Sort by:</label>
              <select
                className="border rounded px-2 py-1"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
              </select>
            </div>
          </div>
          {/* Product List */}
          <div className="flex flex-col gap-6">
            {paginatedProducts.map((product, idx) => (
              <>
                <SearchedProduct key={product.product_id} data={product} />
                {idx !== paginatedProducts.length - 1 && (
                  <div className="border-b border-gray-200 my-2"></div>
                )}
              </>
            ))}
          </div>
          {/* Pagination Controls */}
          <Pagination />
        </main>
      </div>
    </div>
  );
}
