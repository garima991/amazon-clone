import { sampleCardData } from "../sampleData.js";
import Card from "../components/Card.jsx";
import Carousel from "../components/Carousel.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import VerticalCardGrid from "../components/VerticalCardGrid.jsx";
import HorizontalProductStrip from "../components/HorizontalCardStrip.jsx";

const verticalCards = [
  {
    title: "Up to 50% off | International brands",
    images: ["https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/2025/PC_CC_379x304-4._SY304_CB792574952_.jpg"],
    linkLabel: "See all offers",
  },
  {
    title: "Best Sellers in Sports, Fitness & Outdoors",
    images: ["https://m.media-amazon.com/images/I/710SxepIfiL._AC_SY175_.jpg"],
    description:
      "Lifelong PVC Hex Dumbbells Pack of 2 (5kg*2) Black Color for Home Gym Equipment Fitness Barbell...",
    linkLabel: "See all offers",
  },
  {
    title: "Customers’ Most-Loved products",
    images: ["https://m.media-amazon.com/images/I/519YnJNsrVL._AC_SY145_.jpg", "https://m.media-amazon.com/images/I/615873vXvfL._AC_SY145_.jpg", "https://m.media-amazon.com/images/I/81DaukEGglL._AC_SY145_.jpg", "https://m.media-amazon.com/images/I/614GVH+B8HL._AC_SY145_.jpg"],
    linkLabel: "Explore more",
  },
  {
    title: "Up to 60% off | Car, bike parts & accessories",
    images: ["https://images-eu.ssl-images-amazon.com/images/G/31/2023/GateWay/December/CC/PC_379x304_1._SY304_CB572341311_.jpg"],
    linkLabel: "See more",
  },
];

const trendingProducts = [
  "https://m.media-amazon.com/images/I/913irsXY8nL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61XTLwL8bdL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71i9srqKWvL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/913rL-8avbL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71zXqQ39fZL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61zMKWGmKFL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/81BElxcnowL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/81Stvca+WRL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/81GL2mi-njL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71QjWSO08NL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/91sm3Rk1EHL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61hDhiyIQBL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71PDNrV7VPL._AC_SY200_.jpg",
];

const techEssentials = [
  "https://m.media-amazon.com/images/I/61oh0M9st4L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/51q9zqbIj2L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/51g4OomzHxL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/91pwbCPh0+L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71b122pwbpL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71OS1KHe2AL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61dD-ZZV-nL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71-rMIvceEL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71VR6c3j2bL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71h7fLNEQPL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61-W3AAG8gL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/51OzSukw7ZL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/51LlDPYPIfL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/619PNYrxNAL._AC_SY200_.jpg"
];

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product`);
  };

  return (
    <div className="home-container flex-1 flex flex-col relative">
      <div className=" home gap-4 w-full max-w-screen m-auto flex flex-col relative">
        <div className="w-full flex flex-wrap justify-between gap-4 mx-auto">
          <Carousel />
          <div className="absolute top-96 flex flex-wrap gap-4">
            {sampleCardData.map((card) => (
              <Card data={card} name={1} onClick={() => handleClick()} />
            ))}

            <VerticalCardGrid cards={verticalCards} />
            <HorizontalProductStrip
              title="Up to 60% off | Trending products from Emerging Businesses"
              linkLabel="See more"
              linkTo="/product"
              products={trendingProducts}
            />
            <HorizontalProductStrip
              title="Up to 50% Off | Save on tech essentials from stores near you"
              linkLabel="See all offers"
              products={techEssentials}
            />
            <div className="w-full">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
