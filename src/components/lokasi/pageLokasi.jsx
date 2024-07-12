import Peta from "../../assets/peta.png";
import Check from "../../assets/checklist.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PageLokasi = () => {
  AOS.init();
  return (
    <div>
      <Navbar />
      <div
        className="mt-20 w-full h-full flex flex-col md:flex-row items-center px-[5%] py-[0%] md:py-[5%] md:flex-nowrap sm:flex-wrap"
        // data-aos="fade-right"
        // data-aos-duration="3000"
      >

        <div
          className=" w-full justify-center mt-5 md:mt-0 ml-5 flex basis-[50%]"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div className="w-full flex flex-col justify-center">
            <div className="atas">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                  Lokasi Data Center PLN Icon Plus
                </h2>
              <p className="mt-4 md:max-w-[600px] max-w-[400px] text-sm font-customFont text-[#333]">
                Berdasarkan historikal yang ada, sejak beroperasi pada tahun 2000,
                lokasi PT PLN ICON PLUS Cinere Gandul tidak pernah mengalami
                banjir, gempa yang mengganggu operasional.
              </p>
            </div>
            <div className="bawah flex mt-5">
              <div className="kiri flex justify-center items-center">
                <img src={Check} alt="" className="w-[20px] mr-5" />
              </div>
              <div className="kanan">
                <h4 className="font-semibold text-xl font-customFont text-[#333] hover:text-[#3163b8] cursor-default">
                  Berada pada Lokasi Objek Vital Nasional
                </h4>
              </div>
            </div>
            <div className="bawah flex mt-5">
              <div className="kiri flex justify-center items-center">
                <img src={Check} alt="" className="w-[20px] mr-5" />
              </div>
              <div className="kanan">
                <h4 className="font-semibold text-xl font-customFont text-[#333] hover:text-[#3163b8] cursor-default">
                  Kemampuan Bangunan Terhadap Gempa Hingga 6,5 SR
                </h4>
              </div>
            </div>
            <div className="bawah flex items-center mt-5">
              <div className="kiri flex justify-center items-center">
                <img src={Check} alt="" className="w-[20px] mr-5" />
              </div>
              <div className="kanan">
                <h4 className="font-semibold text-xl font-customFont text-[#333] hover:text-[#3163b8] cursor-default">
                  Berlokasi di Cinere Gandul
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.599909127817!2d106.77093690899608!3d-6.3422142737146165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef7a739accb3%3A0xe5f8789ac9671f2a!2sKantor%20Icon%20Gandul!5e0!3m2!1sid!2sid!4v1720430642133!5m2!1sid!2sid"
          allowFullScreen
          loading="lazy"
          className="w-full h-[400px]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default PageLokasi;
