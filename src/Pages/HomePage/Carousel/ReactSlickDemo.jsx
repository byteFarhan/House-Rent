import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useRef } from "react";
import sliderImg1 from "../../../assets/sliderImgs/slider-1.png";
import sliderImg2 from "../../../assets/sliderImgs/slider-2.jpg";
import sliderImg3 from "../../../assets/sliderImgs/slider-3.jpg";
const Carousel = () => {
  const sliderRef = useRef(null);
  console.log(sliderRef);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
  return (
    <>
      <section className="relative">
        <div className="absolute z-10 flex justify-between w-full px-10 top-1/2">
          <div
            onClick={prevSlide}
            className="p-5 bg-white rounded-full cursor-pointer"
          >
            <GrPrevious className="text-3xl font-semibold text-primary" />
          </div>
          <div
            onClick={nextSlide}
            className="p-5 bg-white rounded-full cursor-pointer"
          >
            <GrNext className="text-3xl font-semibold text-primary" />
          </div>
        </div>

        <div className="">
          <Slider ref={sliderRef} {...settings} className="">
            <CarouselSlide
              slideImg={sliderImg1}
              title={"Awesome apartment Villa"}
              subTitle={"Good Service is our passion"}
              description={`  No matter what the weather, no matter what the situation we are
              in, if we have the right perspective in life, life will always be
              beautiful!`}
            />
            <CarouselSlide
              slideImg={sliderImg2}
              title={`Seaside Retreat Haven`}
              subTitle={`Experience Serenity by the Shore`}
              description={`Discover the ultimate seaside sanctuary at our retreat haven. Let the soothing sound of waves and the gentle ocean breeze whisk away your worries.`}
            />
            <CarouselSlide
              slideImg={sliderImg3}
              title={`Mountain Chalet Escape`}
              subTitle={`Embrace Adventure in Nature's Lap`}
              description={`Embark on a journey to our mountain chalet escape, where adventure and relaxation intertwine. Surrounded by breathtaking views, every moment becomes an exhilarating experience.`}
            />
            {/* <CarouselSlide />
            <CarouselSlide /> */}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Carousel;
