import React, { useEffect, useState } from "react";

const ServiceCard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/services`)
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetchinh services:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {services.map((service) => (
        <div
          className="bg-custom-navyblue text-white p-4 rounded-lg text-left w-[200px] flex flex-col gap-2 transition-transform duration-300 ease-in-out hover:scale-105"
          key={service.id}
        >
          <div className="flex items-center gap-2">
            <span className="w-15 h-15">
              <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
            </span>
            <h3 className="text-custom-blue font-semibold">{service.title}</h3>
          </div>
          <p className="text-sm leading-relaxed">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
