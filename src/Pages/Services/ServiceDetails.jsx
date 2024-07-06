import { Link, useLoaderData } from "react-router-dom";
import SharedBanner from "../Shared/SharedBanner";
import { FaArrowRight } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { title, img, _id ,description, price } = services;
  console.log(_id);
  const { facility } = services;
  console.log(facility[0]);
  return (
    <div>
      <SharedBanner title={"Service Details"} />

      <div className="flex lg:flex-row flex-col my-8  w-10/12 gap-4 mx-auto">
        <div className="lg:w-4/6 w-6/6  ">
          <img className="rounded-lg" src={img} alt="" />
          <h2 className="text-3xl font-bold my-4 ">{title}</h2>
          <p className="text-[#737373] text-justify">{description}</p>
          {/* facilitys section */}
          <div className="grid md:grid-cols-2  grid-cols-1">
            <div className="bg-base-200 p-8 rounded-lg border-t-4 m my-4 lg:m-4 border-[#ff3811] md:w-80 w-80 mx-auto lg:mx-12 ">
              <h3 className="text-xl font-bold mb-4">{facility[0].name}</h3>
              <p className="text-[#737373]">{facility[0].details}</p>
            </div>
            <div className="bg-base-200 p-8 rounded-lg border-t-4 my-4 lg:m-4 border-[#ff3811] md:w-80 w-80 mx-auto lg:mx-12 ">
              <h3 className="text-xl font-bold mb-4">{facility[1].name}</h3>
              <p className="text-[#737373]">{facility[1].details}</p>
            </div>
            <div className="bg-base-200 p-8 rounded-lg border-t-4 my-4 lg:m-4 border-[#ff3811] md:w-80 w-80 mx-auto  lg:mx-12">
              <h3 className="text-xl font-bold mb-4">{facility[2].name}</h3>
              <p className="text-[#737373]">{facility[2].details}</p>
            </div>
            <div className="bg-base-200 p-8 rounded-lg border-t-4 my-4 lg:m-4 border-[#ff3811] md:w-80 w-80 mx-auto  lg:mx-12">
              <h3 className="text-xl font-bold mb-4">{facility[3].name}</h3>
              <p className="text-[#737373]">{facility[3].details}</p>
            </div>
          </div>
          {/* facility end */}
          <span className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there is not anything embarrassing hidden in the
            middle of text.{" "}
          </span>
        </div>

        <div className="bg-base-200 px-4 w-6/6 lg:w-2/6 h-[750px] mb-8 rounded-lg">
          <h3 className="text-2xl font-bold my-4">services</h3>
          <div className="ml-5 ">
            <div className="mr-4 ">
              <button className="flex hover:border-2 border-[#ff3811] justify-around w-full mb-4  mx-auto bg-white px-2 py-4 rounded-lg items-center">
                <span className="text-xl font-bold">Full Car Repair </span>{" "}
                <FaArrowRight className="text-[#ff3811]" />
              </button>
              <button className="flex hover:border-2 border-[#ff3811] justify-around w-full mb-4  mx-auto bg-white px-2 py-4 rounded-lg items-center">
                <span className="text-xl font-bold">Engine Repair </span>{" "}
                <FaArrowRight className="text-[#ff3811]" />
              </button>
              <button className="flex hover:border-2 border-[#ff3811] justify-around w-full mb-4  mx-auto bg-white px-2 py-4 rounded-lg items-center">
                <span className="text-xl font-bold">Automatic Services </span>{" "}
                <FaArrowRight className="text-[#ff3811]" />
              </button>
              <button className="flex hover:border-2 border-[#ff3811] justify-around w-full mb-4  mx-auto bg-white px-2 py-4 rounded-lg items-center">
                <span className="text-xl font-bold">Engine Oil Change </span>{" "}
                <FaArrowRight className="text-[#ff3811]" />
              </button>
            </div>
          </div>
          <div className="bg-[#151515] w-6/6  text-white h-64 px-8 py-4 rounded-lg   ">
            <h3 className="text-3xl font-bold">Download</h3>
            <div className="flex items-center mt-4">
              <FaFilePen className="text-4xl" />
              <div className="ml-4 mr-5">
                <h4 className="">Our Brochure</h4>
                <span className="text-[#A2A2A2]">Download</span>
              </div>
              <button className="bg-[#FF3811]  rounded-lg p-4 ml-10">
                <FaCircleArrowRight className="text-2xl " />
              </button>
            </div>
            <div className="flex items-center mt-4">
              <FaFilePen className="text-4xl" />
              <div className="ml-4 mr-4">
                <h4 className="">Company Details</h4>
                <span className="text-[#A2A2A2]">Download</span>
              </div>
              <button className="bg-[#FF3811]  rounded-lg ml-4 p-4">
                <FaCircleArrowRight className="text-2xl " />
              </button>
            </div>
          </div>
            <div className="">
            <h2 className="mt-8 text-3xl text-center text-[#ff3811] font-bold">PRICE ${price}</h2>
            <Link to={`/checkout/${_id}`}>
            <button className="text-xl  w-64 h-16 mt-12 rounded-lg ml-12 bg-[#ff3811] text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-[#f47c64] w-64 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-[#ff3811] w-64 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Proceed Checkout</button>
            </Link>

            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
