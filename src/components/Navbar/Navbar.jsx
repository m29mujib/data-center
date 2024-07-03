const Navbar = () => {
  return (
    <div className="w-full h-[50px] bg-white py-10 px-[8%] flex justify-between items-center fixed top-0 left-0 z-10">
      <div className="flex">
        <img src="../src/assets/a.png" alt="" class="w-[30px] mr-[8px]" />
        <h1 className=" font-semibold tracking-wide font-customFont text-[#333]">
          Apartment
        </h1>
      </div>
      <div className="flex items-center justify-right">
        <ul class="hidden md:block">
          <li>
            <a
              href="/home"
              className="decoration-0 px-5 font-semibold font-customFont text-[#333]"
            >
              Home
            </a>
            <a
              href="/home"
              className="decoration-0 px-5 font-semibold font-customFont text-[#333]"
            >
              About Us
            </a>
            <a
              href="/home"
              className="decoration-0 px-5 font-semibold font-customFont text-[#333]"
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
