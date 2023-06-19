import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="mt-12 mb-24 relative flex  items-center  justify-center">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-[2]   bg-black/80" />
      <div className="absolute z-10 sm:left-[15%] left-[3%] sm:top-[23%] top-[19%] ">
        <div className="flex flex-col justify-start  items-start w-[750px]">
          <h1 className=" bg-[#f50a25] rounded-[2px] px-1 uppercase font-semibold font-montserrat text-white text-[30px] sm:mb-3 mb-1">
            who we are
          </h1>
          <h1 className="text-[38px] sm:w-[690px] w-[411px] text-white font-bold  ">
            Elevate Your Fitness Journey with Our Premier Gym Experience
          </h1>
          <span className="mt-4 sm:w-[620px] w-[300px] text-[rgb(128,128,128)] font-thin text-[14px]  ">
            Experience a fitness revolution at our gym. With top-notch
            equipment, inspiring trainers, and a vibrant community, we'll fuel
            your motivation and help you surpass your limits, unlock your best
            self today.
          </span>
        </div>
        <Link
          onClick={() => window(0, 0)}
          to="/contact"
          className="bg-white  sm:mt-12 w-[160px]  rounded-lg  py-[2px] px-[1px] sm:flex hidden justify-center items-center "
        >
          <span className="bg-white hover:bg-black hover:text-white text-black py-[12px] px-[30px] rounded-lg font-semibold    uppercase hover:shadow-lg hover:shadow-white tracking-widest">
            join now
          </span>
        </Link>
      </div>
      <div className="flex w-full justify-start">
        <img src={"pad.png"} className="  w-full  object-cover h-[700px] " />
      </div>
    </div>
  );
};
