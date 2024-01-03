import { Carousel } from "flowbite-react";
import CarouselItem from "./item";

interface CarouselProps {}
const CarouselCompoonet: React.FC<CarouselProps> = () => {
  return (
    <div style={{ width: "100%", height: "200px" }}>
      <div className="w-full h-full">
        <Carousel slideInterval={3000}>
          <CarouselItem image="https://flowbite.com/docs/images/carousel/carousel-1.svg"/>
          <CarouselItem image="https://flowbite.com/docs/images/carousel/carousel-2.svg"/>
          <CarouselItem image="https://flowbite.com/docs/images/carousel/carousel-3.svg"/>
          <CarouselItem image="https://flowbite.com/docs/images/carousel/carousel-4.svg"/>
          <CarouselItem image="https://flowbite.com/docs/images/carousel/carousel-5.svg"/>
          <CarouselItem image="https://flowbite.com/docs/images/carousel/carousel-1.svg"/>
          <CarouselItem image="https://flowbite.com/docs/images/carousel/carousel-1.svg"/>
          {/* <div style={{ position: "relative" }}>
            <button
              style={{
                position: "absolute",
                zIndex: "10000",
                color: "blue",
                fontSize: "20px",
                right: "10px",
                top: "14px",
              }}
            >
              X
            </button>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
          </div>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselCompoonet;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css/navigation";
// import "./styles.css";

// import { ContainerCarousel } from "./carouse.style";

// interface CarouselProps {}

// const Carousel: React.FC<CarouselProps> = () => {
// // Import Swiper React components

// // Import Swiper styles

//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };
// export default Carousel;
