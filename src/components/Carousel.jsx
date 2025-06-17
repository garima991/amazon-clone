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
        <div className="relative flex justify-center w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/4 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/4 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-200"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slides */}
          <div className="absolute flex w-full items-center justify-center">
            {imagesArray.map((item, index) => (
              currSlide === index && (
                <img 
                  key={index} 
                  src={item} 
                  alt="carousel slide" 
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out" 
                />
              )
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {imagesArray.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      );
    };
export default Carousel;
