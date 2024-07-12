import P from "../../assets/comm2.jpg";
import M from "../../assets/comm3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const About = () => {
  AOS.init({
    once: true,
  });
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="mt-8 w-full h-full flex flex-col px-[8%] flex-wrap">
        <div className="flex flex-col my-[80px]">
          <h1
            className=" text-5xl font-semibold mb-5 max-w-[500px] font-customFont text-[#333]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Tentang Kami
          </h1>
          <p
            className="text-sm font-customFont text-[#333] w-[90%]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            PLN Icon Plus, bersama induk perusahaan PT PLN (Persero), terus
            mengembangkan layanan untuk melayani bangsa melalui teknologi
            informasi, komunikasi, dan transisi energi. Kami terus berinovasi
            menyediakan solusi Beyond kWh dengan menyediakan penawaran lengkap
            yang mencakup teknologi jaringan serat optik end-to-end, layanan
            terkelola infrastruktur, pusat data, platform digital kelas atas,
            dan solusi layanan managed service perangkat yang andal. PLN Icon
            Plus beroperasi dengan dukungan aset strategis infrastruktur Right
            of Way (RoW) PLN, memungkinkan kami untuk menjangkau seluruh
            Indonesia, bahkan di daerah yang paling terpencil sekalipun. Kami
            lebih dari siap untuk merangkul transformasi digital menuju
            lingkungan yang cerdas dan hijau di Indonesia
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="py-[100px] md:py-[0px] basis-[50%]">
            <h1
              className="text-5xl font-semibold mb-5 max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Visi
            </h1>
            <p
              className="text-sm max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Menjadi penyedia solusi TIK terkemuka di Indonesia berbasis
              jaringan melalui pemanfaatan aset strategis.
            </p>
            {/* <p
              className="text-sm max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, esse.
            </p> */}
          </div>
          <div className="flex basis-[50%]">
            <div className="flex justify-between w-full">
              <img
                src={M}
                alt=""
                className="md:w-[600px] md:h-[370px] w-[350px] h-[350px] hover:scale-105 duration-300 rounded-md"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex px-[8%] flex-wrap justify-center my-[80px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex mr-8">
            <img
              src={P}
              alt=""
              className="md:w-[600px] md:h-[370px] w-[350px] h-[350px] hover:scale-105 duration-300 rounded-md"
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
          <div className="py-[100px] md:py-[0px] ">
            <h1
              className="text-5xl font-semibold mb-5 max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Misi
            </h1>
            <p
              className="text-sm max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Memberikan layanan TIK yang terbaik di kelasnya kepada pelanggan
              guna meningkatkan nilai Perusahaan.
            </p>
            <p
              className="text-sm max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Memenuhi kebutuhan dan harapan PLN secara proaktif dengan
              menyediakan solusi-solusi TIK yang inovatif dan memberikan nilai
              tambah.
            </p>
            <p
              className="text-sm max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Membangun organisasi pembelajar yang berkinerja tinggi untuk
              mendorong Perusahaan mencapai bisnis yang unggul dan menjadi
              pilihan bagi talenta-talenta terbaik.
            </p>
            <p
              className="text-sm max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Memberi kontribusi terhadap perkembangan telekomunikasi nasional.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
