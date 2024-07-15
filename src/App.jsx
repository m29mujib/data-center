import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./components/About/About";
import IconCloud from "./components/Produk/IconCloud/IconCloud";
import DNS from "./components/Produk/DNS/DNS";
import DDOS from "./components/Produk/DDOS/DDOS";
import Sanbox from "./components/Produk/SanBox/SanbOX";
import Collocation from "./components/Produk/Collocation/Collocation";
import IconFilter from "./components/Produk/IconFilter/IconFilter";
import IconMon from "./components/Produk/IconMon/IconMon";
import IconMail from "./components/Produk/IconMail/IconMail";
import Contact from "./components/Contact/Contact";
import IconRack from "./components/Produk/IconRack/Iconrack"
import ExternalRedirect from "./components/ExternalRedirect/ExternalRedirect";
import PageLokasi from "./components/lokasi/pageLokasi";
import PageContact from "./components/Contact/PageContact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/page-lokasi" element={<PageLokasi />} />
          <Route path="/page-contact" element={<PageContact />} />
          <Route path="/icon-cloud" element={<IconCloud />} />
          <Route path="/icon-mail" element={<IconMail />} />
          <Route path="/dns" element={<DNS />} />
          <Route path="/ddos" element={<DDOS />} />
          <Route path="/sanbox" element={<Sanbox />} />
          <Route path="/collocation" element={<Collocation />} />
          <Route path="/icon-filter" element={<IconFilter />} />
          <Route path="/icon-mon" element={<IconMon />} />
          <Route path="/icon-rack" element={<IconRack />} />
          {/* <Route path="/icon-rack" element={<ExternalRedirect url="https://smartmonitoringrack.plniconpln.id/home" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
