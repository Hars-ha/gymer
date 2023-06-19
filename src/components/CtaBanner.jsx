import { Link } from "react-router-dom";

export const Cta = () => {
  return (
    <div className="relative mb-20">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-[2]   bg-black/60" />
      <img
        src="wrapsfullleft.png"
        className="w-full sm:h-[300px] object-cover h-[190px]"
      />
      <div className="absolute font-montserrat top-[25%] sm:left-[26%] z-10 w-[850px] left-[4%] ">
        <h1 className="text-white uppercase sm:text-5xl text-[21px] font-extrabold">
          Let Our Gym Empower and{" "}
        </h1>
        <h1 className="text-white uppercase sm:text-5xl text-[22px] font-extrabold sm:mt-5 mt-3 sm:ml-8 ml-3">
          Support Your Journey
        </h1>
        <Link
          onClick={() => window(0, 0)}
          to="/contact"
          className="absolute bg-[#f01616]  sm:mt-6 w-[450px]  rounded-lg  py-[2px] px-[1px] sm:flex hidden justify-center items-center right-[31%] "
        >
          <span className="bg-[#f01616] text-[20px] hover:bg-black hover:text-white text-white py-[12px] px-[164px] rounded-lg font-semibold  font-poppins  uppercase hover:shadow-lg hover:shadow-red-600  tracking-widest">
            join now
          </span>
        </Link>
      </div>
    </div>
  );
};
