import React from "react";
import {
  AiFillGithub,
  AiOutlineX,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="relative py-8 max-w-[1200px] mx-auto px-4">
      <div className="relative z-10 text-center mt-8">
        <div className="hidden md:block absolute inset-0 overflow-hidden">
          <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-purple-300 rounded-full opacity-40 transform translate-x-[-50%] translate-y-[-50%]"></div>
          <div className="absolute top-[45%] left-[60%] w-[250px] h-[150px] bg-purple-200 rounded-full opacity-20 transform translate-x-[-50%] translate-y-[-50%]"></div>
          <div className="absolute top-[60%] left-[49%] w-[200px] h-[100px] bg-purple-600 rounded-full opacity-30 transform translate-x-[-50%] translate-y-[-50%]"></div>
        </div>

        <p className="hidden md:block lg:text-[15rem] md:text-[11rem] font-bold text-white/10">
          HARALD
        </p>
        <p className="md:hidden mb-12 relative text-7xl font-bold text-white/10">
          HARALD
        </p>
      </div>

      <div className="relative text-center grid grid-cols-1 gap-5 md:flex md:flex-row-reverse md:items-center md:justify-between py-10 mt-28">
        <ul className="flex flex-row gap-6">
          <li>
            <a href="#">
              <AiFillGithub size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiOutlineX size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillFacebook size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillInstagram size={30} />
            </a>
          </li>
        </ul>
        <h4 className="text-sm md:text-xl">© 2024.All rights reserved.</h4>
      </div>
    </div>
  );
};

export default Footer;
