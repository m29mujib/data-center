const Iklan = () => {
  return (
    <div className="w-full h-100% p-10 flex justify-center items center flex-col px-[8%] py-[3%] border border-[#eaeaea]">
      <div className="atas">
        <p className="max-w-[500px] text-sm text-[#666] font-custemFont text-[#333]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="bawah mt-5 flex justify-between items-center">
        <div className="flex">
          <img src="../src/assets/calendar.png" alt="" class="w-[30px] mr-3" />
          <p className="text-xl text-gray-600 font-semibold font-custemFont text-[#333]">
            Google Calender
          </p>
        </div>
        <div className="flex">
          <img src="../src/assets/slack.png" alt="" class="w-[30px] mr-3" />
          <p className="text-xl text-gray-600 font-semibold font-custemFont text-[#333]">
            Slack
          </p>
        </div>
        <div className="flex">
          <img src="../src/assets/cal.png" alt="" class="w-[30px] mr-3" />
          <p className="text-xl text-gray-600 font-semibold font-custemFont text-[#333]">
            University
          </p>
        </div>
        <div className="flex">
          <img src="../src/assets/user.png" alt="" class="w-[30px] mr-3" />
          <p className="text-xl text-gray-600 font-semibold font-custemFont text-[#333]">
            Avere
          </p>
        </div>
      </div>
    </div>
  );
};

export default Iklan;
