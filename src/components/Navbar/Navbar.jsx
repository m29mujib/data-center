import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logos from "../../assets/a.png";
import Images14 from "../../assets/close.png";
// Import your download icon
import brochurePdf from "../../../src/assets/BrochureIconPLN(20240718).pdf"; // pastikan path ini benar
import more from "../../assets/more.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [unduh, setUnduh] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [aboutDNSDropdown, setAboutDNSDropdown] = useState(false);
  const [aboutDNSDropdownVisible, setaboutDNSDropdownVisible] = useState(false);
  const [aboutIconMailDropdown, setAboutIconMailDropdown] = useState(false);
  const [iconCloudDropdown, setIconCloudDropdown] = useState(false);
  const [iconCloudDropdownVisible, setIconCloudDropdownVisible] =
    useState(false);
  const [aboutIconMailropdownVisible, setaboutIconMailDropdownVisible] =
    useState(false);
  const location = useLocation();
  const myRef = useRef(null);

  // const scrollToContact = (event) => {
  //   event.preventDefault();
  //   const contactElement = document.getElementById("contact");
  //   if (contactElement) {
  //     contactElement.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const scrollToLokasi = (event) => {
    event.preventDefault();
    const contactElement = document.getElementById("lokasi");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let timer;
    if (!iconCloudDropdown) {
      timer = setTimeout(() => setIconCloudDropdownVisible(false), 200);
    } else {
      setIconCloudDropdownVisible(true);
    }
    return () => clearTimeout(timer);
  }, [iconCloudDropdown]);

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
    location.pathname.includes("/sanbox") ||
    location.pathname.includes("/icon-rack");

  return (
    <div className="w-full h-[50px] bg-black bg-opacity-30 backdrop-blur-lg py-10 px-[8%] flex justify-between items-center fixed top-0 left-0 z-10">
      {dropdown && (
        <div className="w-[250px] h-screen bg-[#fff] absolute top-0 right-0 z-10 flex flex-col justify-between transition-all duration-700 ease-in-out transform">
          <ul className="flex flex-col py-20 px-3">
            <li className="flex flex-col ">
              <Link
                to="/"
                className={`p-5 font-medium ${
                  isActive("/") ? "text-blue-500" : "hover:text-blue-500"
                }`}
              >
                Home
              </Link>
              <div
                className="relative inline-block py-5 w-full"
                onMouseEnter={() => setAboutDropdown(true)}
                onMouseLeave={() => setAboutDropdown(false)}
              >
                <Link
                  to={"#"}
                  className={`w-full no-underline p-5 font-medium font-customFont ${
                    isLayananActive
                      ? "text-blue-500"
                      : "text-[#333] hover:text-blue-500"
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
                          style={{ top: "0", left: "100%" }}
                          onMouseEnter={() => setAboutDNSDropdown(true)}
                          onMouseLeave={() => setAboutDNSDropdown(false)}
                        >
                          <Link
                            to={"/ddos"}
                            className={`block text-sm px-4 py-2 ${
                              isActive("/ddos")
                                ? "bg-gray-200"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            DNS DDOS Protection
                          </Link>
                          <Link
                            to={"/dns"}
                            className={`block px-4 text-sm py-2 ${
                              isActive("/dns")
                                ? "bg-gray-200"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            DNS Advance (GSLB)
                          </Link>
                        </div>
                      )}
                    </div>

                    <div
                      className="relative inline-block py-3"
                      onMouseEnter={() => setIconCloudDropdown(true)}
                      onMouseLeave={() => setIconCloudDropdown(false)}
                    >
                      <Link
                        to={"#"}
                        className={`no-underline p-4 font-medium font-customFont ${
                          isLayananActive
                            ? "text-blue-500"
                            : "text-[#000000] hover:text-blue-500"
                        }`}
                      >
                        ICONCloud <span className="ml-1">&#9662;</span>
                      </Link>
                      {iconCloudDropdownVisible && (
                        <div
                          className="absolute bg-white text-black w-40 mt-2 rounded-md shadow-lg z-10"
                          style={{ top: "0", left: "100%" }}
                          onMouseEnter={() => setIconCloudDropdown(true)}
                          onMouseLeave={() => setIconCloudDropdown(false)}
                        >
                          <Link
                            to={"/icon-firewall"}
                            className={`block px-4 py-2 ${
                              isActive("/icon-firewall")
                                ? "bg-gray-200"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Firewall as a Service
                          </Link>
                          <Link
                            to={"/icon-cloud"}
                            className={`block px-4 py-2 ${
                              isActive("/icon-cloud/cloud")
                                ? "bg-gray-200"
                                : "hover:bg-gray-200"
                            }`}
                          >
                            Virtualisasi
                          </Link>
                        </div>
                      )}
                    </div>
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
                          style={{ top: "0", left: "100%" }}
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
                        isActive("/sanbox")
                          ? "bg-gray-200"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      ICONSandBox
                    </Link>
                    <Link
                      to={"https://smartmonitoringrack.plniconpln.id/home"}
                      className={`block px-4 py-2 ${
                        isActive("/sanbox")
                          ? "bg-gray-200"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      ICONRack
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/page-lokasi"
                className={`p-5 font-medium ${
                  isActive("/page-lokasi")
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                }`}
              >
                Lokasi
              </Link>
              <Link
                to="/about"
                className={`p-5 font-medium ${
                  isActive("/page-lokasi")
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                }`}
              >
                Tentang Kami
              </Link>
              <Link
                to="/page-contact"
                className={`p-5 font-medium ${
                  isActive("/page-contact")
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                }`}
              >
                Kontak
              </Link>
            </li>
          </ul>
          <div className="px-3 flex justify-center mb-5 w-full absolute bottom-10 left-0 transform translate-y-1/2 tranlate-x-1/2">
            <a
              href={brochurePdf}
              download="Brosur-DataCenter-IconPlus.pdf"
              className="md:ml-5 no-underline md:px-5 px-3 text-yellow-500 bg-transparent border-2 border-yellow-500 font-medium font-customFont md:py-3 py-1 rounded-md hover:bg-yellow-500 hover:text-white items-center"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Unduh Brosur
            </a>
          </div>
        </div>
      )}
      <Link to="/" className="flex justify-center items-center">
        <img src={logos} alt="" className="h-8 mr-4" />
      </Link>

      <div className="flex items-center justify-right">
        <ul className="hidden md:hidden lg:flex">
          <li className="relative inline-block">
            <Link
              to="/"
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
                to="#"
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
                    to="/collocation"
                    className={`block px-4 py-2 ${
                      isActive("/collocation")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    ICONColocation
                  </Link>
                  <div
                    className="relative inline-block py-2"
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
                        style={{ top: "0", left: "100%" }}
                        onMouseEnter={() => setAboutDNSDropdown(true)}
                        onMouseLeave={() => setAboutDNSDropdown(false)}
                      >
                        <Link
                          to="/ddos"
                          className={`block px-4 py-2 ${
                            isActive("/ddos")
                              ? "bg-gray-200"
                              : "hover:bg-gray-200"
                          }`}
                        >
                          DNS DDOS Protection
                        </Link>
                        <Link
                          to="/dns"
                          className={`block px-4 py-2 ${
                            isActive("/dns")
                              ? "bg-gray-200"
                              : "hover:bg-gray-200"
                          }`}
                        >
                          DNS Advance (GSLB)
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* new */}

                  <div
                    className="relative inline-block py-2"
                    onMouseEnter={() => setIconCloudDropdown(true)}
                    onMouseLeave={() => setIconCloudDropdown(false)}
                  >
                    <Link
                      to={"#"}
                      className={`no-underline p-4 font-medium font-customFont ${
                        isLayananActive
                          ? "text-blue-500"
                          : "text-[#000000] hover:text-blue-500"
                      }`}
                    >
                      ICONCloud <span className="ml-1">&#9662;</span>
                    </Link>
                    {iconCloudDropdownVisible && (
                      <div
                        className="absolute bg-white text-black w-40 mt-2 rounded-md shadow-lg z-10"
                        style={{ top: "0", left: "100%" }}
                        onMouseEnter={() => setIconCloudDropdown(true)}
                        onMouseLeave={() => setIconCloudDropdown(false)}
                      >
                        <Link
                          to={"/icon-firewall"}
                          className={`block px-4 py-2 ${
                            isActive("/icon-firewall")
                              ? "bg-gray-200"
                              : "hover:bg-gray-200"
                          }`}
                        >
                          Firewall as a Service
                        </Link>
                        <Link
                          to={"/icon-cloud"}
                          className={`block px-4 py-2 ${
                            isActive("/icon-cloud/cloud")
                              ? "bg-gray-200"
                              : "hover:bg-gray-200"
                          }`}
                        >
                          Virtualisasi
                        </Link>
                      </div>
                    )}
                  </div>

                  <div
                    className="relative inline-block py-2"
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
                        style={{ top: "0", left: "100%" }}
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
                          to="/icon-mail"
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
                    to="/icon-mon"
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
                    to="/icon-rack"
                    className={`block px-4 py-2 ${
                      isActive("/icon-rack")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    ICONRack
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/page-lokasi"
              // onClick={scrollToContact}
              className={`no-underline px-5 font-medium font-customFont ${
                isActive("/page-lokasi")
                  ? "text-blue-500"
                  : "text-[#fff] hover:text-blue-500"
              }`}
            >
              Lokasi
            </Link>
            <Link
              to="/about"
              // onClick={scrollToContact}
              className={`no-underline px-5 font-medium font-customFont ${
                isActive("/about")
                  ? "text-blue-500"
                  : "text-[#fff] hover:text-blue-500"
              }`}
            >
              Tentang Kami
            </Link>
            <Link
              to="/page-contact"
              // onClick={scrollToContact}
              className={`md:ml-5 mr-3 no-underline text-sm md:text-md px-10  text-white bg-blue-500 font-medium font-customFont py-4 rounded-md ${
                isActive("/page-contact")
                  ? "bg-blue-700 text-white"
                  : "hover:bg-blue-700 hover:text-white"
              }`}
            >
              Kontak
            </Link>
          </li>
        </ul>

        <a
          href={brochurePdf}
          download="Brosur-DataCenter-IconPlus.pdf"
          className="md:ml-5 mr-3 no-underline text-sm md:text-md px-3 text-yellow-500 bg-transparent border-2 border-yellow-500 font-medium font-customFont py-3 rounded-md hover:bg-yellow-500 hover:text-white items-center"
        >
          <FontAwesomeIcon icon={faDownload} className="mr-2" />
          Unduh Brosur
        </a>

        <div
          className="block pointer 2xl:hidden"
          onClick={() => setDropdown(!dropdown)}
        >
          <img
            src={dropdown ? Images14 : more}
            alt={dropdown ? "Close menu" : "Open menu"}
            className="w-[30px] h-[30px] sm:block md:block lg:block xl:hidden z-50 relative"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
