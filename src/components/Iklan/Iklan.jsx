const Iklan = () => {
  return (
    <div className="w-full h-100% p-10 flex justify-center items center flex-col px-[8%] py-[3%]">
      <div className="atas">
        <p className="max-w-[500px] text-sm text-[#666] font-custemFont text-[#333]"></p>
      </div>
      <div className="bawah mt-5 flex justify-between items-center">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="../src/assets/calendar.png"
            alt=""
            class="w-[30px] h-[30px] mr-3 mb-2 md:mb-0"
          />
          <p className="md:text-xl text-sm text-gray-600 font-semibold font-custemFont text-[#333]">
            Google Calender
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="../src/assets/slack.png"
            alt=""
            class="w-[30px] h-[30px] mr-3 mb-2 md:mb-0"
          />
          <p className="md:text-xl text-sm text-gray-600 font-semibold font-custemFont text-[#333]">
            Slack
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="../src/assets/cal.png"
            alt=""
            class="w-[30px] h-[30px] mr-3 mb-2 md:mb-0"
          />
          <p className="md:text-xl text-sm text-gray-600 font-semibold font-custemFont text-[#333]">
            University
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="../src/assets/user.png"
            alt=""
            class="w-[30px] h-[30px] mr-3 mb-2 md:mb-0"
          />
          <p className="md:text-xl text-sm text-gray-600 font-semibold font-custemFont text-[#333]">
            Avere
          </p>
        </div>
      </div>
    </div>
  );
};

export default Iklan;
