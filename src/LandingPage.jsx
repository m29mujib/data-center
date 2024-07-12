import About from "../src/components/About/About";
import Navbar from "../src/components/Navbar/Navbar";
import Iklan from "./components/Iklan/Iklan";
import Home from "./components/Home/Home";
import Komunik from "./components/Komunik/Komunik";
import Kolaborate from "../src/components/Kolaborate/Kolaborate";
import Footer from "../src/components/Footer/Footer";
import Lokasi from "./components/lokasi/Lokasi";
import HorizontalParallax from "./components/BannerParallax/Paralax";
import Contact from "./components/Contact/Contact";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HorizontalParallax />
      <Iklan />
      <About />
      <Home />
      <Komunik />
      <Kolaborate />
      {/* <Search /> */}
      <Contact />
      <Lokasi />
      {/* <Search /> */}
      <Footer />
    </>
  );
}

export default LandingPage;
