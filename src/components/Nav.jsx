import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { BsPlus, BsWhatsapp } from "react-icons/bs";

import { Link } from "react-router-dom";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav
      className={`w-full fixed top-0 flex flex-row ${
        sticky ? "shadow-xl bg-black" : "bg-transparent"
      } py-2 lg:px-12  items-center justify-between z-50 ease duration-100 `}
    >
      <Link onClick={() => window(0, 0)} className=" text-4xl pl-3" to="/">
        <img
          src="logo.png"
          color=""
          className="lg:w-[85px] lg:h-[75px] w-[70px]  object-contain mix-blend-hard-light "
        />
      </Link>
      <div className=" text-white lg:flex hidden ">
        <Link
          onClick={() => window(0, 0)}
          className="mr-6 text-[17px] hover:text-[#f50a25] duration-300"
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => window(0, 0)}
          className="mr-6 text-[17px] hover:text-[#f50a25] duration-300"
          to="/about"
        >
          About
        </Link>
        <Link
          onClick={() => window(0, 0)}
          className="mr-6 text-[17px] hover:text-[#f50a25] duration-300"
          to="/classes"
        >
          Classes
        </Link>
        <Link
          onClick={() => window(0, 0)}
          className="mr-6 text-[17px] hover:text-[#f50a25] duration-300"
          to="/schedule"
        >
          Schedule
        </Link>
        <Link
          onClick={() => window(0, 0)}
          className="mr-6 text-[17px] hover:text-[#f50a25]  duration-300"
          to="/gallery"
        >
          Gallery
        </Link>
        <Link
          onClick={() => window(0, 0)}
          className="mr-6 text-[17px] hover:text-[#f50a25] duration-300"
          to="/pricing"
        >
          Pricing
        </Link>
        <Link
          onClick={() => window(0, 0)}
          className="text-[17px] hover:text-[#f50a25] duration-300"
          to="/contact"
        >
          Contact
        </Link>
      </div>

      <div className="text-white  flex flex-row items-center">
        <FiUser
          size="30px"
          className="text-white  hover:text-[#f50a25] duration-300 mr-6"
        />
        <BsWhatsapp
          size="30px"
          className="text-white sm:flex hidden hover:text-[#f50a25] duration-300 mr-4 "
        />
      </div>
      <div className="lg:hidden flex pr-3 text-white z-50">
        <img
          src={toggle ? "close.svg" : "menu.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "bottom-0" : "-bottom-full"
        } flex flex-col fixed w-full h-full bg-black  justify-center items-center text-center transition-all ease-in-out duration-300 text-white lg:hidden z-10 `}
      >
        <div onClick={() => setToggle(!toggle)} className="mb-2">
          <Link
            onClick={() => window(0, 0)}
            className=" text-[25px] hover:text-[#f50a25] duration-300"
            to="/"
          >
            Home
          </Link>
        </div>
        <div onClick={() => setToggle(!toggle)} className="mb-2">
          <Link
            onClick={() => window(0, 0)}
            className=" text-[25px] hover:text-[#f50a25] duration-300"
            to="/about"
          >
            About
          </Link>
        </div>
        <div onClick={() => setToggle(!toggle)} className="mb-2">
          <Link
            onClick={() => window(0, 0)}
            className=" text-[25px] hover:text-[#f50a25] duration-300"
            to="/classes"
          >
            Classes
          </Link>
        </div>
        <div onClick={() => setToggle(!toggle)} className="mb-2">
          <Link
            onClick={() => window(0, 0)}
            className=" text-[25px] hover:text-[#f50a25] duration-300"
            to="/schedule"
          >
            Schedule
          </Link>
        </div>
        <div onClick={() => setToggle(!toggle)} className="mb-2">
          <Link
            onClick={() => window(0, 0)}
            className=" text-[25px] hover:text-[#f50a25]  duration-300"
            to="/gallery"
          >
            Gallery
          </Link>
        </div>
        <div onClick={() => setToggle(!toggle)} className="mb-2">
          <Link
            onClick={() => window(0, 0)}
            className=" text-[25px] hover:text-[#f50a25] duration-300"
            to="/pricing"
          >
            Pricing
          </Link>
        </div>
        <div onClick={() => setToggle(!toggle)} className="mb-2">
          <Link
            onClick={() => window(0, 0)}
            className="text-[25px] hover:text-[#f50a25] duration-300"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
