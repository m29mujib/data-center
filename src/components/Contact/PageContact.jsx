// import G from "../../assets/gmail.png";
// import T from "../../assets/phone-call.png";
// import F from "../../assets/printer.png";
import Check from "../../assets/check.png";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import L from "../../assets/placeholder.png";
const PageContact = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [noTelp, setNoTelp] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
    setEmail("");
    setUserName("");
    setNamaPerusahaan("");
    setNoTelp("");
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
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
              onSubmit={handleSubmit}
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
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="username"
                      required
                    />
                  </div>
                </div>

                <div class="form full">
                  <div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div class="form full">
                  <div>
                    <input
                      type="text"
                      id="noTelp"
                      value={noTelp}
                      onChange={(e) => setNoTelp(e.target.value)}
                      // name="subscriber_field_values_6"
                      placeholder="No. Telepon/WA "
                      required
                    />
                  </div>
                </div>

                <div class="form full">
                  <div>
                    <input
                      type="text"
                      id="text"
                      value={namaPerusahaan}
                      onChange={(e) => setNamaPerusahaan(e.target.value)}
                      // name="subscriber_field_values_7"
                      placeholder="Nama Perusahaan"

                      // value=""
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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ">
          <div className="bg-white rounded shadow-lg py-5 px-[100px] flex flex-col items-center">
            <img src={Check} alt="" className="w-[90px] h-[90px] mb-3" />
            <h2 className="text-2xl mb-4">Success</h2>
            <p>Berhasil submit</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-md focus:outline-none focus:shadow-outline"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default PageContact;
