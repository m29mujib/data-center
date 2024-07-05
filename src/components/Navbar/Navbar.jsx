import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logos from "../../assets/a.png";
import images14 from "../../assets/close.png";
import more from "../../assets/more.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (!aboutDropdown) {
      timer = setTimeout(() => setAboutDropdownVisible(false), 200);
    } else {
      setAboutDropdownVisible(true);
    }
    return () => clearTimeout(timer);
  }, [aboutDropdown]);

  return (
    <div className="w-full h-[50px] bg-black bg-opacity-30 backdrop-blur-lg py-10 px-[8%] flex justify-between items-center fixed top-0 left-0 z-10">
      {dropdown && (
        <div className="w-[200px] h-screen bg-[#fff] absolute top-0 right-0 z-10 flex flex-col justify-center items-center transition-all duration-700 ease-in-out transform translate-x-0">
          <ul className="flex flex-col justify-center items-center">
            <li className="flex flex-col justify-center items-center">
              <a href="" className="p-5 hover:underline hover:text-blue-500">
                Home
              </a>
              <a href="" className="p-5 hover:underline hover:text-blue-500">
                Layanan
              </a>
              <a href="" className="p-5 hover:underline hover:text-blue-500">
                Lokasi
              </a>
              <a href="" className="p-5 hover:underline hover:text-blue-500">
                Bantuan
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="flex justify-center items-center">
        <img src={logos} alt="Logo" className="h-8 mr-4" />
      </div>

      <div className="flex items-center justify-right">
        <ul className="hidden md:flex">
          <li className="relative inline-block">
            <Link
              to={"/"}
              className="decoration-0 px-5 font-medium font-customFont text-[#fff] hover:underline hover:text-blue-500"
            >
              Home
            </Link>
            <div
              className="relative inline-block"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <Link
                to={"/home"}
                className="decoration-0 px-5 font-medium font-customFont text-[#fff] hover:underline hover:text-blue-500"
              >
                Layanan
              </Link>
              {aboutDropdownVisible && (
                <div
                  className="absolute bg-white text-black w-40 mt-2 rounded-md shadow-lg z-10"
                  onMouseEnter={() => setAboutDropdown(true)}
                  onMouseLeave={() => setAboutDropdown(false)}
                >
                  <Link
                    to={"/collocation"}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Colocation
                  </Link>
                  <Link
                    to={"/ddos"}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    DDOS
                  </Link>
                  <Link
                    to={"/dns"}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    DNS
                  </Link>
                  <Link
                    to={"/icon-cloud"}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    IconCloud
                  </Link>
                  <Link
                    to={"/icon-filter"}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    IconFilter
                  </Link>
                  <Link
                    to={"/icon-mail"}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    IconMail
                  </Link>
                  <Link
                    to={"/icon-mon"}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    IconMonitoring
                  </Link>
                  <Link
                    to={"/sanbox"}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    SandBox
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="#"
              className="decoration-0 px-5 font-medium font-customFont text-[#fff] hover:underline hover:text-blue-500"
            >
              Lokasi
            </Link>
            <Link
              to="#"
              className="decoration-0 px-5 font-medium font-customFont text-[#fff] hover:underline hover:text-blue-500"
            >
              Bantuan
            </Link>
            <Link
              to="/home"
              className="decoration-0 px-5 text-white bg-blue-500 font-medium font-customFont py-3 rounded-md hover:bg-blue-700 hover:text-white"
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
