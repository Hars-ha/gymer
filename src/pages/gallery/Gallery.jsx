import { Footer } from "../../components/Footer"
import { GalleryImg } from "./Galleryfiles"


export const GalleryPage = () => {
    return(
        <div className="items-center justify-center">
           <div className="relative">
                <img src="spar.png" className="w-full h-[300px] object-cover" />
                <div className="absolute top-0 bottom-0 left-0 right-0 z-[2]   bg-black/80"/>
            </div>
            <div className="flex flex-col mt-20 items-center justify-center text-center">
                <h1 className="uppercase text-4xl font-semibold font-montserrat mb-2 text-[#f01616]">our gallery</h1>
                <span className=" uppercase text-4xl font-semibold font-montserrat ">Step into Fitness Explore Our Gym Gallery</span>
                <span className="mt-1 text-[16px] text-[rgb(128,128,128)] font-poppins sm:w-[850px] text-center">Explore our captivating gym gallery, featuring diverse individuals, dynamic equipment, and inspiring workouts, designed to ignite your motivation and help you achieve your fitness goals.</span>
            </div>
            <div className="mt-16 mb-16 flex flex-row flex-wrap gap-10 items-center justify-center">
                {GalleryImg.map((item , id) => (
                    <div key={id} className="">
                        <img src={item.img} className="w-[400px] " />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}