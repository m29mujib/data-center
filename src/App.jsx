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
import Collocation from "./components/Produk/Collocation/Collocation";
import DDOS from "./components/Produk/DDOS/DDOS";
import DNS from "./components/Produk/DNS/DNS";
import IconFilter from "./components/Produk/IconFilter/IconFilter";
import IconMon from "./components/Produk/IconMon/IconMon";
import IconMail from "./components/Produk/IconMail/IconMail";
import SanBox from "./components/Produk/SanBox/SanbOX";


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
      <Collocation />
      <DDOS />
      <DNS />
      <IconFilter />
      <IconMail />
      <IconMon />
      <SanBox />
    </>
  );
}

export default App;
