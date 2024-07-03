import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="w-full h-[50px] bg-black bg-opacity-10 backdrop-blur-lg py-10 px-[8%] flex justify-between items-center fixed top-0 left-0 z-10">
      {dropdown && (
        <div className="w-[200px] h-screen bg-[#fff] absolute top-0 right-0 z-[-99] flex flex-col justify-center items-center origin-right transition-all duration-700 ease-in-out transform translate-x-0">
          <ul className="flex flex-col justify-center items-center">
            <li className="flex flex-col justify-center items-center">
              <a href="" className="p-5">
                About
              </a>
              <a href="" className="p-5">
                Kontak
              </a>
              <a href="" className="p-5">
                Blog
              </a>
              <a href="" className="p-5">
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
            <a
              href="/home"
              className="decoration-0 px-5 font-regular font-customFont text-[#ffffff]"
            >
              Home
            </a>
            <a
              href="/home"
              className="decoration-0 px-5 font-regular font-customFont text-[#ffffff]"
            >
              About Us
            </a>
            <a
              href="/home"
              className="decoration-0 px-5 font-regular font-customFont text-[#ffffff]"
            >
              Blog
            </a>
            <a
              href="/home"
              className="decoration-0 px-5 text-white bg-blue-500 font-semibold font-customFont py-3 rounded-sm"
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
