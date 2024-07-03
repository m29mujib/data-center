const Search = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-[#eaeaea] py-[5%] px-[5%]">
      <div className="atas">
        <h1 className="font-bold text-2xl font-customFont text-[#333] max-w-[500px] text-center">
          Start Find your Apartment with Apartment
        </h1>
      </div>
      <div className="bawah mt-5 flex">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full h-[50px] border-none border-[#333] px-20"
        />
        <button className="bg-blue-500 text-white w-full py-2 px-5">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Search;
