import React from "react";
// import "./Home.css";
export default function Card({ data, name, onClick}) {
  console.log(name);
  return (
    <div onClick={onClick} className="min-w-[310px] w-[32%] flex-1 flex flex-col gap-3 p-4 rounded-sm bg-white text-[#111] border-solid border-2 border-[#f0f2f2]">
      <div className="text-[22px] font-bold leading-[27px]">{data.title}</div>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {data.items.map((item) => (
          <div className="home-card-item w-[47.5%] flex flex-col gap-1">
            <img
              className="home-card-item-image min-w-full h-[100px] object-cover bg-[#222f3e]"
              src={item.image}
              alt="item-image"
            />
            <div className=" text-[12px] font-bold leading-[18px] text-[#0f1111]">
                {item.title}
            </div>
          </div>
        ))}
      </div>
      <a href= {data.redirect.label} className="flex justify-start items-center text-[#007185] cursor-pointer hover:text-[#c7501f]">
        {data.redirect.label}
      </a>
    </div>
  );
}
