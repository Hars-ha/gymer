import { useState } from "react";
import { FormatList } from "./Formatlist";
import { Link } from "react-router-dom";

export const Formats = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-16">
      <div className="flex flex-col justify-center text-center items-center mb-14">
        <h1 className="uppercase text-[35px] px-10 font-semibold font-montserrat">
          Tailored Learning on Your Terms
        </h1>
        <div className="flex flex-row mt-2 px-6">
          <span className="sm:text-xl font-montserrat  font-semibold">
            {" "}
            Embracing the Flexibility of{" "}
          </span>
          <span className="sm:text-[35px] ml-2 mr-2 text-[30px] sm:mx-2  sm:-mt-4 -mt-3  text-[#f01616] font-montserrat font-semibold">
            Flexible
          </span>
          <span className="sm:text-xl font-montserrat font-semibold">
            classes
          </span>
        </div>
      </div>
      <div className="gap-10 flex flex-row flex-wrap items-center justify-center w-full h-full mb-16 mx-4">
        <div className="relative w-[450px] h-[500px] rounded-[25px] hover:scale-105 duration-300 shadow-md shadow-black hover:shadow-xl ">
          <img
            src="boxing.png"
            className="w-full h-full rounded-[25px] object-cover object-right "
          />
          <div className="absolute bottom-[15%] left-[26%] z-10 ml-3">
            <p className="text-white font-poppins font-semibold text-5xl">
              Boxing
            </p>
          </div>
          <div
            className={`absolute w-[75px]  bg-white   rounded-full p-3 top-2 left-[5%] z-10 `}
          >
            <img src="boxericon.png" className="z-10 " />
          </div>
        </div>
        <div className="relative w-[450px] h-[500px] rounded-[25px] hover:scale-105 duration-300 shadow-md shadow-black hover:shadow-xl ">
          <img
            src="kickbox.png"
            className="w-full h-full rounded-[25px] object-cover object-right "
          />
          <div className="absolute bottom-[15%] left-[23%] z-10 ml-3">
            <p className="text-white font-poppins font-semibold text-5xl">
              Kickboxing
            </p>
          </div>
          <div
            className={`absolute w-[75px]  bg-white  rounded-full p-3 top-2 left-[5%] z-10 `}
          >
            <img src="kickboxing.png" className="z-10 " />
          </div>
        </div>
        <div className="relative w-[450px] h-[500px] rounded-[25px] hover:scale-105 duration-300 shadow-md shadow-black hover:shadow-xl ">
          <img
            src="yoga.png"
            className="w-full h-full rounded-[25px] object-cover object-right "
          />
          <div className="absolute bottom-[15%] left-[23%] z-10 ml-3">
            <p className="text-white font-poppins font-semibold text-5xl">
              Yoga and Meditation
            </p>
          </div>
          <div
            className={`absolute w-[75px]  bg-white  rounded-full p-3 top-2 left-[5%] z-10 `}
          >
            <img src="handstand.png" className="z-10 " />
          </div>
        </div>
        <div className="relative w-[450px] h-[500px] rounded-[25px] hover:scale-105 duration-300 shadow-md shadow-black hover:shadow-xl ">
          <img
            src="jujitsi.png"
            className="w-full h-full rounded-[25px] object-cover object-right "
          />
          <div className="absolute bottom-[13%] left-[30%] z-10 ml-3">
            <p className="text-white font-poppins font-semibold text-[48px]">
              Jujitsu
            </p>
          </div>
          <div
            className={`absolute w-[75px] bg-white  rounded-full p-3 top-2 left-[5%] z-10 `}
          >
            <img src="wrestler.png" className="z-10 " />
          </div>
        </div>
        <div className="relative w-[450px] h-[500px] rounded-[25px] hover:scale-105 duration-300 shadow-md shadow-black hover:shadow-xl ">
          <img
            src="knee.png"
            className="w-full h-full rounded-[25px] object-cover object-right "
          />

          <div className="absolute bottom-[15%] left-[30%] z-10 ml-3">
            <p className="text-white font-poppins font-semibold text-5xl">
              Muay Thai
            </p>
          </div>
          <div
            className={`absolute w-[75px] bg-white  rounded-full p-3 top-2 left-[5%] z-10 `}
          >
            <img src="muaythai.png" className="z-10 " />
          </div>
        </div>
      </div>
      <Link
        onClick={() => window(0, 0)}
        to="/classes"
        className="uppercase justify-center items-center text-center bg-[rgb(128,128,128)] border-[2px] border-black py-2 px-3 text-white font-mono text-[18px] font-semibold"
      >
        explore more
      </Link>
    </div>
  );
};
