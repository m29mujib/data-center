const Navbar = () => {
  return (
    <div className="w-full h-[50px] bg-black bg-opacity-10 backdrop-blur-lg py-10 px-[8%] flex justify-between items-center fixed top-0 left-0 z-10">
      <div className="flex">
        <img src="../src/assets/a.png" alt="" className="w-[30px] mr-[8px]" />
        <h1 className="font-semibold tracking-wide font-customFont text-[#ffffff]">
          Data Center
        </h1>
      </div>
      <div className="flex items-center justify-right">
        <ul>
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
      </div>
    </div>
  );
};

export default Navbar;
