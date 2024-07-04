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
    <div className="flex  flex-col px-20 py-[3%]">
      <div className="bawah mt-5 flex flex-wrap justify-evenly items-center  bg-white shadow-md rounded-lg">
        <div className="h-full " style={{ borderRight: "3px solid #808080" }}>
          <div className="flex flex-col md:flex-row items-center  rounded-lg">
            <div className="w-20">
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
            </div>
            <p className="md:text-xl pr-10 pt-6 md:ml-5 text-sm text-gray-600 font-semibold font-customFont text-[#333]">
              Numbers of
            </p>
          </div>
          <p className="md:text-sm text-sm text-gray-600 font-regular font-customFont text-[#333]">
            Telco & IT Service
          </p>
        </div>

        <div
          className="flex flex-col pr-20"
          style={{ borderRight: "3px solid #808080" }}
        >
          <div className="flex flex-col md:flex-row items-center  rounded-lg">
            <div className="w-20">
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
            </div>
            <p className="md:text-xl pt-6 md:ml-8 text-sm text-gray-600 font-semibold font-customFont text-[#333]">
              POP National
            </p>
          </div>
          <p className="md:text-sm   text-sm text-gray-600 font-regular font-customFont text-[#333]">
            Coverage
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center  pb-5  rounded-lg">
          <div className="pr-2 w-10">
            <div className=" pl-0">
              <div className="App ">
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

              <div className="App ">
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
          </div>

          <div
            className=" h-20 mt-4 "
            style={{ borderRight: "3px solid #808080", paddingRight: "20px" }}
          >
            <div className="App mt-6 pr-10">
              <p className="md:text-sm  md:ml-3 text-sm text-gray-600 font-bold font-customFont text-[#333]">
                Regional SBU
              </p>
            </div>
            <p className="pt-4 md:text-ms pt-1 md:ml-3 text-sm text-gray-600 font-bold font-customFont text-[#333]">
              Brances Unit
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center  rounded-lg">
            <div className="w-20 pt-4">
              <div className="App flex">
                <div className="pt-1 content flex justify-center items-center text-[#00B5FF] text-4xl font-customFont font-bold">
                  1,
                </div>
                <CountUp
                  end={8}
                  enableScrollSpy
                  className="text-[#00B5FF] text-4xl font-customFont font-bold pt-1"
                />
                <br />
                <div className="flex">
                  <span
                    id="counter"
                    className="text-[#00B5FF] text-4xl font-customFont font-bold"
                  ></span>
                  <p className="pt-1 text-[#00B5FF] text-4xl font-customFont font-bold">
                    M
                  </p>
                </div>
              </div>
            </div>
            <p className="md:text-xl pt-6 md:ml-5 text-sm text-gray-600 font-semibold font-customFont text-[#333]">
              Pole
            </p>
          </div>
          <p className="md:text-sm text-sm text-gray-600 font-regular font-customFont text-[#333]">
            SUTT, SUTM, SUTR
          </p>
        </div>
      </div>
    </div>
  );
};

export default Iklan;
