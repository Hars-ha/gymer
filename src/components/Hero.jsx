import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => (
  <div className="mb-20  ">
    <div className="flex relative w-full justify-center items-center h-screen sm:bg-cover  bg-[70%] bg-cover custom-img ">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-[2] sm:bg-black/20  bg-black/40" />
      <div className="absolute z-10 flex flex-col sm:left-[15%] sm:top-[26%] top-[23%] left-[5%] ">
        <span className="text-white text-[55px] font-semibold font-montserrat -mb-3">
          WE ARE
        </span>
        <span className="text-white lg:text-[95px] text-[58px] font-extrabold font-montserrat tracking-widest sm:-mt-3 ">
          KIAKAHA
        </span>
        <div className="sm:-mt-2">
          <span className="text-white  uppercase sm:text-[40px] text-3xl">
            Make it happen
          </span>
        </div>

        <Link
          onClick={() => window(0, 0)}
          to="/contact"
          className="bg-[#f01616]  sm:mt-8 w-[160px]  rounded-lg  py-[2px] px-[1px] sm:flex hidden justify-center items-center"
        >
          <span className="bg-[#f01616] hover:bg-black hover:text-white text-white py-[12px] px-[30px] rounded-lg font-semibold    uppercase hover:shadow-lg hover:shadow-red-600  tracking-widest">
            join now
          </span>
        </Link>
      </div>
      <div className=" sm:mt-3 mt-2">
        <span
          className="text-white  font-semibold  sm:text-[15px] text-[12px] font-poppins absolute
                         bottom-[22%] right-[6%]  w-[175px] "
        >
          "Experience the ultimate in martial arts training at Kiakaha MMA Gym.
          With elite coaches, cutting-edge facilities, and a vibrant community,
          unleash your full potential and achieve greatness."
        </span>
      </div>
    </div>
  </div>
);
