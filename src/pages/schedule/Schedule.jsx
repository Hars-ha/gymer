import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"




export const SchedulePage = () => {
    return(
        <section className=" justify-center items-center overflow-hidden">
            <div className="relative">
                <img src="knee.png" className="w-full h-[300px] object-cover" />
                <div className="absolute top-0 bottom-0 left-0 right-0 z-[2]   bg-black/80"/>
            </div>
            <div className="flex mt-16 items-center justify-center text-center">
                <h1 className="uppercase text-2xl font-semibold font-montserrat mb-2 text-[#f01616]" >
                    Master Your Fitness Journey with Our Well-Structured Gym Schedule
                </h1>
            </div>
            <div className="justify-center container mt-16 mb-24 px-4">
            <div className="mt-[5rem]">
        <div className="flex flex-col gap-3">
          <ul className="flex justify-between w-full min800:flex-col min800:text-center">
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <div className="flex flex-row items-center ">
                <p className="text-[20px] text-black font-bold mt-3 mr-2 sm:mr-4">Fitness</p>
                <img src="bodybuilding.png" className="w-[40px]" />
              </div>
            </li>
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                9:00am - 10:00am
              </p>
            </li>
            
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full  min800:justify-center items-center sm:flex hidden justify-end">
            <Link className="bg-black  sm:mt-12 w-[160px]  rounded-lg  py-[2px] px-[1px]  justify-center items-center ">
                <span className="bg-white hover:bg-black hover:text-white text-black py-[12px] px-[30px] rounded-lg font-semibold    uppercase hover:shadow-lg hover:shadow-white tracking-widest">
                    join now 
                </span>      
            </Link>
            </li>
          </ul>

          <ul className="flex justify-between w-full min800:flex-col min800:text-center">
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <div className="flex flex-row items-center ">
                <p className="text-[20px] text-black font-bold mt-3 mr-2 sm:mr-4">Boxing</p>
                <img src="boxer.png" className="w-[35px]" />
              </div>
            </li>
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                10:00pm - 11:00pm
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full min800:justify-center sm:flex hidden items-center  justify-end">
            <Link className="bg-black  sm:mt-12 w-[160px]  rounded-lg  py-[2px] px-[1px]  justify-center items-center ">
                <span className="bg-white hover:bg-black hover:text-white text-black py-[12px] px-[30px] rounded-lg font-semibold    uppercase hover:shadow-lg hover:shadow-white tracking-widest">
                    join now 
                </span>      
            </Link>
            </li>
          </ul>

          <ul className="flex justify-between w-full min800:flex-col min800:text-center">

            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <div className="flex flex-row items-center ">
                <p className="text-[20px] text-black font-bold mt-3 mr-2 
                sm:mr-4">Jujitsu</p>
                <img src="lifting.png" className="w-[45px]" />
              </div>
            </li>
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                4:00pm - 5:00pm
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center  justify-end sm:flex hidden min800:justify-center">
            <Link className="bg-black  sm:mt-12 w-[160px]  rounded-lg  py-[2px] px-[1px]  justify-center items-center ">
                <span className="bg-white hover:bg-black hover:text-white text-black py-[12px] px-[30px] rounded-lg font-semibold    uppercase hover:shadow-lg hover:shadow-white tracking-widest">
                    join now 
                </span>      
            </Link>
            </li>
          </ul>

          <ul className="flex justify-between w-full min800:flex-col min800:text-center">

            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
              <p className="text-[14px] font-medium text-[#a0a0a0]">
                Class Name
              </p>
              <div className="flex flex-row items-center ">
                <p className="text-[20px] text-black font-bold mt-3 mr-2 sm:mr-4">Muay Thai</p>
                <img src="martial-arts.png" className="w-[53px]" />
              </div>
            </li>
            <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
              <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
              <p className="text-[18px] text-black font-bold mt-3">
                6:00pm - 7:00pm
              </p>
            </li>
            <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full items-center sm:flex hidden justify-end min800:justify-center">
            <Link className="bg-black  sm:mt-12 w-[160px]  rounded-lg  py-[2px] px-[1px]  justify-center items-center ">
                <span className="bg-white hover:bg-black hover:text-white text-black py-[12px] px-[30px] rounded-lg font-semibold    uppercase hover:shadow-lg hover:shadow-white tracking-widest">
                    join now 
                </span>      
            </Link>
            </li>
          </ul>
        </div>
      </div>
            </div>
            <Footer />
        </section>
    )
}