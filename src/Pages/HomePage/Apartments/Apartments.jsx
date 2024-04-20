import { useEffect, useState } from "react";
import Apartment from "./Apartment/Apartment";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    fetch("/data/apartments.json")
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);
  // console.log(apartments);
  return (
    <>
      <section className="my-20 max-w-[1280px] mx-auto">
        <div className="mb-12 text-center text-navy">
          <h2 className="text-3xl font-bold leading-normal md:text-4xl lg:text-6xl font-playfair-display">
            Rooms & Apartments
          </h2>
          <hr className="bg-[#969696] h-[2px] w-28 mx-auto my-3" />
          <p className="lg:font-semibold">FIND YOUR ROOMS, FOR YOUR ABAILITY</p>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {apartments?.map((apartment) => (
              <Apartment key={apartment.id} apartment={apartment} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Apartments;
