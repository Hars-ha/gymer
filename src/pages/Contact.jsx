import { Footer } from "../components/Footer";

export const ContactPage = () => {
  return (
    <div>
      <div className="relative font-poppins">
        <img src="pad.png" className="w-full h-[300px] object-cover" />
        <div className="absolute top-0 bottom-0 left-0 right-0 z-[2]   bg-black/80" />
      </div>
      <div>
        <form className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full">
          <h3 className="uppercase text-center text-[35px] font-bold mb-14">
            Get in touch with Us
          </h3>
          <input
            className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            placeholder="Full Name *"
            type="text"
          ></input>
          <input
            className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            placeholder="Email Address *"
            type="email"
          ></input>

          <textarea
            placeholder="Comment"
            className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
          ></textarea>
          <button className="bg-[#f01616]  sm:mt-8 w-[180px]  rounded-lg  py-[2px] px-[1px] flex  justify-center items-center self-center">
            <span className="bg-[#f01616] hover:bg-black hover:text-white text-white py-[13px] px-[28px] rounded-lg font-semibold    uppercase hover:shadow-lg hover:shadow-red-600  tracking-widest">
              Submit now
            </span>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
