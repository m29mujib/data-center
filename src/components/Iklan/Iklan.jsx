import CountUp, { useCountUp } from "react-countup";
import React from "react";
const Iklan = () => {
  useCountUp({
    ref: "counter",
    end: 100,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="w-full h-100% p-10 flex justify-center items center flex-col px-[8%] py-[3%]">
      <div className="atas">
        <p className="max-w-[500px] text-sm text-[#666] font-custemFont text-[#333]"></p>
      </div>
      <div className="bawah mt-5 flex justify-between items-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="App ">
            <div className="content flex justify-center items-center" />
            <CountUp enableScrollSpy className="opacity-0 " />
            <br />
            <span
              id="counter"
              className=" text-[#333] text-xl font-custemFont font-bold"
            />
          </div>
          <p className="md:text-xl pt-6 md:ml-5 text-sm text-gray-600 font-semibold font-custemFont text-[#333]">
            Google Calender
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="App">
            <div className="content" />
            <p className="opacity-0">0</p>
            <CountUp
              end={200}
              enableScrollSpy
              className="text-[#333] text-xl font-custemFont font-bold"
            />
            <br />
            <span
              id="counter"
              className="text-[#333] text-xl font-custemFont font-bold"
            />
          </div>
          <p className="md:text-xl pt-6 md:ml-5 text-sm text-gray-600 font-semibold font-custemFont text-[#333]">
            Slack
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="App">
            <div className="content" />
            <p className="opacity-0">0</p>
            <CountUp
              end={300}
              enableScrollSpy
              className="text-[#333] text-xl font-custemFont font-bold"
            />
            <br />
            <span
              id="counter"
              className="text-[#333] text-xl font-custemFont font-bold"
            />
          </div>
          <p className="md:text-xl pt-6 md:ml-5 text-sm text-gray-600 font-semibold font-custemFont text-[#333]">
            University
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="App">
            <div className="content" />
            <p className="opacity-0">0</p>
            <CountUp
              end={400}
              enableScrollSpy
              className="text-[#333] text-xl font-custemFont font-bold"
            />
            <br />
            <span
              id="counter"
              className="text-[#333] text-xl font-custemFont font-bold"
            />
          </div>
          <p className="md:text-xl pt-6 md:ml-5 text-sm text-gray-600 font-semibold font-custemFont text-[#333]">
            Avere
          </p>
        </div>
      </div>
    </div>
  );
};

export default Iklan;
