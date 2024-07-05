import Check from "../../assets/r.jpg";
const Komunik = () => {
  return (
    <div className="w-full h-full flex justify-between items-center px-[5%] py-[5%] md:flex-nowrap flex-wrap-reverse">
      <div className="w-full flex justify-center basis-[50%] p-5">
        <div>
          <div className="atas mt-5 md:mt-0">
            <p className="text-blue-600 font-semibold text-xl font-customFont mb-3">
              LAYANAN KAMI
            </p>

            <p className="max-w-[600px] text-sm font-customFont text-[#333]">
              Layanan kelebihan data center mencakup berbagai fasilitas dan
              solusi yang bertujuan untuk memastikan keandalan, keamanan, dan
              efisiensi dalam pengelolaan data, termasuk infrastruktur redundan,
              sistem keamanan berlapis, skalabilitas, konektivitas cepat,
              penghematan biaya operasional, solusi pemulihan bencana, manajemen
              data canggih, dukungan teknis 24/7, lingkungan terkendali, dan
              kepatuhan terhadap berbagai standar serta regulasi industri.
            </p>
          </div>
          <div className="bawah flex mt-5">
            <div className="kiri flex justify-center items-center">
              <img src={Check} alt="" className="w-[20px] mr-5" />
            </div>
            <div className="kanan">
              <p className="font-semibold text-xl font-customFont text-[#333] hover:text-[#3163b8] cursor-default">
                Konektivitas Jaringan Yang Handal
              </p>
            </div>
          </div>
          <div className="bawah flex mt-5">
            <div className="kiri flex justify-center items-center">
              <img src={Check} alt="" className="w-[20px] mr-5" />
            </div>
            <div className="kanan">
              <p className="font-semibold text-xl font-customFont text-[#333] hover:text-[#3163b8] cursor-default">
                Keamanan Fisik 24 X 7
              </p>
            </div>
          </div>
          <div class="bawah flex mt-5">
            <div class="kiri flex justify-center items-center">
              <img src={Check} alt="" class="w-[20px] mr-5" />
            </div>
            <div className="kanan">
              <p className="font-semibold text-xl font-customFont text-[#333] hover:text-[#3163b8] cursor-default">
                Ruang Server menggunakan PAC (Precision Air Conditioning)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex basis-[50%]">
        <img
          src={Check}
          alt=""
          className="md:w-[500px] md:h-[370px] w-[300px] h-[300px] hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
};

export default Komunik;
