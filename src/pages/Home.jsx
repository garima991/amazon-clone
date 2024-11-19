import React from "react";
import { sampleCardData } from "../sampleData.js";
import { data } from "../productData.js";
import Card from "../components/Card.jsx";
import Carousel from "../components/Carousel.jsx";
import ProductCard from "../components/ProductCard.jsx";
import CategoryFilters from "../components/CategoryFilters.jsx";

export default function Home() {
  return (
    <div className = "home-container flex flex-col items-center w-full">
      <div className = "home w-full max-w-[1500px] flex flex-col">
        <Carousel/>
        <div className = " absolute top-[440px] flex flex-col items-center w-full max-w-[1500px] px-6">
          <div className = "w-full flex flex-wrap justify-between gap-4">
            {sampleCardData.map((card) => (
              <Card data = {card} name = {1} />
            ))}
          </div>
          <div className = "products w-full flex flex-wrap justify-between gap-4 mx-auto mt-8 py-2 outline-1 outline-slate-200">
            {data.slice(0,10).map((product) => (
              <ProductCard data = {product} />
            ))}
          </div>
          <div className = "products w-full flex flex-wrap overflow-auto justify-between gap-4 mx-auto mt-8 py-2">
            {data.slice(11).map((product) => (
              <ProductCard data = {product} />
            ))}
          </div>
        </div>
      </div>
      </div>
  );
}
