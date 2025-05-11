import {useState, useEffect} from "react";
import image1 from "../assets/carousel/image1.jpg";
import image2 from "../assets/carousel/image2.jpg";
import image3 from "../assets/carousel/image3.jpg";
import image4 from "../assets/carousel/image4.jpg";
import image5 from "../assets/carousel/image5.jpg";
import image6 from "../assets/carousel/image6.jpg";

const Carousel = () => {
    const [currSlide, setCurrSlide] = useState(0);
    let imagesArray = [image1, image2, image3, image4, image5, image6];

      const nextSlide = () => {
        setCurrSlide(currSlide === imagesArray.length - 1 ? 0 : currSlide + 1);
      };
      
      const prevSlide = () => {
        setCurrSlide(currSlide === 0 ? imagesArray.length - 1 : currSlide - 1);
      };
    
      useEffect(() => {
        const slideInterval = setInterval(() => {
          nextSlide();
        }, 4000);
        return () => clearInterval(slideInterval);
      }, [currSlide]);
    
      return (
        <div className="relative flex justify-center w-full h-screen">
          
          <div className= "absolute flex w-full items-center justify-center">
            {imagesArray.map((item, index) => (
              currSlide === index && (
                <img 
                  key={index} 
                  src={item} 
                  alt="carousel slide" 
                  className="w-full h-[90vh] transition duration-200 ease-in-out " 
                />
              )
            ))}
          </div>
          
        
        </div>
      );
    };
export default Carousel;
