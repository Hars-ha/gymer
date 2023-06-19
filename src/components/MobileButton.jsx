import { useEffect, useState } from "react";
import { CircularText } from "./CircularText";
import { Link } from "react-router-dom";

export const MobileButton = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  });
  return (
    <div
      className={`fixed flex  background  h-[130px] backdrop-blur-sm  w-full items-center justify-center z-20 sm:hidden ${
        scroll ? "bottom-0" : "-bottom-full"
      } ease duration-300 `}
    >
      <div className="flex  relative   ">
        <img
          src="circle.svg"
          className={" animate-spin-slow w-[290px] h-[300px]"}
        />
        <Link
          onClick={() => window(0, 0)}
          to="/contact"
          className={`absolute rounded-full  w-[70px] h-[70px] shadow-md shadow-black top-[38%] left-[38%]  duration-300 text-center cursor-pointer  bg-black text-white`}
        >
          <p
            className={`mt-[27px] text-[11px]  font-semibold font-montserrat `}
          >
            Book Now
          </p>
        </Link>
      </div>
    </div>
  );
};
