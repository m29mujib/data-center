const Footer = () => {
    return(
        <div className="w-full h-full flex justify-center items-center px-[8%] py-[5%]">
    <div className="w-full flex justify-between items-center">
      <div className="flex justify-center flex-col">
        <div className="flex">
          <img src="../src/assets/a.png" alt="" className="mr-2 w-[30px]" />
          <h1 className="font-bold font-customFont text-[#333]">Apartment</h1>
        </div>
        <div className="flex flex-col">
          <button
            className="py-2 px-5 bg-black text-white mt-3 mb-2 flex justify-center items-center rounded-sm"
          >
            <img src="../src/assets/a.png" alt="" className="w-[20px] mr-3" />App
            Store
          </button>
          <button
            className="py-2 px-5 bg-black text-white flex justify-center items-center rounded-sm"
          >
            <img
              src="../src/assets/previous.png"
              alt=""
              className="w-[20px] mr-3"
            />Play Store
          </button>
          <div className="flex mt-3">
            <p>
              <img
                src="../src/assets/twitter.png"
                alt=""
                className="mr-3 w-[20px]"
              />
            </p>
            <p>
              <img
                src="../src/assets/facebook.png"
                alt=""
                className="mr-3 w-[20px]"
              />
            </p>
            <p>
              <img
                src="../src/assets/linkedin.png"
                alt=""
                className="mr-3 w-[20px]"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Footer