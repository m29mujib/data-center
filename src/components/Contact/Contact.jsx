import G from "../../assets/gmail.png";
import T from "../../assets/phone-call.png";
import F from "../../assets/printer.png";
import L from "../../assets/placeholder.png";
const Contact = () => {
  return (
    <div class="w-full h-full flex justify-center items-center flex-wrap md:flex-nowrap py-[10%]">
      <form class="md:max-w-[500px] m-5 w-[400px] h-[500px] md:h-[500px] bg-[#eaeaea] rounded-xl px-8 py-[50px] mb-4 ">
        <div class="mb-4 flex">
          <div className="mr-5">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Your Email
            </label>
            <input
              class="shadow appearance-none rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="@email"
            />
          </div>
          <div class="">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Your Phone
            </label>
            <input
              class="shadow appearance-none rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="phone.."
            />
          </div>
        </div>

        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="adress"
          >
            Your Address
          </label>
          <input
            class="shadow appearance-none rounded-xl w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="adress"
            type="text"
            placeholder="your adress.."
          />

          <label
            for="message"
            class="block mb-2 font-bold text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-xl  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Pesan.."
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send Massage
          </button>
        </div>
      </form>
      <div className="bawah ml-[30px]">
        <div>
          <h1 className="max-w-[450px] text-[#333] text-4xl font-bold ">
            Formulir ini adalah cara mudah untuk berkomunikasi dengan kami
          </h1>
          <p className="text-xs max-w-[400px] mt-5">
            Untuk pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami
          </p>
        </div>
        <div className="flex mt-5 items-center mt-5">
          <div className="mr-3">
            <img src={T} alt="" className="w-[30px] h-[30px]" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs">Telepon: </p>
            <p className="font-bold font-customeFont text-sm text-[#333]">
              021 1500071
            </p>
          </div>
        </div>
        <div className="flex mt-5 items-center">
          <div className="mr-3">
            <img src={F} alt="" className="w-[30px] h-[30px]" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs">Fax</p>
            <p className="font-bold font-customeFont text-sm text-[#333]">
              21-5253659
            </p>
          </div>
        </div>
        <div className="flex mt-5 items-center">
          <div className="mr-3">
            <img src={G} alt="" className="w-[30px] h-[30px]" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs">Email</p>
            <p className="font-bold font-customeFont text-sm text-[#333]">
              humas@iconpln.co.id{" "}
            </p>
          </div>
        </div>
        <div className="flex mt-5 items-center">
          <div className="mr-3">
            <img src={L} alt="" className="w-[30px] h-[30px]" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs">Location</p>
            <p className="font-bold font-customeFont max-w-[400px] text-sm text-[#333]">
              Alamat: Jl. Damai No.100, Gandul, Kec. Cinere, Kota Depok,
              Jawa Barat 16514
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
