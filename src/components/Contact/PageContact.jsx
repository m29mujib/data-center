import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const PageContact = () => {
  return (
    <div>
      <Navbar />

      <div
        id="flexbox-style"
        class="kirimemail-content bg-[#0096a7] text-white kirimemail-form"
      >
        <span id="act_host" class="hidden"></span>
        <div class="kirimemail-form-body">
          <div class="form-content">
            <div class="kirimemail-form-youtube-wrap ">
              <div class="kirimemail-form-youtube"></div>
            </div>
            <h1 class="kirimemail-form-headline">
              Dapatkan Penawaran Eksklusif dari Kami Sekarang
            </h1>
            <div class="kirimemail-form-description">
              Isi formulir ini untuk info terbaru dan penawaran spesial dari
              kami. Tim kami akan segera menghubungi Anda.
            </div>
          </div>
        </div>
        <div class="kirimemail-form-field">
          <div class="form-content">
            <form
              id="keform"
              class="simple_form new_form_submission"
              accept-charset="UTF-8"
              method="POST"
              action="https://app.iconmail.id/form/form-utama-landing-page-icon-Yqu79Yx9"
            >
              <div class="kirimemail-custom-field">
                <div class="form full">
                  <div>
                    <input
                      name="full_name"
                      placeholder="Nama"
                      type="text"
                      required
                    />
                  </div>
                </div>

                <div class="form full">
                  <div>
                    <input
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div class="form full">
                  <div>
                    <input
                      name="subscriber_field_values_6"
                      placeholder="No. Telepon/WA "
                      type="tel"
                      code=""
                      value=""
                      required
                    />
                  </div>
                </div>

                <div class="form full">
                  <div>
                    <input
                      name="subscriber_field_values_7"
                      placeholder="Nama Perusahaan"
                      type="text"
                      value=""
                    />
                  </div>
                </div>

                <div class="form full">
                  <div>
                    <select name="subscriber_field_values_8">
                      <option value="">-- Pilih Salah Satu Produk --</option>
                      <option value="ICONColocation">ICONColocation</option>
                      <option value="ICONDNS">ICONDNS</option>
                      <option value="ICONCloud">ICONCloud</option>
                      <option value="ICONMail">ICONMail</option>
                      <option value="ICONMonitoring">ICONMonitoring</option>
                      <option value="ICONSandBox">ICONSandBox</option>
                      <option value="ICONRack">ICONRack</option>
                    </select>
                  </div>
                </div>

                <div class="form full">
                  <div>
                    <select name="subscriber_field_values_9">
                      <option value="">
                        -- Dari Mana Anda Mengetahui Produk Kami? --
                      </option>
                      <option value="Google">Google</option>
                      <option value="Social Media (Facebook, Instagram, LinkedIn, dll)">
                        Social Media (Facebook, Instagram, LinkedIn, dll)
                      </option>
                      <option value="Email">Email</option>
                      <option value="Youtube">Youtube</option>
                      <option value="Rekan Kerja">Rekan Kerja</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div class="kirimemail-custom-option"></div>

                <div class="form-controls">
                  <button
                    type="submit"
                    class="button slate kirimemail-btn-submit bg-[#182657]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <style>
					#hosted-form,
					.kirimemail-content {
													background-color: #0096a7							!important;
																			color: #ffffff							!important;
											}
					#hosted-form .kirimemail-btn-submit,
					.kirimemail-content .kirimemail-btn-submit {
													background-color: #182657							!important;
							box-shadow: 0 0 0 1px#182657!important;
																			color: #ffffff							!important;
											}
				</style> */}
      {/* <div
        id="contact"
        class="mt-20 w-full h-full flex justify-center items-center flex-wrap md:flex-nowrap py-[5%] bg-gray-100"
      >
        <form class="md:max-w-[500px] m-5 md:m-0 w-[400px] h-[460px] md:h-[500px] bg-[#ededed] rounded-md px-8 py-[50px] mb-4 ">
          <div class="mb-4 flex">
            <div className="mr-5">
              <label
                class="block text-gray-00 text-sm font-regular mb-2"
                for="username"
              >
                Your Email
              </label>
              <input
                class="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="@email"
              />
            </div>
            <div class="">
              <label
                class="block text-gray-700 text-sm font-regular mb-2"
                for="username"
              >
                Your Phone
              </label>
              <input
                class="shadow appearance-none rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="phone.."
              />
            </div>
          </div>

          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-regular mb-2"
              for="adress"
            >
              Your Address
            </label>
            <input
              class="shadow appearance-none rounded-md w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="adress"
              type="text"
              placeholder="your adress.."
            />

            <label
              for="message"
              class="block mb-2 font-regular text-sm font-regular text-gray-900 dark:text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-md  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Pesan.."
            ></textarea>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="w-full bg-blue-500 hover:bg-blue-700 text-white font-regular py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Massage
            </button>
          </div>
        </form>
        <div className="bawah ml-[50px]">
          <div className=" md:mb-10 mb-0">
            <h1 className="max-w-[600px] text-[#333] text-4xl font-medium">
              Formulir ini adalah cara mudah untuk berkomunikasi dengan kami
            </h1>
            <p className="text-xs max-w-[300px] md:max-w-[400px] w-full mt-5">
              Untuk pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami
            </p>
          </div>
          <div className="flex items-center mt-5">
            <div className="mr-3">
              <img src={T} alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs">Telepon: </p>
              <p className="font-medium font-customeFont text-sm text-[#333]">
                021 1500071
              </p>
            </div>
          </div>
          <div className="flex mt-5 items-center">
            <div className="mr-3">
              <img src={F} alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs">Fax</p>
              <p className="font-medium font-customeFont text-sm text-[#333]">
                21-5253659
              </p>
            </div>
          </div>
          <div className="flex mt-5 items-center">
            <div className="mr-3">
              <img src={G} alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs">Email</p>
              <p className="font-medium font-customeFont text-sm text-[#333]">
                humas@iconpln.co.id{" "}
              </p>
            </div>
          </div>
          <div className="flex mt-5 items-center">
            <div className="mr-3">
              <img src={L} alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs">Location</p>
              <p className="font-medium font-customeFont max-w-[400px] text-sm text-[#333]">
                Alamat: Jl. Damai No.100, Gandul, Kec. Cinere, Kota Depok,
                Jawa Barat 16514
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default PageContact;
