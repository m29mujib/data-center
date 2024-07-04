import React from "react";
import CountUp, { useCountUp } from "react-countup";
const Iklan = () => {
  useCountUp({
    ref: "counter",
    end: 250,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="flex flex-col px-20 py-[3%]">
      <div className="atas">
        <p className="max-w-[500px] text-sm text-[#333] font-customFont"></p>
      </div>
      <div className="bawah mt-5 flex flex-wrap justify-evenly items-center bg-white shadow-md rounded-lg">
        <div className="h-full border-r border-gray-300 pr-5">
          <div className="flex flex-col md:flex-row items-center rounded-lg">
            <div className="App">
              <div className="content flex justify-center items-center"></div>
              <CountUp enableScrollSpy className="opacity-0" />
              <br />
              <div className="flex">
                <span
                  id="counter"
                  className="text-[#00B5FF] text-4xl font-customFont font-bold"
                ></span>
                <p className="text-[#00B5FF] text-4xl font-customFont font-bold">
                  K
                </p>
              </div>
            </div>
            <p className="md:text-xl pr-10 pt-6 md:ml-5 text-sm text-gray-600 font-semibold font-customFont text-[#333]">
              Pengguna
            </p>
          </div>
          <p className="md:text-sm text-sm text-gray-600 font-regular font-customFont text-[#333]">
            Telco & IT Service
          </p>
        </div>

        <div className="flex flex-col border-r border-gray-300 pr-5">
          <div className="flex flex-col md:flex-row items-center rounded-lg">
            <div className="App">
              <div className="content"></div>
              <p className="opacity-0">0</p>
              <CountUp
                end={2500}
                enableScrollSpy
                className="text-[#00B5FF] text-4xl font-customFont font-bold"
              />
              <br />
              <span
                id="counter"
                className="text-[#333] text-xl font-customFont font-bold"
              ></span>
            </div>
            <p className="md:text-xl pt-6 md:ml-5 text-sm text-gray-600 font-semibold font-customFont text-[#333]">
              POP National
            </p>
          </div>
          <p className="md:text-sm text-sm text-gray-600 font-regular font-customFont text-[#333]">
            Coverage
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center pb-5 pl-0 rounded-lg border-r border-gray-300 pr-5">
          <div className="col">
            <div className="App">
              <div className="content"></div>
              <p className="opacity-0">0</p>
              <CountUp
                end={10}
                enableScrollSpy
                className="text-[#00B5FF] text-4xl font-customFont font-bold"
              />
              <br />
              <span
                id="counter"
                className="text-[#333] text-xl font-customFont font-bold"
              ></span>
            </div>
            <div className="App">
              <div className="content"></div>
              <CountUp
                end={27}
                enableScrollSpy
                className="text-[#00B5FF] text-4xl font-customFont font-bold"
              />
              <br />
              <span
                id="counter"
                className="text-[#333] text-xl font-customFont font-bold pb-10"
              ></span>
            </div>
          </div>
          <div className="col">
            <div className="App">
              <p className="md:text-sm pt-9 pb-3 md:ml-3 text-sm text-gray-600 font-regular font-customFont text-[#333]">
                Regional SBU
              </p>
            </div>
            <p className="md:text-sm pt-1 md:ml-3 text-sm text-gray-600 font-regular font-customFont text-[#333]">
              Brances Unit
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center rounded-lg">
            <div className="App flex">
              <div className="content flex justify-center items-center text-[#00B5FF] text-4xl font-customFont font-bold">
                1,
              </div>
              <CountUp
                end={8}
                enableScrollSpy
                className="text-[#00B5FF] text-4xl font-customFont font-bold"
              />
              <br />
              <div className="flex">
                <span
                  id="counter"
                  className="text-[#00B5FF] text-4xl font-customFont font-bold"
                ></span>
                <p className="text-[#00B5FF] text-4xl font-customFont font-bold">
                  M
                </p>
              </div>
            </div>
            <p className="md:text-xl pt-6 md:ml-5 text-sm text-gray-600 font-semibold font-customFont text-[#333]">
              Pole
            </p>
          </div>
          <p className="md:text-sm text-sm text-gray-600 font-regular font-customFont text-[#333]">
            Telco & IT Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Iklan;
