import { Homepage } from "./pages/Home";
import { Navbar } from "./components/Nav";
import { MobileButton } from "./components/MobileButton";

import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ClassesPage } from "./pages/Classes";

import { GalleryPage } from "./pages/gallery/Gallery";
import { PricingPage } from "./pages/PricingPage";
import { ContactPage } from "./pages/Contact";
import { SchedulePage } from "./pages/schedule/Schedule";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
      <MobileButton />
    </>
  );
}

export default App;
