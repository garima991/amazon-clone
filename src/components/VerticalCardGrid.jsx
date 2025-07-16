import { useNavigate } from "react-router-dom";

export default function VerticalCardGrid({ cards }) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-6 px-4">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white rounded-lg p-4 flex flex-col h-full text-[#111] border-solid border-2 border-[#f0f2f2]">
          <h3 className="text-lg font-bold mb-2">{card.title}</h3>
          <div className="flex flex-wrap justify-center items-center gap-3 mb-2">
            {card.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="object-contain bg-gray-100 rounded mb-1"
              />
            ))}
          </div>
          {card.description && (
            <div className="text-xs text-gray-700 mb-2">{card.description}</div>
          )}
          {card.price && (
            <div className="text-lg font-bold text-[#B12704] mb-2">{card.price}</div>
          )}
          <button
            className="text-[#007185] hover:text-[#c7501f] text-sm mt-auto"
            onClick={() => navigate('/product')}
          >
            {card.linkLabel}
          </button>
        </div>
      ))}
    </div>
  );
}