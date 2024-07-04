const Footer = () => {
  return (
    <div className="w-full h-full bg-[#333] flex flex-wrap justify-center items-center px-[8%] py-[5%]">
      <div className="w-full flex justify-between items-center flex-wrap">
        <div className="flex justify-center flex-col flex-wrap">
          <div className="flex">
            <img src="../src/assets/a.png" alt="" className="mr-2 w-[30px]" />
            <h1 className="font-bold font-customFont text-white">Data Center</h1>
          </div>
          
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex">
            <h1 className="font-bold font-customFont text-white">ABOUT US</h1>
          </div>
          <div className="flex flex-col p-5">
            <p className="text-white font-customFont">About</p>
            <p className="text-white font-customFont">Contact</p>
            <p className="text-white font-customFont">Blog</p>
          </div>
        </div>
        <div className="flex justify-center flex-col flex-wrap">
          <div className="flex mt-3 md:mt-0">
            <h1 className="font-bold font-customFont text-white">CONTACT</h1>
          </div>
          <div className="flex flex-col p-5">
            <p className="text-white font-customFont">About</p>
            <p className="text-white font-customFont">Contact</p>
            <p className="text-white font-customFont">Blog</p>
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex">
            <h1 className="font-bold font-customFont text-white">MULATION</h1>
          </div>
          <div className="flex flex-col p-5">
            <p className="text-white font-customFont">About</p>
            <p className="text-white font-customFont">Contact</p>
            <p className="text-white font-customFont">Blog</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
