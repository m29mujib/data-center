const Kolaborate = () => {
    return(
        <div className="w-full h-full flex flex-col px-[8%] py-[5%]">
        <div className="atas flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-bold font-customFont text-[#333] text-blue-500">
              Testimoni
            </h1>
            <h2 className="text-xl font-customFont text-[#333] font-semibold">
              What are they saying?
            </h2>
          </div>
          <div className="flex">
            <img
              src="../src/assets/arrow.png"
              alt=""
              className="w-[30px] h-[30px] mr-2"
            />
            <img src="../src/assets/previous.png" alt="" className="w-[30px] h-[30px]" />
          </div>
        </div>
        <div className="bawah mt-5 flex">
          <div className="card w-[300px] p-5 bg-white shadow-lg mr-5">
            <div className="atas p-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bawah flex p-5">
              <div className="kiri">
                <img src="../src/assets/r.jpg" alt="" className="w-[40px]" />
              </div>
              <div className="kanan">
                <h4 className="font-semibold font-customFont text-[#333]">
                  Lorem, ipsum.
                </h4>
                <p className="text-xs font-customFont text-[#333]">Lorem</p>
              </div>
            </div>
          </div>
          <div className="card w-[300px] p-5 bg-white shadow-lg mr-5">
            <div className="atas p-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bawah flex p-5">
              <div className="kiri">
                <img src="../src/assets/r.jpg" alt="" className="w-[40px]" />
              </div>
              <div className="kanan">
                <h4 className="font-semibold font-customFont text-[#333]">
                  Lorem, ipsum.
                </h4>
                <p className="text-xs font-customFont text-[#333]">Lorem</p>
              </div>
            </div>
          </div>
          <div className="card w-[300px] p-5 bg-white shadow-lg mr-5">
            <div className="atas p-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div clasName="bawah flex p-5">
              <div className="kiri">
                <img src="../src/assets/r.jpg" alt="" className="w-[40px]" />
              </div>
              <div className="kanan">
                <h4 className="font-semibold font-customFont text-[#333]">
                  Lorem, ipsum.
                </h4>
                <p className="text-xs font-customFont text-[#333]">Lorem</p>
              </div>
            </div>
          </div>
          <div className="card w-[300px] p-5 bg-white shadow-lg">
            <div className="atas p-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="bawah flex p-5">
              <div className="kiri">
                <img src="../src/assets/r.jpg" alt="" className="w-[40px]" />
              </div>
              <div className="kanan">
                <h4 className="font-semibold font-customFont text-[#333]">
                  Lorem, ipsum.
                </h4>
                <p className="text-xs font-customFont text-[#333]">Lorem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Kolaborate