import About from "../src/components/About/About";
import Navbar from "../src/components/Navbar/Navbar";
import Iklan from "./components/Iklan/Iklan";
import Home from "./components/Home/Home";
import Komunik from "./components/Komunik/Komunik";
import Kolaborate from "./components/Kolaborate/Kolaborate";
import Search from "./components/Pencarian/Search";
import Footer from "./components/Footer/Footer";
import HorizontalParallax from "./components/BannerParallax/Paralax";
import Contact from "./components/Contact/Contact";

function LandingPage() {
  return (
    <>
      <HorizontalParallax />
      {/* <About /> */}
      <Navbar />
      <Iklan />
      <Home />
      <Komunik />
      <Kolaborate />
      <Search />
      <Contact />
      <Footer />
    </>
  );
}

export default LandingPage;
