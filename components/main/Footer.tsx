import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[21]">
            <div className="font-bold text-[16px]">Community</div>
            <a href="https://www.youtube.com/@manassrivastava9631" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a href="https://github.com/rockingmanas78" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[21]">
            <div className="font-bold text-[16px]">Social Media</div>
            <a href="https://www.instagram.com/rockingmanas78/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/manas-srivastava-122b94189/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[21]">
            <div className="font-bold text-[16px]">About</div>
            <a href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </a>
            <a href="#" className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </a>
            <a href="mailto:rockingmanas78@gmail.com" className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">rockingmanas78@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Manas Srivastava 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
