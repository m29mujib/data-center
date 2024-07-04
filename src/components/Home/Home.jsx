const Home = () => {
  return (
    <div className="w-full h-full md:flex justify-between items-center px-[8%] py-[0%] md:py-[5%] flex-wrap">
      <div className="flex justify-center mt-5">
        <img
          src="../src/assets/b.jpg"
          alt=""
          class="md:w-[400px] md:h-[400px] w-[300px] h-[300px] hover:scale-105 duration-300"
        />
      </div>
      <div className="flex justify-center mt-5 md:mt-0">
        <div>
          <div className="atas">
            <p className="text-blue-600 font-semibold text-sm font-customFont">
              FEATURES
            </p>
            <h2 className="font-bold text-3xl mb-3 font-customFont text-[#333]">
              Foud and Booking Apartment
            </h2>
            <p className="max-w-[600px] text-sm font-customFont text-[#333]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              ducimus suscipit nobis quia quaerat dolor aperiam neque
              perspiciatis quidem possimus.
            </p>
          </div>
          <div className="bawah flex mt-5">
            <div className="kiri flex justify-center items-center">
              <img src="../src/assets/slack.png" alt="" class="w-[20px] mr-5" />
            </div>
            <div className="kanan">
              <h4 className="font-semibold text-xl font-customFont text-[#333]">
                dolor sit amet consectetur.
              </h4>
              <p className="max-w-[400px] text-xs font-customFont text-[#333]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                unde. Possimus facere qui ea impedit?
              </p>
            </div>
          </div>
          <div className="bawah flex mt-5">
            <div className="kiri flex justify-center items-center">
              <img src="../src/assets/cal.png" alt="" class="w-[20px] mr-5" />
            </div>
            <div className="kanan">
              <h4 className="font-semibold text-xl font-customFont text-[#333]">
                Lorem ipsum dolor sit amet.
              </h4>
              <p className="max-w-[400px] text-xs font-customFont text-[#333]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                unde. Possimus facere qui ea impedit?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
