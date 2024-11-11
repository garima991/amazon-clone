// import React from 'react';
import AmazonLogo from "../../assets/amazonLogo.svg";
import locationPin from "../../assets/location-pin.svg";
import CartIcon from "../../assets/cart.svg";
import searchIcon from "../../assets/search.svg";
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
    console.log("Header");
    return (
        <div className="flex gap-1 items-center px-1 py-4 bg-[#131921]">
            {/* Amazon Logo */}

            <Link to={"/"}>
                <HeaderContainer>
                    <img
                        className = "w-32 max-h-[50px]"
                        src = {AmazonLogo}
                        alt = "Amazon Logo"
                    />
                </HeaderContainer>
            </Link>

            {/* Location Box */}

            <HeaderContainer>
                <div className="h-full flex gap-0.5 items-center p-0.5" >
                    <img
                        className="pb-2 h-7 self-end"
                        src={locationPin}
                        alt="Location Icon"
                    />
                    <div className="flex flex-col gap-0.5 text-white">
                        <span className="current-location text-xs font-normal">
                            Delivering to Garima
                        </span>
                        <span className="text-sm font-bold">Dehradun 248197</span>
                    </div>
                </div>
            </HeaderContainer>

            {/* Search Box */}

            <div className="min-w-[198px] min-h-10 flex-1 flex rounded bg-white overflow-hidden">
                <select className="w-fit max-w-14 min-h-full border-transparent border-solid border-r-[#cdcdcd] bg-[#e6e6e6] text-sm">
                    <option value={"all"}>All</option>
                    <option value={"electronics"}>Electronics</option>
                    <option value={"fashion"}>Fashion</option>
                    <option value={"home"}>Home</option>
                    <option value={"grocery"}>Grocery</option>
                </select>
                <input
                    className="search-input"
                    type="search"
                    placeholder="Search Amazon.in"
                />
                <button className="min-h-full py-2 px-4 border-none bg-[#febd68] text-black text-sm cursor-pointer"><img src={searchIcon} alt="" /></button>
            </div>

            {/* Language Select */}

            <HeaderContainer>
                <select className="h-fit flex p-2 text-sm font-bold items-end text-white bg-transparent">
                    <option value={"en"}>🇺🇸 EN</option>
                    <option value={"hi"}>🇮🇳 HI</option>
                </select>
            </HeaderContainer>

            {/* Account Menu */}

            <HeaderContainer>
                <div className="h-full flex justify-center items-start flex-col gap-0.5 text-white">
                    <span className="text-xs font-normal px-1">Hello, Sign in</span>
                    <select className="text-sm font-bold bg-transparent p-0 m-0 text-white">
                        <option value={"account"}>Account & Lists</option>
                        <option value={"orders"}>Orders</option>
                        <option value={"prime"}>Try Prime</option>
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
                    <div className = "h-full flex items-end p-1 text-white relative">
                        <div className = "flex gap-1 items-center">
                            <img className = "w-10" src = {CartIcon} alt="Cart Icon" />
                            <span className = "absolute top-[-4px] left-[22px] text-base font-bold text-[#f08806]"></span>
                        </div>
                        <span className = "text-sm font-bold py-0.5 translate-y-2">Cart</span>
                    </div>
                </HeaderContainer>
            </Link>

        </div>
    );
}

const HeaderContainer = ({ children }) => {
    return (
        <div className="min-h-full flex p-1 items-end self-stretch rounded-sm outline-none hover:outline-[1.4px] hover:outline-white active:outline-[1.4px] active:outline-white">
            {children}
        </div>
    );
};
