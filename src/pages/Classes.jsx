import { Footer } from "../components/Footer";

export const ClassesPage = () => {
  return (
    <div className="items-center justify-center">
      <div className="relative items-center justify-center">
        <img src="wraps.png" className="w-full h-[300px] object-cover" />
        <div className="absolute top-0 bottom-0 left-0 right-0 z-[2]   bg-black/80" />
      </div>
      <div className="flex flex-col mt-20 items-center justify-center text-center">
        <h1 className="uppercase sm:text-5xl font-semibold font-montserrat mb-2 text-[#f01616]">
          TAILORED LEARNING ON YOUR TERMS
        </h1>
      </div>
      <div className="gap-10 flex flex-row flex-wrap items-center justify-center w-full h-full mb-16 mt-20 sm:mx-4">
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
      <Footer />
    </div>
  );
};
