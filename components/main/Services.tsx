import React from "react";
import ServiceCard from "../sub/ServiceCard";
import { serviceData } from "@/constants";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20" id="services">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Services
      </h1>
      <div className="lg:h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            src={service.src}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
