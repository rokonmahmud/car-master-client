import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ServicesCard = ({ services }) => {
  console.log(services);
  // eslint-disable-next-line react/prop-types
  const {_id ,img, price, title } = services;
  return (
    <div className="max-[350px] md:w-[350px] bg-[#FFF] m-4 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
      {/* Card Image */}
      <img
        className="w-[350px] h-[190px] bg-gray-400 rounded-2xl"
        src={img}
        alt=""
      />
      {/* Card Heading */}
      <div className="space-y-2">
        <h2 className="text-slate-800 md:text-xl sm:text-lg font-bold">
          {title}
        </h2>
       
      </div>
      {/* Price and action button */}
      <div className="mt-5 flex justify-between items-center font-medium">
        <h2 className="md:text-xl text-[#ff3811]">${price}</h2>

       <Link to={`/services/${_id}`}> <button className="flex items-center relative w-32 h-12 border-2 border-[#ff3811] text-[#ff3811] p-4 rounded-lg group">
          <span>Explore</span>
          <span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-lg">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="#ff3811"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </span>
        </button>
        </Link>
      </div>
     
    </div>
  );
};
export default ServicesCard;
