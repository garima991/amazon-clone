import image1 from "../../assets/carousel/image1.jpg";
import image2 from "../../assets/carousel/image2.jpg";
import image3 from "../../assets/carousel/image3.jpg";
import image4 from "../../assets/carousel/image4.jpg";
import image5 from "../../assets/carousel/image5.jpg";
import image6 from "../../assets/carousel/image6.jpg";
import "./Carousel.css";

const Carousel = () => {
    let currSlide = 0;
    let totalSlides = 6;
    let imagesArray = [image1, image2, image3, image4, image5, image6];

    function setSlide() {
        document.querySelectorAll(".carousel-img").forEach((image, index) => {
            image.style.transform = `translate(${(index - currSlide) * 100}%)`;
            image.style.transition = "1s";
        });
    }

    function prevSlide() {
        currSlide = (currSlide - 1 + totalSlides) % totalSlides;
        setSlide();
    }

    function nextSlide() {
        currSlide = (currSlide + 1) % totalSlides;
        setSlide();
    }

    return (
        <div className="carousel-container relative w-full">
            <div className="carousel-img-container flex overflow-hidden w-full">
                {imagesArray.map((image, index) => {
                    return (
                        <img
                            key={index}
                            src={image}
                            alt=""
                            className="carousel-img object-cover w-full transition-transform"
                        />
                    );
                })}

                {/* <CarouselButton> */}
                <div className="absolute top-1/2 left-0 transform translate-y-1 px-4">
                <button
                    className="carousel-left text-black px-4 py-2 rounded-full z-10 "
                    onClick={prevSlide}
                >
                    {" < "}
                </button>
                </div>
                {/* </CarouselButton> */}

                {/* <CarouselButton> */}
                <div className="absolute top-1/2 left-0 transform translate-y-1 px-4">
                    <button
                        className="carousel-right text-black px-4 py-2 rounded-full z-10 "
                        onClick={nextSlide}
                    >
                        {" > "}
                    </button>
                </div>

                {/* </CarouselButton> */}
            </div>
        </div>
    );
};

export default Carousel;
