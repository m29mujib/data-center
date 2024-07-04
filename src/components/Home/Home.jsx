const Home = () => {
  return (
    <div className="w-full h-full md:flex justify-between items-center px-[8%] py-[0%] md:py-[5%] flex-wrap">
      <div className="flex justify-center mt-5 ">
        <img
          src="../src/assets/peta.png"
          alt=""
          className="md:w-[600px] md:h-[350px] w-[300px] h-[300px] hover:scale-105 duration-300 rounded-xl"
        />
      </div>
      <div className="flex justify-center mt-5 md:mt-0 ml-5">
        <div>
          <div className="atas">
            <h1 className="text-blue-600 font-semibold text-xl font-customFont mb-3">
              LOKASI DATA CENTER PLN ICON PLUS 
            </h1>
            <p className="max-w-[600px] text-sm font-customFont text-[#333]">
              Berdasarkan historikal yang ada, sejak beroperasi pada tahun 2000, lokasi PT PLN ICON PLUS Cinere Gandul tidak pernah mengalami banjir, gempa yang mengganggu operasional.
            </p>
          </div>
          <div className="bawah flex mt-5">
            <div className="kiri flex justify-center items-center">
              <img src="../src/assets/slack.png" alt="" className="w-[20px] mr-5" />
            </div>
            <div className="kanan">
              <h4 className="font-semibold text-xl font-customFont text-[#333] hover:text-[#525252]">
                Berada pada Lokasi Objek Vital Nasional 
              </h4>
            </div>
          </div>
          <div className="bawah flex mt-5">
            <div className="kiri flex justify-center items-center">
              <img src="../src/assets/slack.png" alt="" className="w-[20px] mr-5" />
            </div>
            <div className="kanan">
              <h4 className="font-semibold text-xl font-customFont text-[#333] hover:text-[#525252]">
                Kemampuan Bangunan Terhadap Gempa Hingga 6,5 SR
              </h4>
            </div>
          </div>
          <div className="bawah flex mt-5">
            <div className="kiri flex justify-center items-center">
              <img src="../src/assets/slack.png" alt="" className="w-[20px] mr-5" />
            </div>
            <div className="kanan">
              <h4 className="font-semibold text-xl font-customFont text-[#333] hover:text-[#525252]">
                Berlokasi di Cinere Gandul
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
