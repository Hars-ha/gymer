import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { CircularText } from "./CircularText";

export const Footer = () => {
  return (
    <div className=" w-full items-center justify-between sm:mb-16 mb-[155px] flex flex-row flex-wrap ">
      <div className=" sm:flex hidden">
        <CircularText
          color={`text-[#f01616]`}
          bg={`bg-black `}
          hover={`hover:text-white hover:shadow-lg hover:shadow-black`}
        />
      </div>
      <div className=" flex flex-col sm:mr-5 sm:mt-0 mt-3 px-6 self-center justify-center ">
        <img src="logo.png" className="w-[80px] mb-4" />
        <p className="sm:w-[450px] text-[#646464] font-medium text-[15px]">
          Experience the ultimate in martial arts training at Kiakaha MMA Gym.
          With elite coaches, cutting-edge facilities, and a vibrant community,
          unleash your full potential and achieve greatness.
        </p>
        <div className="mt-6 flex flex-row gap-4 w-full ">
          <i className="text-[#646464] rounded-full p-3 bg-[#efefef] hover:text-white hover:bg-red-400 items-center transition-all duration-300">
            <FaFacebookF className="w-[18px] h-[20px] " />
          </i>
          <i className="text-[#646464] rounded-full p-3 bg-[#efefef] hover:text-white hover:bg-red-400 transition-all duration-300 items-center">
            <FaTwitter className="w-[18px] h-[20px] " />
          </i>
          <i className="text-[#646464] rounded-full p-3 bg-[#efefef] hover:text-white hover:bg-red-400 transition-all duration-300 items-center">
            <FaPinterest className="w-[18px] h-[20px] " />
          </i>
          <i className="text-[#646464] rounded-full p-3 bg-[#efefef] hover:text-white hover:bg-red-400 transition-all duration-300 items-center">
            <FaInstagram className="w-[18px] h-[20px] " />
          </i>
          <i className="text-[#646464] rounded-full p-3 bg-[#efefef] hover:text-white hover:bg-red-400 transition-all duration-300 items-center">
            <FaLinkedinIn className="w-[18px] h-[20px] " />
          </i>
        </div>
        <p className="text-[16px] mt-4 font-medium text-[#646464]">
          Privacy Policy | © {new Date().getFullYear()} Gymate <br /> Design by{" "}
          <a target="_blank" rel="noreferrer" href="">
            H
          </a>
        </p>
      </div>
      <div className="flex flex-row flex-wrap self-center justify-center sm:mt-0 mt-6  sm:mx-6 ">
        <div className="flex flex-col items-center justify-center text-center mr-10 ">
          <h1 className="uppercase text-xl font-bold mb-2">useful links</h1>
          <span className="text-[#646464] font-medium hover:text-red-400 hover:font-semibold text-lg mb-2">
            Home
          </span>
          <span className="text-[#646464] font-medium hover:text-red-400 hover:font-semibold text-lg mb-2">
            Classes
          </span>
          <span className="text-[#646464] font-medium hover:text-red-400 hover:font-semibold text-lg mb-2">
            Gallery
          </span>
          <span className="text-[#646464] font-medium hover:text-red-400 hover:font-semibold text-lg mb-2">
            Schedule
          </span>
          <span className="text-[#646464] font-medium hover:text-red-400 hover:font-semibold text-lg mb-2">
            Pricing
          </span>
          <span className="text-[#646464] font-medium hover:text-red-400 hover:font-semibold text-lg ">
            Contact
          </span>
        </div>
        <div className="flex flex-col w-[250px] sm:mt-0 mt-6 ">
          <p className="font-semibold mb-3 text-lg">Reach US at -</p>
          <p className="text-[#646464] mb-2 font-medium">
            @kiakahammaa@gmail.com
          </p>
          <p className="text-[#646464] mb-2 font-medium">06364396563</p>
          <p className="text-[#646464] font-medium">
            Koramangala- No-474, second floor, 1st Cross Rd, KHB Colony, 5th
            Block, Koramangala, Bengaluru, Karnataka 560095. 06364396563
          </p>
        </div>
      </div>
    </div>
  );
};
