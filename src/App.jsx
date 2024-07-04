import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import About from "./components/About/About";
import IconCloud from "./components/Produk/IconCloud/IconCloud";
import DNS from "./components/Produk/DNS/DNS";
import DDOS from "./components/Produk/DDOS/DDOS";
import Sanbox from "./components/Produk/SanBox/SanbOX";
import Collocation from "./components/Produk/Collocation/Collocation";
import IconFilter from "./components/Produk/IconFilter/IconFilter";
import IconMon from "./components/Produk/IconFilter/IconFilter";
import IconMail from "./components/Produk/IconMail/IconMail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/icon-cloud" element={<IconCloud />} />
          <Route path="/icon-mail" element={<IconMail />} />
          <Route path="/DNS" element={<DNS />} />
          <Route path="/DDOS" element={<DDOS />} />
          <Route path="/sanbox" element={<Sanbox />} />
          <Route path="/collocation" element={<Collocation />} />
          <Route path="/icon-filter" element={<IconFilter />} />
          <Route path="/icon-mon" element={<IconMon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
