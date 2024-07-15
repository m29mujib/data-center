import Peta from "../../assets/peta.png";
import Check from "../../assets/checklist.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init();
  return (
    <div
      className="w-full h-full flex flex-col md:flex-row items-center px-[5%] py-[0%] md:py-[5%] md:flex-nowrap sm:flex-wrap"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="flex w-full justify-center mt-5 basis-[50%]">
        <img
          src={Peta}
          alt=""
          className="md:w-[600px] md:h-[370px] w-[300px] h-[300px] hover:scale-105 duration-300 rounded-xl"
        />
      </div>
      <div
        className=" w-full justify-center mt-5 md:mt-0 ml-5 flex basis-[50%]"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="w-full flex flex-col justify-center">
          <div className="atas">
            <h1 className="text-blue-600 font-semibold text-xl font-customFont mb-3">
              LOKASI DATA CENTER PLN ICON PLUS
            </h1>
            <p className="md:max-w-[600px] max-w-[400px] text-sm font-customFont text-[#333]">
              Berdasarkan historikal yang ada, sejak beroperasi pada tahun 2000,
              lokasi PT PLN ICON PLUS Cinere Gandul tidak pernah mengalami
              banjir, gempa yang mengganggu operasional.
            </p>
          </div>
          <div className="bawah flex mt-5">
            <div className="kiri flex ">
              <img src={Check} alt="" className="w-[20px] h-[20px] mr-5" />
            </div>
            <div className="kanan">
              <h4 className="font-semibold text-md font-customFont text-[#333] hover:text-[#3163b8] cursor-default">
                Berada pada Lokasi Objek Vital Nasional
              </h4>
            </div>
          </div>
          <div className="bawah flex mt-5">
            <div className="kiri flex ">
              <img src={Check} alt="" className="w-[20px] h-[20px] mr-5" />
            </div>
            <div className="kanan flex flex-wrap">
              <h4 className="font-semibold text-md font-customFont ml-2 text-[#333] hover:text-[#3163b8] cursor-default">
                Kemampuan Bangunan Terhadap Gempa Hingga 6,5 SR
              </h4>
            </div>
          </div>
          <div className="bawah flex items-center mt-5">
            <div className="kiri flex ">
              <img src={Check} alt="" className="w-[20px] h-[20px] mr-5" />
            </div>
            <div className="kanan">
              <h4 className="font-semibold ml-[-10px] text-md font-customFont text-[#333] hover:text-[#3163b8] cursor-default">
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
