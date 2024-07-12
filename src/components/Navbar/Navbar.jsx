import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logos from "../../assets/a.png";
import Images14 from "../../assets/close.png";
import downloadIcon from "../../assets/download.png"; // Import your download icon
import more from "../../assets/more.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [aboutDNSDropdown, setAboutDNSDropdown] = useState(false);
  const [aboutDNSDropdownVisible, setaboutDNSDropdownVisible] = useState(false);
  const [aboutIconMailDropdown, setAboutIconMailDropdown] = useState(false);
  const [aboutIconMailropdownVisible, setaboutIconMailDropdownVisible] = useState(false);
  const location = useLocation();

  const scrollToContact = (event) => {
    event.preventDefault();
    const contactElement = document.getElementById("contact", "lokasi");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let timer;
    if (!aboutDropdown) {
      timer = setTimeout(() => setAboutDropdownVisible(false), 200);
    } else {
      setAboutDropdownVisible(true);
    }
    return () => clearTimeout(timer);
  }, [aboutDropdown]);

  useEffect(() => {
    let timer;
    if (!aboutDNSDropdown) {
      timer = setTimeout(() => setaboutDNSDropdownVisible(false), 200);
    } else {
      setaboutDNSDropdownVisible(true);
    }
    return () => clearTimeout(timer);
  }, [aboutDNSDropdown]);

  useEffect(() => {
    let timer;
    if (!aboutIconMailDropdown) {
      timer = setTimeout(() => setaboutIconMailDropdownVisible(false), 200);
    } else {
      setaboutIconMailDropdownVisible(true);
    }
    return () => clearTimeout(timer);
  }, [aboutIconMailDropdown]);

  const isActive = (path) => location.pathname === path;
  const isLayananActive =
    location.pathname.includes("/collocation") ||
    location.pathname.includes("/ddos") ||
    location.pathname.includes("/dns") ||
    location.pathname.includes("/icon-cloud") ||
    location.pathname.includes("/icon-filter") ||
    location.pathname.includes("/icon-mail") ||
    location.pathname.includes("/icon-mon") ||
    location.pathname.includes("/sanbox");

  return (
    <div className="w-full h-[50px] bg-black bg-opacity-30 backdrop-blur-lg py-10 px-[8%] flex justify-between items-center fixed top-0 left-0 z-10">
      {dropdown && (
        <div className="w-[200px] h-screen bg-[#fff] absolute top-0 right-0 z-10 flex flex-col justify-center items-center transition-all duration-700 ease-in-out transform translate-x-0">
          <ul className="flex flex-col justify-center items-center">
            <li className="flex flex-col justify-center items-center">
              <Link
                to="/"
                className={`p-5 ${
                  isActive("/") ? "text-blue-500" : "hover:text-blue-500"
                }`}
              >
                Home
              </Link>
              <div
              className="relative inline-block"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <Link
                to={"#"}
                className={`no-underline px-5 font-medium font-customFont ${
                  isLayananActive
                    ? "text-blue-500"
                    : "text-[#fff] hover:text-blue-500"
                }`}
              >
                Layanan <span className="ml-1">&#9662;</span>
              </Link>
              {aboutDropdownVisible && (
                <div
                  className="absolute bg-white text-black w-40 mt-2 rounded-md shadow-lg z-10"
                  onMouseEnter={() => setAboutDropdown(true)}
                  onMouseLeave={() => setAboutDropdown(false)}
                >
                  <Link
                    to={"/collocation"}
                    className={`block px-4 py-2 ${
                      isActive("/collocation")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    ICONColocation
                  </Link>
                  <div
              className="relative inline-block"
              onMouseEnter={() => setAboutDNSDropdown(true)}
              onMouseLeave={() => setAboutDNSDropdown(false)}
            >
              <Link
                to={"#"}
                className={`no-underline px-4 font-medium font-customFont ${
                  isLayananActive
                    ? "text-blue-500"
                    : "text-[#000000] hover:text-blue-500"
                }`}
              >
                ICONDNS <span className="ml-1">&#9662;</span>
              </Link>
              {aboutDNSDropdownVisible && (
                <div
                  className="absolute bg-white text-black w-40 mt-2 rounded-md shadow-lg z-10"
                  onMouseEnter={() => setAboutDNSDropdown(true)}
                  onMouseLeave={() => setAboutDNSDropdown(false)}
                >
              
                  <Link
                    to={"/ddos"}
                    className={`block px-4 py-2 ${
                      isActive("/ddos") ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                  >
                   DNS DDOS Protection
                  </Link>
                  <Link
                    to={"/dns"}
                    className={`block px-4 py-2 ${
                      isActive("/dns") ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                  >
                    DNS Advance (GSLB)
                  </Link>
                </div>
              )}
            </div>
                  <Link
                    to={"/icon-cloud"}
                    className={`block px-4 py-2 ${
                      isActive("/icon-cloud")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    ICONCloud
                  </Link>
                  <div
              className="relative inline-block"
              onMouseEnter={() => setAboutIconMailDropdown(true)}
              onMouseLeave={() => setAboutIconMailDropdown(false)}
            >
              <Link
                to={"#"}
                className={`no-underline px-4 font-medium font-customFont ${
                  isLayananActive
                    ? "text-blue-500"
                    : "text-[#000000] hover:text-blue-500"
                }`}
              >
                ICONMail <span className="ml-1">&#9662;</span>
              </Link>
              {aboutIconMailropdownVisible && (
                <div
                  className="absolute bg-white text-black w-40 mt-2 rounded-md shadow-lg z-10"
                  onMouseEnter={() => setAboutIconMailDropdown(true)}
                  onMouseLeave={() => setAboutIconMailDropdown(false)}
                >
              
              <Link
                    to={"/icon-filter"}
                    className={`block px-4 py-2 ${
                      isActive("/icon-filter")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                   Filtering
                  </Link>
                  <Link
                    to={"/icon-mail"}
                    className={`block px-4 py-2 ${
                      isActive("/icon-mail")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                 Blasting & Marketing
                  </Link>
                </div>
              )}
            </div>
               
                  <Link
                    to={"/icon-mon"}
                    className={`block px-4 py-2 ${
                      isActive("/icon-mon")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    ICONMonitoring
                  </Link>
                  <Link
                    to={"/sanbox"}
                    className={`block px-4 py-2 ${
                      isActive("/sanbox") ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                  >
                    ICONSandBox
                  </Link>
                  <Link
                    to={"https://smartmonitoringrack.plniconpln.id/home"}
                    className={`block px-4 py-2 ${
                      isActive("/sanbox") ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                  >
                    ICONRack
                  </Link>
                </div>
              )}
            </div>
              <Link
                to="#"
                className={`p-5 ${
                  isActive("/lokasi") ? "text-blue-500" : "hover:text-blue-500"
                }`}
              >
                Lokasi
              </Link>
              <Link
                to="#"
                className={`p-5 ${
                  isActive("/bantuan") ? "text-blue-500" : "hover:text-blue-500"
                }`}
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>
      )}
      <Link to="/" className="flex justify-center items-center">
        <img src={logos} alt="" className="h-8 mr-4" />
        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Data Center
        </span> */}
      </Link>

      <div className="flex items-center justify-right">
        <ul className="hidden md:flex">
          <li className="relative inline-block">
            <Link
              to={"/"}
              className={`no-underline px-5 font-medium font-customFont ${
                isActive("/")
                  ? "text-blue-500"
                  : "text-[#fff] hover:text-blue-500"
              }`}
            >
              Beranda
            </Link>
            <div
              className="relative inline-block"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <Link
                to={"#"}
                className={`no-underline px-5 font-medium font-customFont ${
                  isLayananActive
                    ? "text-blue-500"
                    : "text-[#fff] hover:text-blue-500"
                }`}
              >
                Layanan <span className="ml-1">&#9662;</span>
              </Link>
              {aboutDropdownVisible && (
                <div
                  className="absolute bg-white text-black w-40 mt-2 rounded-md shadow-lg z-10"
                  onMouseEnter={() => setAboutDropdown(true)}
                  onMouseLeave={() => setAboutDropdown(false)}
                >
                  <Link
                    to={"/collocation"}
                    className={`block px-4 py-2 ${
                      isActive("/collocation")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    ICONColocation
                  </Link>
                  <div
              className="relative inline-block"
              onMouseEnter={() => setAboutDNSDropdown(true)}
              onMouseLeave={() => setAboutDNSDropdown(false)}
            >
              <Link
                to={"#"}
                className={`no-underline px-4 font-medium font-customFont ${
                  isLayananActive
                    ? "text-blue-500"
                    : "text-[#000000] hover:text-blue-500"
                }`}
              >
                ICONDNS <span className="ml-1">&#9662;</span>
              </Link>
              {aboutDNSDropdownVisible && (
                <div
                  className="absolute bg-white text-black w-40 mt-2 rounded-md shadow-lg z-10"
                  onMouseEnter={() => setAboutDNSDropdown(true)}
                  onMouseLeave={() => setAboutDNSDropdown(false)}
                >
              
                  <Link
                    to={"/ddos"}
                    className={`block px-4 py-2 ${
                      isActive("/ddos") ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                  >
                   DNS DDOS Protection
                  </Link>
                  <Link
                    to={"/dns"}
                    className={`block px-4 py-2 ${
                      isActive("/dns") ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                  >
                    DNS Advance (GSLB)
                  </Link>
                </div>
              )}
            </div>
                  <Link
                    to={"/icon-cloud"}
                    className={`block px-4 py-2 ${
                      isActive("/icon-cloud")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    ICONCloud
                  </Link>
                  <div
              className="relative inline-block"
              onMouseEnter={() => setAboutIconMailDropdown(true)}
              onMouseLeave={() => setAboutIconMailDropdown(false)}
            >
              <Link
                to={"#"}
                className={`no-underline px-4 font-medium font-customFont ${
                  isLayananActive
                    ? "text-blue-500"
                    : "text-[#000000] hover:text-blue-500"
                }`}
              >
                ICONMail <span className="ml-1">&#9662;</span>
              </Link>
              {aboutIconMailropdownVisible && (
                <div
                  className="absolute bg-white text-black w-40 mt-2 rounded-md shadow-lg z-10"
                  onMouseEnter={() => setAboutIconMailDropdown(true)}
                  onMouseLeave={() => setAboutIconMailDropdown(false)}
                >
              
              <Link
                    to={"/icon-filter"}
                    className={`block px-4 py-2 ${
                      isActive("/icon-filter")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                   Filtering
                  </Link>
                  <Link
                    to={"/icon-mail"}
                    className={`block px-4 py-2 ${
                      isActive("/icon-mail")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                 Blasting & Marketing
                  </Link>
                </div>
              )}
            </div>
               
                  <Link
                    to={"/icon-mon"}
                    className={`block px-4 py-2 ${
                      isActive("/icon-mon")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    ICONMonitoring
                  </Link>
                  <Link
                    to={"/sanbox"}
                    className={`block px-4 py-2 ${
                      isActive("/sanbox") ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                  >
                    ICONSandBox
                  </Link>
                  <Link
                    to={"https://smartmonitoringrack.plniconpln.id/home"}
                    className={`block px-4 py-2 ${
                      isActive("/sanbox") ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                  >
                    ICONRack
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="#lokasi"
              onClick={scrollToContact}
              className={`no-underline px-5 font-medium font-customFont ${
                isActive("#lokasi")
                  ? "text-blue-500"
                  : "text-[#fff] hover:text-blue-500"
              }`}
            >
              Lokasi
            </Link>
            <Link
              to="#"
              className={`no-underline px-5 font-medium font-customFont ${
                isActive("#bantuan")
                  ? "text-blue-500"
                  : "text-[#fff] hover:text-blue-500"
              }`}
            >
              Tentang Kami
            </Link>
            <a
              href="#contact"
              onClick={scrollToContact}
              className={`no-underline px-5 text-white bg-blue-500 font-medium font-customFont py-3 rounded-md ${
                isActive("#contact")
                  ? "bg-blue-700 text-white"
                  : "hover:bg-blue-700 hover:text-white"
              }`}
            >
              Kontak
            </a>
            {/* Download Button */}
            <a
              href="#download"
              className="no-underline px-5 text-white bg-[#00bcd4] font-medium font-customFont py-3 ml-2 rounded-md hover:bg-[#208c9a]"
            >
              <img
                src={downloadIcon}
                alt="Download"
                className="w-3 h-3 inline-block mr-1"
              />
              Unduh Brosur
            </a>
          </li>
        </ul>
        <div
          className="md:hidden pointer"
          onClick={() => setDropdown(!dropdown)}
        >
          <img
            src={dropdown ? Images14 : more}
            alt={dropdown ? "Close menu" : "Open menu"}
            className="w-[30px] h-[30px] md:hidden z-50 relative"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
