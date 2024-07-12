import P from "../../assets/comm2.jpg";
import M from "../../assets/comm3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  AOS.init({
    once: true,
  });
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col px-[8%] flex-wrap">
        <div className="flex flex-col my-[80px]">
          <h1
            className=" text-5xl font-semibold mb-5 max-w-[500px] font-customFont text-[#333]"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            About Us
          </h1>
          <p
            className="text-sm font-customFont text-[#333] w-[90%]"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Company Profile PLN Icon Plus PLN Icon Plus, bersama induk
            perusahaan PT PLN (Persero), terus mengembangkan layanan untuk
            melayani bangsa melalui teknologi informasi, komunikasi, dan
            transisi energi. Kami terus berinovasi menyediakan solusi Beyond kWh
            dengan menyediakan penawaran lengkap yang mencakup teknologi
            jaringan serat optik end-to-end, layanan terkelola infrastruktur,
            pusat data, platform digital kelas atas, dan solusi layanan managed
            service perangkat yang andal. PLN Icon Plus beroperasi dengan
            dukungan aset strategis infrastruktur Right of Way (RoW) PLN,
            memungkinkan kami untuk menjangkau seluruh Indonesia, bahkan di
            daerah yang paling terpencil sekalipun. Kami lebih dari siap untuk
            merangkul transformasi digital menuju lingkungan yang cerdas dan
            hijau di Indonesia
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="py-[100px] md:py-[0px] ">
            <h1
              className="text-5xl font-semibold mb-5 max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Visi
            </h1>
            <p
              className="text-sm max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Menjadi penyedia solusi TIK terkemuka di Indonesia berbasis jaringan melalui pemanfaatan aset strategis.
            </p>
            {/* <p
              className="text-sm max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus, esse.
            </p> */}
            <button
              className="py-2 px-5 bg-white text-gray-600 rounded-sm mt-10 mr-5 font-customFont text-[#333]"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Iklan disini
            </button>
            <button
              className="py-2 px-5 bg-blue-600 text-white rounded-sm mt-10 font-customFont"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              Read More
            </button>
          </div>
          <div className="flex">
            <div className="flex justify-between w-full">
              <img
                src={M}
                alt=""
                className="md:w-[400px] md:h-[400px] w-[350px] h-[350px] rounded-md"
                data-aos="fade-right"
                data-aos-duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex px-[8%] flex-wrap justify-center my-[80px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex">
            <img
              src={P}
              alt=""
              className="md:w-[400px] md:h-[400px] w-[350px] h-[350px] rounded-md"
              data-aos="fade-left"
              data-aos-duration="3000"
            />
          </div>
          <div className="py-[100px] md:py-[0px] ">
            <h1
              className="text-5xl font-semibold mb-5 max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              Misi
            </h1>
            <p
              className="text-sm max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              Memberikan layanan TIK yang terbaik di kelasnya kepada pelanggan
              guna meningkatkan nilai Perusahaan.
            </p>
            <p
              className="text-sm max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              Memenuhi kebutuhan dan harapan PLN secara proaktif dengan menyediakan solusi-solusi TIK yang inovatif dan memberikan nilai tambah.
            </p>
            <p
              className="text-sm max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              Membangun organisasi pembelajar yang berkinerja tinggi untuk mendorong Perusahaan mencapai bisnis yang unggul dan menjadi pilihan bagi talenta-talenta terbaik.
            </p>
            <p
              className="text-sm max-w-[500px] font-customFont text-[#333]"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              Memberi kontribusi terhadap perkembangan telekomunikasi nasional.
            </p>
            <button
              className="py-2 px-5 bg-white text-gray-600 rounded-sm mt-10 mr-5 font-customFont text-[#333]"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              Iklan disini
            </button>
            <button
              className="py-2 px-5 bg-blue-600 text-white rounded-sm mt-10 font-customFont"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
