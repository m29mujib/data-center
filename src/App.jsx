import "./App.css";
import About from "../src/components/About/About";
import Navbar from "../src/components/Navbar/Navbar";
import Iklan from "./components/Iklan/Iklan";
import Home from "./components/Home/Home";
import Komunik from "./components/Komunik/Komunik";
import Kolaborate from "./components/Kolaborate/Kolaborate";
import Search from "./components/Pencarian/Search";
import Footer from "./components/Footer/Footer";
import HorizontalParallax from "./components/BannerParallax/Paralax";
import IconCloud from "./components/Produk/IconCloud/IconCloud";

function App() {
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
      <Footer />
      <IconCloud />
    </>
  );
}

export default App;
