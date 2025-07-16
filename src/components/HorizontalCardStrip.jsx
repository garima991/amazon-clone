import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../assets/chevron-left.svg";
import arrowRight from "../assets/chevron-right.svg";

export default function HorizontalProductStrip({ title, linkLabel, linkTo, products }) {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#f3f4f6] p-4 rounded-lg my-4 mx-2">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          className="text-[#007185] hover:underline text-sm"
          onClick={() => navigate(linkTo)}
        >
          {linkLabel}
        </button>
      </div>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hidden md:block"
          onClick={() => scroll("left")}
        >
          <img src = {arrowLeft} alt = "" className="size-6"/>
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto py-2 px-8"
          style={{ scrollBehavior: "smooth" }}
        >
          {products.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className="h-full w-full object-contain bg-white rounded shadow"
            />
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full hidden md:block"
          onClick={() => scroll("right")}
        >
          <img src = {arrowRight} alt = "" className="size-6"/>
        </button>
      </div>
    </div>
  );
}