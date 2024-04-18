import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import sliderImg1 from "../../../assets/sliderImgs/slider-1.png";
import sliderImg2 from "../../../assets/sliderImgs/slider-2.jpg";
import sliderImg3 from "../../../assets/sliderImgs/slider-3.jpg";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselSlide
            slideImg={sliderImg1}
            title={"Awesome apartment Villa"}
            subTitle={"Good Service is our passion"}
            description={`  No matter what the weather, no matter what the situation we are
              in, if we have the right perspective in life, life will always be
              beautiful!`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide
            slideImg={sliderImg2}
            title={`Seaside Retreat Haven`}
            subTitle={`Experience Serenity by the Shore`}
            description={`Discover the ultimate seaside sanctuary at our retreat haven. Let the soothing sound of waves and the gentle ocean breeze whisk away your worries.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide
            slideImg={sliderImg3}
            title={`Mountain Chalet Escape`}
            subTitle={`Embrace Adventure in Nature's Lap`}
            description={`Embark on a journey to our mountain chalet escape, where adventure and relaxation intertwine. Surrounded by breathtaking views, every moment becomes an exhilarating experience.`}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
