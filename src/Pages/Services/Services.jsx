import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-master-server-three.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h4 className="text-[#FF3811] text-xl mb-4   font-bold ">Service</h4>
        <h2 className="text-3xl font-bold mb-4">Our Service Area</h2>
        <p className="mb-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto my-4">
        {services.map((services) => (
          <ServicesCard key={services._id} services={services} />
        ))}
      </div>
    </div>
  );
};

export default Services;
