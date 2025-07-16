import React, { useState, useEffect, useRef } from "react";
import AmazonLogo from "../assets/amazonLogo.svg";
import locationPin from "../assets/location-pin.svg";
import CartIcon from "../assets/cart.svg";
import searchIcon from "../assets/search.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../firebase/auth";
import hamburgerIcon from "../assets/hamburger-icon.svg";


export default function Header() {
  console.log("Header");
  const cartSize = useSelector((state) => state.cart.cartSize);
  const { isLoggedIn, name } = useAuth();
  const navigate = useNavigate();

  // State to hold the location data
  const [location, setLocation] = useState("Fetching location...");

  // Fetching the user's location on component mount
  useEffect(() => {
    // Use the Geolocation API to get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Call a geolocation API to convert latitude and longitude into a readable location name
          (latitude, longitude);
        },
        (error) => {
          setLocation("Unable to retrieve your location.");
        }
      );
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  }, []);

  // Handling search input
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery.trim()}`);
      setSearchQuery("");
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  
  // Handle click outside search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-2 items-center px-1 py-4 bg-[#131921] w-full">
      {/* Hamburger for mobile */}
      <button className="md:hidden p-2 mr-2" aria-label="Open menu">
        <img src={hamburgerIcon} alt="Menu" className="w-7 h-7" />
      </button>
      <Link to={"/"}>
        <HeaderContainer>
          <img
            className="w-24 sm:w-32 max-h-[50px] p-1"
            src={AmazonLogo}
            alt="Amazon Logo"
          />
        </HeaderContainer>
      </Link>

      {/* Location Box */}
      <HeaderContainer>
        <div className="h-full gap-1 items-center p-0.5 hidden lg:flex">
          <img
            className="pb-2 h-7 self-end"
            src={locationPin}
            alt="Location Icon"
          />
          <div className="flex flex-col gap-0.5 text-white">
            <span className="current-location text-xs font-normal">
              Delivering to {name}
            </span>
            <span className="text-sm font-bold">{location}</span>
          </div>
        </div>
      </HeaderContainer>

      {/* Search Box */}
      <form
        ref={searchRef}
        className={`min-w-[120px] min-h-10 flex-1 flex rounded bg-white overflow-hidden justify-between transition-all duration-200 ${
          isSearchFocused ? 'ring-2 ring-[#FEBD69]' : ''
        } mx-2`}
        onSubmit={handleSearch}
      >
        <div className="flex-1 flex">
          <select 
            className="w-fit max-w-[46px] min-h-full border-transparent border-solid border-r-[#cdcdcd] bg-[#e6e6e6] text-xs sm:text-sm cursor-pointer hover:bg-[#d4d4d4] transition-colors duration-200"
          >
            {options.map((data, index) => (
              <option value={data.charAt(0).toLowerCase() + data.slice(1)} key={index}>
                {data}
              </option>
            ))}
          </select>
          <div className="flex-1 flex items-center relative">
            <input
              className="search-input w-full px-2 py-2 outline-none text-black text-xs sm:text-sm"
              type="search"
              placeholder="Search Amazon.in"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
        <button 
          type="submit"
          className="min-h-full py-2 px-3 sm:px-4 border-none bg-[#febd68] text-black text-xs sm:text-sm cursor-pointer hover:bg-[#f3a847] transition-colors duration-200"
        >
          <img src={searchIcon} alt="Search" className="w-5 h-5" />
        </button>
      </form>

      {/* Language Select */}
      <HeaderContainer>
        <select className="h-fit flex p-2 text-xs sm:text-sm font-bold items-end text-white bg-transparent cursor-pointer hover:bg-[#232f3e] transition-colors duration-200 hidden md:block">
          <option value={"en"} className="text-black">
            🇺🇸 EN
          </option>
          <option value={"hi"} className="text-black">
            🇮🇳 HI
          </option>
        </select>
      </HeaderContainer>

      {/* Account Menu */}
      <HeaderContainer>
        <div className="h-full justify-center items-start flex-col gap-0.5 text-white hidden md:flex">
          <span className="text-xs font-normal px-1">
            Hello, {isLoggedIn ? name : "Sign In"}
          </span>
          <select className="text-xs sm:text-sm font-bold bg-transparent p-0 m-0 text-white cursor-pointer hover:bg-[#232f3e] transition-colors duration-200">
            <option value={"account"} className="text-black">
              Account & Lists
            </option>
            <option value={"orders"} className="text-black">
              Orders
            </option>
            <option value={"prime"} className="text-black">
              Try Prime
            </option>
          </select>
        </div>
      </HeaderContainer>

      {/* Cart */}
      <Link to={"/cart"}>
        <HeaderContainer>
          <div className="h-full flex items-end p-1 text-white relative">
            <div className="flex gap-1 items-center">
              <img className="w-8 sm:w-10" src={CartIcon} alt="Cart Icon" />
              <span className="absolute top-[-4px] left-[18px] sm:left-[22px] text-xs sm:text-base font-bold text-[#f08806]">
                {cartSize}
              </span>
            </div>
            <span className="text-xs sm:text-sm font-bold py-0.5 translate-y-2">Cart</span>
          </div>
        </HeaderContainer>
      </Link>
    </div>
  );
}

const options = [
  "All categories",
  "Alexa Skills",
  "Amazon Devices",
  "Amazon Fashion",
  "Amazon Fresh",
  "Amazon Pharmacy",
  "Appliances",
  "Apps & Games",
  "Audible Audiobooks",
  "Baby",
  "Beauty",
  "Books",
  "Car & Motorbike",
  "Clothing & Accessories",
  "Collectibles",
  "Computer & Accessories",
  "Electronics",
  "Furniture",
  "Garden & Outdoors",
  "Gift Cards",
  "Grocery & Gourmet Foods",
  "Health & Kitchen",
  "Industrial & Scientific",
  "Jewellery",
  "Kindle Store",
  "Luggage & Bags",
  "Luxury & Bugs",
  "Movies & TV Shows",
  "Musical Instruments",
  "Office Products",
  "Pet Supplies",
  "Prime Videos",
  "Video Games",
  "Watches",
];
const HeaderContainer = ({ children }) => {
  return (
    <div className="min-h-full flex items-end self-stretch rounded-sm outline-none hover:outline-[1.4px] hover:outline-white active:outline-[1.4px] active:outline-white">
      {children}
    </div>
  );
};