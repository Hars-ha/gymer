import { PriceDetails } from "./PriceDetails";
import { BiRupee } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Pricing = () => {
  return (
    <div className="mt-10 justify-center items-center text-center mb-20">
      <div className="flex flex-col ">
        <h1 className="uppercase text-2xl font-semibold font-montserrat mb-2">
          Exclusive Gym Membership Pricing
        </h1>
        <span className=" uppercase text-4xl font-semibold font-montserrat">
          unlimited membership plan
        </span>
        <span className="mt-1 text-[16px] text-[rgb(128,128,128)] font-poppins">
          Affordable membership options, diverse pricing plans, premium gym
          experience.
        </span>
      </div>
      <div className="flex flex-row flex-wrap mt-7 items-center justify-center gap-10 ">
        {PriceDetails.map((item, id) => (
          <div
            key={id}
            className=" min-h-[530px] flex flex-col w-[325px]  items-center  text-center shadow-lg shadow-gray-400 hover:shadow-xl hover:shadow-gray-400 "
          >
            <img src={item.img} className="w-[350px] h-[250px] object-cover" />
            <span className="text-2xl font-semibold font-montserrat mt-6">
              {item.time}
            </span>
            <div className="relative mt-3">
              <span className="absolute inline-block w-full  h-[1px] bg-[#bdbdbd]  left-1 bottom-[50%] ">
                &nbsp;
              </span>
              <span className="flex flex-row text-[13px] text-[#f01616] items-center ">
                <BiRupee size={16} /> {item.price}
              </span>
            </div>
            <span className="flex flex-row text-xl font-poppins font-semibold mt-1 mr-2 items-center">
              <BiRupee size={20} /> {item.offer}
            </span>
            <div className="flex flex-row gap-3 items-center mt-3">
              <BsFillCheckCircleFill size={20} />
              <span className="text-2xl">Unlimited Access</span>
            </div>
            <Link
              onClick={() => window(0, 0)}
              to="/pricing"
              className="bg-black mt-6  w-[280px]  rounded-lg  py-[3px] px-[1px] flex  justify-center items-center "
            >
              <span className="bg-black hover:bg-white hover:text-[#f01616] text-[white] py-[11px] px-[58px] rounded-lg font-semibold  uppercase hover:shadow-lg hover:shadow-black tracking-widest ">
                pusrchase now
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
