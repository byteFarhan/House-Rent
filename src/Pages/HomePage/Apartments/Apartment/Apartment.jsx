import { FaBath, FaBed, FaRegStar, FaShareAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Apartment = ({ apartment }) => {
  const { estate_title, price, location, bathrooms, bedrooms, image, id } =
    apartment;
  return (
    <>
      <div className="rounded-md card bg-base-100">
        <figure>
          <img
            src={image}
            alt={estate_title}
            className="h-[300px] w-full object-cover rounded-md"
          />
        </figure>
        <div className="p-5 lg:p-6 border border-[#E4E4E4]">
          <div className="space-y-4">
            <h3 className="text-lg inline-block md:text-xl font-bold text-[#292928] hover:text-green transition-all duration-75">
              {estate_title}
            </h3>
            <p className="text-[#9d9d9d] font-medium flex items-center gap-2">
              <span className="text-lg">
                <IoLocationSharp />
              </span>{" "}
              {location}
            </p>
          </div>
          <hr className="bg-[#E4E4E4] h-[2px] w-full my-4" />
          <div className="space-y-4">
            <span className="flex items-center gap-6 text-[#9d9d9d]">
              <p className="flex items-center gap-2">
                <FaBed />
                {bedrooms} Bedrooms
              </p>
              <p className="flex items-center gap-2">
                <FaBath />
                {bathrooms} Bathroom
              </p>
            </span>
            <span className="flex items-center justify-between">
              <p className="text-xl font-bold">{price}</p>
              <div className="flex gap-3 items-center text-[#9d9d9d] text-xl font-medium">
                <FaShareAlt />
                <FaRegStar />
              </div>
            </span>
          </div>
          <div className="mt-5 lg:mt-6">
            <Link to={`/house/${id}`} className="btn-base btn-navy">
              View Property
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apartment;
