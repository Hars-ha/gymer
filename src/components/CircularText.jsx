import { Link } from "react-router-dom";

export const CircularText = ({ color, bg, hover }) => {
  return (
    <div className=" -mt-14 mr-14 items-center justify-center  w-[350px] h-auto overflow-hidden ">
      <div className="relative items-center justify-center ">
        <img src="circle.svg" className={" animate-spin-slow "} />
        <Link
          onClick={() => window(0, 0)}
          to="/contact"
          className={`absolute  left-[38%] top-[38%]  ${bg} text-center items-center justify-around rounded-full  w-[83px] h-[83px] shadow-md shadow-black ${hover} ${color} duration-300 cursor-pointer`}
        >
          <p
            className={`mt-[32px] text-[13px]   font-semibold font-montserrat `}
          >
            Book Now
          </p>
        </Link>
      </div>
    </div>
  );
};
