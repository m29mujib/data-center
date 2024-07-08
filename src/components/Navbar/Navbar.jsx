import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logos from "../../assets/a.png";
import images14 from "../../assets/close.png";
import more from "../../assets/more.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let timer;
    if (!aboutDropdown) {
      timer = setTimeout(() => setAboutDropdownVisible(false), 200);
    } else {
      setAboutDropdownVisible(true);
    }
    return () => clearTimeout(timer);
  }, [aboutDropdown]);

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
              <Link
                to="#"
                className={`p-5 ${
                  isLayananActive ? "text-blue-500" : "hover:text-blue-500"
                }`}
              >
                Layanan
              </Link>
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
                Bantuan
              </Link>
            </li>
          </ul>
        </div>
      )}
      <Link to="/" className="flex justify-center items-center">
        <img src={logos} alt="" className="h-8 mr-4" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Data Center
        </span>
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
                    Colocation
                  </Link>
                  <Link
                    to={"/ddos"}
                    className={`block px-4 py-2 ${
                      isActive("/ddos") ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                  >
                    DDOS
                  </Link>
                  <Link
                    to={"/dns"}
                    className={`block px-4 py-2 ${
                      isActive("/dns") ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                  >
                    DNS
                  </Link>
                  <Link
                    to={"/icon-cloud"}
                    className={`block px-4 py-2 ${
                      isActive("/icon-cloud")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    IconCloud
                  </Link>
                  <Link
                    to={"/icon-filter"}
                    className={`block px-4 py-2 ${
                      isActive("/icon-filter")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    IconFilter
                  </Link>
                  <Link
                    to={"/icon-mail"}
                    className={`block px-4 py-2 ${
                      isActive("/icon-mail")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    IconMail
                  </Link>
                  <Link
                    to={"/icon-mon"}
                    className={`block px-4 py-2 ${
                      isActive("/icon-mon")
                        ? "bg-gray-200"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    IconMonitoring
                  </Link>
                  <Link
                    to={"/sanbox"}
                    className={`block px-4 py-2 ${
                      isActive("/sanbox") ? "bg-gray-200" : "hover:bg-gray-200"
                    }`}
                  >
                    SandBox
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="#"
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
              Bantuan
            </Link>
            <Link
              to="/home"
              className={`no-underline px-5 text-white bg-blue-500 font-medium font-customFont py-3 rounded-md ${
                isActive("/home")
                  ? "bg-blue-700 text-white"
                  : "hover:bg-blue-700 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div
          className="md:hidden pointer"
          onClick={() => setDropdown(!dropdown)}
        >
          <img
            src={dropdown ? images14 : more}
            alt={dropdown ? "Close menu" : "Open menu"}
            className="w-[30px] h-[30px] md:hidden text-[#ffffff]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
