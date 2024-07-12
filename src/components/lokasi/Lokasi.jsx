export const Lokasi = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-gray-100"
      id="lokasi"
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-[#333] mb-10">Lokasi Kami</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.599909127817!2d106.77093690899608!3d-6.3422142737146165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef7a739accb3%3A0xe5f8789ac9671f2a!2sKantor%20Icon%20Gandul!5e0!3m2!1sid!2sid!4v1720430642133!5m2!1sid!2sid"
          allowfullscreen
          loading="lazy"
          className="w-full h-[400px]"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
