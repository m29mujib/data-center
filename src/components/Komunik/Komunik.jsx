const Komunik = () => {
  return (
    <div className="w-full h-full flex justify-between items-center px-[8%] py-[5%] flex-wrap-reverse">
      <div className="flex justify-center">
        <div>
          <div className="atas mt-5 md:mt-0">
            <p className="text-blue-600 font-semibold text-sm font-customFont">
              OUR SERVICES
            </p>
            <h2 className="font-bold text-3xl mb-3 max-w-[500px] font-customFont text-[#333]">
              Know Detail Information About Apartment
            </h2>
            <p className="md:max-w-[600px] w-full text-sm font-customFont text-[#333]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              ducimus suscipit nobis quia quaerat dolor aperiam neque
              perspiciatis quidem possimus.
            </p>
          </div>
          <div className="bawah flex mt-5">
            <div className="kiri flex justify-center items-center">
              <img
                src="../src/assets/checklist.png"
                alt=""
                className="w-[20px] mr-5"
              />
            </div>
            <div className="kanan">
              <p className="md:max-w-[400px] w-full text-xs font-customFont text-[#333]">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
          <div className="bawah flex mt-5">
            <div className="kiri flex justify-center items-center">
              <img
                src="../src/assets/checklist.png"
                alt=""
                className="w-[20px] mr-5"
              />
            </div>
            <div className="kanan">
              <p className="md:max-w-[400px] w-full text-xs font-customFont text-[#333]">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
          <div class="bawah flex mt-5">
            <div class="kiri flex justify-center items-center">
              <img
                src="../src/assets/checklist.png"
                alt=""
                class="w-[20px] mr-5"
              />
            </div>
            <div className="kanan">
              <p className="md:max-w-[400px] w-full text-xs font-customFont text-[#333]">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="../src/assets/r.jpg"
          alt=""
          className="md:w-[400px] md:h-[400px] w-[300px] h-[300px] hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
};

export default Komunik;
