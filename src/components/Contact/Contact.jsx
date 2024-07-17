// import G from "../../assets/gmail.png";
// import T from "../../assets/phone-call.png";
// import F from "../../assets/printer.png";
import Check from "../../assets/check.png";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import L from "../../assets/placeholder.png";
const Contact = () => {
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
    <div className="w-full h-full">
         <iframe
        title="Form Utama"
        src="https://form.iconplus.id/f/form-utama-landing-page-icon-Yqu79Yx9"
        style={{ border: "none", width: "100%", height: "700px" }}
      ></iframe>
    </div>
  );
};
export default Contact;
