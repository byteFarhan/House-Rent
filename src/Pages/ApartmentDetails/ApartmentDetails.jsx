import { Helmet } from "react-helmet";
import { FaLocationDot } from "react-icons/fa6";
import { GiPentarrowsTornado } from "react-icons/gi";
import { useLoaderData, useParams } from "react-router-dom";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import DetailsCarousel from "./DetailsCarousel/DetailsCarousel";

const ApartmentDetails = () => {
  const apartments = useLoaderData();
  const id = useParams();
  // console.log(id);
  // console.log(apartments);
  const theApartment = apartments.find((apartment) => apartment.id == id.id);
  //   console.log(theApartment);
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = theApartment;
  return (
    <>
      <section
        data-aos="zoom-in-left"
        className="grid grid-cols-1 container max-w-[1280px] mx-auto lg:grid-cols-3 gap-6 my-8 lg:my-12"
      >
        <Helmet>
          <title>House Rent | Apartment {id.id}</title>
        </Helmet>
        <div className="lg:col-span-2">
          <img src={image} alt="" className="object-cover w-full rounded-md" />
          <div className="my-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-3xl font-bold lg:text-4xl lg:mb-4">
                {estate_title}
              </h3>
              <p className="text-xl font-bold text-navy">{segment_name}</p>
            </div>
            <p className="text-xl font-semibold text-[#777]">{description}</p>
            <div>
              <h5 className="my-3 text-3xl font-bold">Facilities-</h5>
              <ul>
                {facilities?.map((facility, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-lg font-medium capitalize text-navy"
                  >
                    <GiPentarrowsTornado /> {facility}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-6 my-3">
              <p className="text-xl font-semibold">Area: {area}</p>
              <p className="flex items-center gap-2 text-xl font-semibold">
                <FaLocationDot />
                {location}
              </p>
            </div>
            <div className="flex gap-6">
              <p className="text-xl font-semibold">Status- {status}</p>
              <p className="text-xl font-semibold">{price}</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="p-6 border-4 rounded-md border-green">
            <h4 className="mb-6 text-xl font-bold">BOOK THIS APARTMENT</h4>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium capitalize label-text text-primary">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium capitalize label-text text-primary">
                    Phone Numbers
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="+88 01xxxxxxxxx"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium capitalize label-text text-primary">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="example@domain.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium capitalize label-text text-primary">
                    Family Members
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="1"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium capitalize label-text text-primary">
                    Children
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="1"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-medium capitalize label-text text-primary">
                    Write Your Message
                  </span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="5"
                  className="w-full p-3"
                ></textarea>
              </div>
              <button className="w-full mt-4 btn-base btn-primary">
                Request Booking
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApartmentDetails;
