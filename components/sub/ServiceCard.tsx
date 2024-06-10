import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ServiceCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-6 bg-[#1a1a2e]">
      <Image
        src={src}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-2 sm:p-4">
        <h1 className="text-xl md:text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm sm:text-base text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
