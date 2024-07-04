import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import IconCloud from "./components/Produk/IconCloud/IconCloud"
import About from "./components/About/About";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/icon-cloud" element={<IconCloud />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
