import React, { useState, useEffect } from 'react';
import A from "../../assets/logo.png";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-darkgray rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://plniconpln.id/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={A} className="h-8" alt="PLN Icon Plus" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Data Center</span> */}
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Tentang Kami</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Kebijakan Perusahaan</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Lisensi</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Kontak</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {currentYear} © <a href="https://plniconpln.id/" className="hover:underline">PLN Icon Plus</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
