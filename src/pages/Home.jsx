import { Navbar } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Feature } from "../components/features/Features";
import { About } from "../components/About";
import { Formats } from "../components/classesh/formats";
import { Cta } from "../components/CtaBanner";
import { Pricing } from "../components/price/pricing";
import { Footer } from "../components/Footer";

export const Homepage = () => {
  return (
    <div className="font-poppins w-full overflow-hidden flex flex-col relative ">
      <Hero />
      <Feature />
      <About />
      <Formats />
      <Cta />
      <Pricing />
      <Footer />
    </div>
  );
};
