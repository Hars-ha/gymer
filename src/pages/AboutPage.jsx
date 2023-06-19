import { Footer } from "../components/Footer";

export const AboutPage = () => {
  return (
    <div className=" items-center justify-center ">
      <div className="relative items-center justify-center">
        <img src="ground.png" className="w-full h-[300px] object-cover" />
        <div className="absolute top-0 bottom-0 left-0 right-0 z-[2]   bg-black/80" />
      </div>
      <div className="flex items-center justify-center">
        <h1 className=" mt-16 sm:w-[450px] bg-[#f50a25]  text-center rounded-[2px] px-1 uppercase font-semibold font-montserrat text-white text-[30px] ">
          who we are
        </h1>
      </div>
      <div className="mt-12 mb-24 relative flex items-center  justify-center">
        <div className="absolute z-10 sm:left-[20%] left-[3%] sm:top-[23%] top-[19%] ">
          <div className="flex flex-col ">
            <h1 className="text-[45px] sm:w-[690px]  text-white font-bold  ">
              Elevate Your Fitness Journey with Our Premier Gym Experience
            </h1>
            <span className="mt-4 sm:w-[620px] w-[300px] text-[rgb(128,128,128)] font-thin text-[18px]  ">
              Experience a fitness revolution at our gym. With top-notch
              equipment, inspiring trainers, and a vibrant community, we'll fuel
              your motivation and help you surpass your limits, unlock your best
              self today.
            </span>
          </div>
        </div>
        <div className="flex w-full justify-start">
          <img src={"yoga.png"} className="  w-full  object-cover h-[600px] " />
        </div>
      </div>
      <Footer />
    </div>
  );
};
