import { PriceDetails } from "../components/price/PriceDetails";
import { BiRupee } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Footer } from "../components/Footer";

export const PricingPage = () => {
  return (
    <div className="items-center justify-center ">
      <div className="relative">
        <img src="pad.png" className="w-full h-[300px] object-cover" />
        <div className="absolute top-0 bottom-0 left-0 right-0 z-[2]   bg-black/80" />
      </div>
      <div className="flex flex-col mt-20 items-center justify-center text-center">
        <h1 className="uppercase text-2xl font-semibold font-montserrat mb-2 ">
          Exclusive Gym Membership Pricing
        </h1>
        <span className=" uppercase text-4xl font-semibold font-montserrat text-[#f01616]">
          unlimited membership plan
        </span>
        <span className="mt-1 text-[16px] text-[rgb(128,128,128)] font-poppins sm:w-[850px] text-center">
          Affordable membership options, diverse pricing plans, premium gym
          experience.Value-packed pricing, customizable packages,
          state-of-the-art facilities, expert trainers, flexible payment
          options, your fitness journey starts here
        </span>
      </div>
      <div className="flex flex-row flex-wrap mt-16 mb-16 items-center justify-center gap-10 ">
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
            <button className="bg-black mt-6  w-[280px]  rounded-lg  py-[3px] px-[1px] flex  justify-center items-center ">
              <span className="bg-black hover:bg-white hover:text-[#f01616] text-[#f01616] py-[11px] px-[58px] rounded-lg font-semibold  uppercase hover:shadow-lg hover:shadow-black tracking-widest ">
                pusrchase now
              </span>
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
