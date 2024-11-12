import React from "react";
import "./CategoryFilters.css";
import hamBurgerIcon from "../../assets/hamburger-icon.svg";

export default function CategoryFilters({openSidebar}) {
  return (
    <ul className="category-list">
      <li className="category-item" onClick = {openSidebar}>
        <img src= {hamBurgerIcon} alt="menu-icon" />
        All
      </li>
      {item.map((item, index) => (
        <li key = {index} className="category-item">{item}</li>
      ))}
    </ul>
  );
}

const item = [
  "Fresh",
  "MX Player",
  "Sell",
  "Gift Cards",
  "Amazon Pay",
  "Buy Again",
  "AmazonBasics",
  "Gift Ideas",
  "Today's Deals",
  "Browsing History",
  "Customer Service",
  "Home Improvement",
  "Garima's Amazon.in",
  "Health, Household & Personal Care",
  "Kindle eBooks",
  "Mobiles",
  "Books",
  "New Releases",
  "Best Sellers",
  "Beauty & Personal Care",
  "Electronics",
  "Subscribe & Save",
  "Sports, Fitness & Outdoors",
  "Prime",
  "Home & Kitchen",
  "Fashion",
  "Computers",
  "Toys & Games",
  "Car & Motorbike",
  "Baby",
  "Pet Supplies",
  "Video Games",
  "Previous slide",
];