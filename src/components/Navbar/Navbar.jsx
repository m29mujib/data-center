import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
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
        <ul className="hidden md:block">
          <li>
            {/* start nav main */}
            <a
              href="/home"
              className="decoration-0 px-5 font-regular font-customFont text-[#ffffff] hover:underline hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="/home"
              className="decoration-0 px-5 font-regular font-customFont text-[#ffffff] hover:underline hover:text-blue-500"
            >
              About Us
            </a>
            <a
              href="/home"
              className="decoration-0 px-5 font-regular font-customFont text-[#ffffff] hover:underline hover:text-blue-500"
            >
              Blog
            </a>
            <a
              href="/home"
              className="decoration-0 px-5 font-regular font-customFont text-[#ffffff] hover:underline hover:text-blue-500"
            >
              Blog
            </a>

            <a
              href="/home"
              className="decoration-0 px-5 font-regular font-customFont text-[#ffffff] hover:underline hover:text-blue-500"
            >
              Blog
            </a>
            {/* end nav main */}
            <a
              href="/home"
              className="decoration-0 px-5 text-white bg-blue-500 font-semibold font-customFont py-3 rounded-sm hover:underline hover:text-blue-500"
            >
              Get Contact
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
