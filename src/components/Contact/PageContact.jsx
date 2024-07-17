import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

const PageContact = () => {
  // State untuk menampilkan modal dan menyimpan data input
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [noTelp, setNoTelp] = useState("");

  // Handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
    setEmail("");
    setUserName("");
    setNamaPerusahaan("");
    setNoTelp("");
  };

  // Handle tutup modal
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full h-full">
      <Navbar />
      <iframe
        title="Form Utama"
        src="https://form.iconplus.id/f/form-utama-landing-page-icon-Yqu79Yx9"
        style={{ border: "none", width: "100%", height: "900px" }}
      ></iframe>
    </div>
  );
};

export default PageContact;
