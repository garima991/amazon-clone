import React, { useContext } from "react";
import AmazonLogo from "../assets/amazonLogo.svg";
import locationPin from "../assets/location-pin.svg";
import CartIcon from "../assets/cart.svg";
import searchIcon from "../assets/search.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
// import './Header.css';

export default function Header() {
    console.log("Header");
    // const { size: cartSize } = useContext(CartContext);
    return (
        <div className="flex gap-2 items-center px-1 py-4 bg-[#131921]">
            {/* Amazon Logo */}

            <Link to={"/"}>
                <HeaderContainer>
                    <img
                        className="w-32 max-h-[50px] p-1"
                        src={AmazonLogo}
                        alt="Amazon Logo"
                    />
                </HeaderContainer>
            </Link>

            {/* Location Box */}

            <HeaderContainer>
                <div className="h-full flex gap-1 items-center p-0.5" >
                    <img
                        className="pb-2 h-7 self-end"
                        src={locationPin}
                        alt="Location Icon"
                    />
                    <div className="flex flex-col gap-0.5 text-white">
                        <span className="current-location text-xs font-normal">
                            Delivering to Dehradun 248001
                        </span>
                        <span className="text-sm font-bold">Update location</span>
                    </div>
                </div>
            </HeaderContainer>

            {/* Search Box */}

            <div className="min-w-[198px] min-h-10 flex-1 flex rounded bg-white overflow-hidden justify-between">
                <div>
                <select className="w-fit max-w-[46px] min-h-full border-transparent border-solid border-r-[#cdcdcd] bg-[#e6e6e6] text-sm">
                    {options.map((data, index) => (
                        <option value={data.charAt(0).toLowerCase() + data.slice(1)} key={index} >{data}</option>
                    ))}
                </select>
                <input
                    className="search-input"
                    type="search"
                    placeholder="Search Amazon.in"
                />
                </div>
                <button className="min-h-full py-2 px-4 border-none bg-[#febd68] text-black text-sm cursor-pointer"><img src={searchIcon} alt="" /></button>
            </div>

            {/* Language Select */}

            <HeaderContainer>
                <select className="h-fit flex p-2 text-sm font-bold items-end text-white bg-transparent">
                    <option value={"en"} className="text-black">🇺🇸 EN</option>
                    <option value={"hi"} className="text-black">🇮🇳 HI</option>
                </select>
            </HeaderContainer>

            {/* Account Menu */}

            <HeaderContainer>
                <div className="h-full flex justify-center items-start flex-col gap-0.5 text-white">
                    <span className="text-xs font-normal px-1">Hello, Sign in</span>
                    <select className="text-sm font-bold bg-transparent p-0 m-0 text-white">
                        <option value={"account"} className="text-black">Account & Lists</option>
                        <option value={"orders"} className="text-black">Orders</option>
                        <option value={"prime"} className="text-black">Try Prime</option>
                    </select>
                </div>
            </HeaderContainer>

            {/* Return & Order Button */}

            <HeaderContainer>
                <button className="h-full flex justify-center items-start flex-col gap-0.5 p-1 text-white bg-transparent">
                    <span className="text-xs font-normal">Returns</span>
                    <span className="text-sm font-bold">& Orders</span>
                </button>
            </HeaderContainer>

            {/* Cart */}

            <Link to={"/cart"}>
                <HeaderContainer>
                    <div className="h-full flex items-end p-1 text-white relative">
                        <div className="flex gap-1 items-center">
                            <img className="w-10" src={CartIcon} alt="Cart Icon" />
                            <span className="absolute top-[-4px] left-[22px] text-base font-bold text-[#f08806]">{"0"}</span>
                        </div>
                        <span className="text-sm font-bold py-0.5 translate-y-2">Cart</span>
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
]

const HeaderContainer = ({ children }) => {
    return (
        <div className="min-h-full flex items-end self-stretch rounded-sm outline-none hover:outline-[1.4px] hover:outline-white active:outline-[1.4px] active:outline-white">
            {children}
        </div>
    );
};
