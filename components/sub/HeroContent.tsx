"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { phoneNumber, message } from "@/constants";

const HeroContent = () => {

  const handleWhatsapp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">



        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer
          </h1>
        </motion.div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex md:hidden justify-center items-center"
      >
        <Image
          src="/profile.jpeg" // Replace with the path to your profile image
          alt="Manas Srivastava"
          className="rounded-full shadow-lg"
          height={250}
          width={250}
        />
      </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          &quot;Transforming ideas into reality! Full Stack Developer with 3+ years of experience crafting HIGH-QUALITY & SCALABLE WEB & MOBILE SOLUTIONS. Specializing in React.Js, Node.Js, Next.Js for dynamic websites, and Swift & Flutter for robust mobile apps. Expert in managing projects from CONCEPT to DEPLOYMENT, ensuring timely delivery within budget. Let&apos;s collaborate to bring your digital vision to life!&quot;
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          onClick={handleWhatsapp}
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden md:flex justify-center items-center"
      >
        <Image
          src="/profile.jpeg" // Replace with the path to your profile image
          alt="Manas Srivastava"
          className="rounded-full shadow-lg"
          height={350}
          width={350}
        />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black to-gray-600 opacity-50 rounded-full"></div> */}
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex md:hidden lg:flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
