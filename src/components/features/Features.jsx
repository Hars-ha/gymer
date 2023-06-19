import React from "react";
import { FeatureList } from "./featuresList";

export const Feature = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <div className="">
        <h1 className="uppercase text-4xl font-semibold font-montserrat">
          Our Features
        </h1>
      </div>

      <div className="flex flex-row flex-wrap mt-10 gap-16 justify-center items-center w-full font-poppins px-4 cursor-pointer">
        {FeatureList.map((feature, id) => (
          <div
            key={id}
            className="flex flex-col min-h-[300px] w-[400px]  text-center  items-center px-6 py-6  rounded-[35px]   hover:bg-black hover:text-white shadow-2xl "
          >
            <div className="w-[55px] mt-8">
              <img src={feature.img} />
            </div>
            <p className=" font-semibold text-[24px] mt-6 ">{feature.title}</p>
            <p className="text-[15px] w-full mt-3 text-[rgb(128,128,128)]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
