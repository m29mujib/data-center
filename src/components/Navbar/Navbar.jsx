import { useEffect, useState } from "react";

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
    <div className="w-full h-[50px] bg-black bg-opacity-10 backdrop-blur-lg py-10 px-[8%] flex justify-between items-center fixed top-0 left-0 z-10">
      {dropdown && (
        <div className="w-[200px] h-screen bg-[#fff] absolute top-0 right-0 z-[-99] flex flex-col justify-center items-center origin-right transition-all duration-700 ease-in-out transform translate-x-0">
          <ul className="flex flex-col justify-center items-center">
            <li className="flex flex-col justify-center items-center">
              <a href="" className="p-5 hover:underline hover:text-blue-500">
                About
              </a>
              <a href="" className="p-5 hover:underline hover:text-blue-500">
                Kontak
              </a>
              <a href="" className="p-5 hover:underline hover:text-blue-500">
                Blog
              </a>
              <a href="" className="p-5 hover:underline hover:text-blue-500">
                Apartment
              </a>
              <a href="" className="p-5 hover:underline hover:text-blue-500">
                Apartment
              </a>
              <a href="" className="p-5 hover:underline hover:text-blue-500">
                Apartment
              </a>
            </li>
          </ul>
        </div>
      )}
      <div className="flex justify-center items-center">
        <img src="../src/assets/a.png" alt="" className="w-[30px] mr-[8px]" />
        <h1 className="font-semibold tracking-wide font-customFont text-[#ffffff]">
          Data Center
        </h1>
      </div>

      <div className="flex items-center justify-right">
        <ul className="hidden md:flex">
          <li className="relative inline-block">
            {/* start nav main */}
            <a
              href="/"
              className="decoration-0 px-5 font-regular font-customFont text-[#000000] hover:underline hover:text-blue-500"
            >
              Home
            </a>
            <div
              className="relative inline-block group"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <a
                href="#"
                className="decoration-0 px-5 font-regular font-customFont text-[#000000] hover:underline hover:text-blue-500"
              >
                Layanan
              </a>
              <div
                className={`absolute bg-white text-black w-40 mt-2 rounded-md shadow-lg z-10 transition-opacity duration-300 ${
                  aboutDropdownVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <a
                  href="collocation"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Colocation
                </a>
                <a href="ddos" className="block px-4 py-2 hover:bg-gray-200">
                  DDOS
                </a>
                <a href="dns" className="block px-4 py-2 hover:bg-gray-200">
                  DNS
                </a>
                <a
                  href="icon-cloud"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  IconCloud
                </a>
                <a
                  href="icon-filter"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  IconFilter
                </a>
                <a
                  href="icon-mail"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  IconMail
                </a>
                <a
                  href="icon-mon"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  IconMonitoring
                </a>
                <a href="sanbox" className="block px-4 py-2 hover:bg-gray-200">
                  SandBox
                </a>
              </div>
            </div>
            <a
              href="/home"
              className="decoration-0 px-5 font-regular font-customFont text-[#000000] hover:underline hover:text-blue-500"
            >
              Lokasi
            </a>
            <a
              href="/home"
              className="decoration-0 px-5 font-regular font-customFont text-[#000000] hover:underline hover:text-blue-500"
            >
              Bantuan
            </a>
            {/* <a
              href="/home"
              className="decoration-0 px-5 font-regular font-customFont text-[#ffffff] hover:underline hover:text-blue-500"
            >
              Blog
            </a> */}
            {/* end nav main */}
            <a
              href="/home"
              className="decoration-0 px-5 text-white bg-blue-500 font-semibold font-customFont py-3 rounded-sm hover:bg-blue-700 hover:text-white "
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          className="md:hidden pointer"
          onClick={() => setDropdown(!dropdown)}
        >
          <img
            src={
              dropdown ? "../src/assets/close.png" : "../src/assets/more.png"
            }
            alt=""
            className="w-[30px] h-[30px] md:hidden text-[#ffffff]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
