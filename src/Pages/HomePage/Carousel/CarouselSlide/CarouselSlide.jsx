const CarouselSlide = ({ slideImg, title, subTitle, description }) => {
  return (
    <div className="">
      <div className="relative h-full">
        {/* <div className="size-full"> */}
        <img src={slideImg} alt="" className="object-cover h-[70vh] w-full" />
        {/* </div> */}
        <div className="absolute top-0 left-0 flex items-center justify-center bg-gradient-to-r from-[#13131866] to-[#13131866] size-full">
          <div className="space-y-4 text-center text-white md:space-y-5 lg:space-y-6">
            <h3 className="text-lg font-playfair-display lg:text-2xl">
              {subTitle}
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-[90px] font-bold text-white font-playfair-display">
              {title}
            </h1>
            <hr className="h-1 mx-auto border-none rounded bg-primary w-28" />
            <p className="lg:mx-auto lg:w-2/3 lg:text-lg">{description}</p>
            <button className="btn-base btn-primary">Spacial Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
