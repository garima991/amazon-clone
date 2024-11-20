import React, { useContext } from "react";
import { sampleCardData } from "../sampleData.js";
import { data } from "../productData.js";
import Card from "../components/Card.jsx";
import Carousel from "../components/Carousel.jsx";
import ProductCard from "../components/ProductCard.jsx";
import CategoryFilters from "../components/CategoryFilters.jsx";
import { ThemeContext } from "../App";

export default function Home() {
  // const { theme, setTheme } = useContext(ThemeContext);
  // console.log("Home", "Theme : ", theme);
  return (
    <div className="home-container flex-1 flex flex-col relative">
      <div className=" home gap-4 w-full max-w-screen m-auto flex flex-col relative">
        <div className="w-full flex flex-wrap justify-between gap-4 mx-auto">
          <Carousel />
          <div className="absolute top-96 flex flex-wrap gap-4">
            {sampleCardData.map((card) => (
              <Card data={card} name={1} />
            ))}

            <div className="products w-full flex flex-wrap justify-between gap-4 mx-auto mt-8 py-2 outline-1 outline-slate-200">
              {data.slice(0, 10).map((product) => (
                <ProductCard data={product} />
              ))}
            </div>
            <div className="products w-full flex flex-wrap justify-between gap-4 mx-auto mt-8 py-2">
              {data.slice(11, 21).map((product) => (
                <ProductCard data={product} />
              ))}
            </div>
            <div className="products w-full flex flex-wrap justify-between gap-4 mx-auto mt-8 py-2">
              {data.slice(21, 31).map((product) => (
                <ProductCard data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
