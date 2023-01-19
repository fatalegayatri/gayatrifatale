import React from "react";
import realestate from "../assets/projects/realestate.jpg";
import workImg from "../assets/projects/workImg.jpeg";
const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      <div
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center
    items-center w-full h-full"
      >
        <div className="pb-8  ">
          <p className="text-4xl font-bold inline text-gray-300 border-b-4 border-pink-600 mb-6">
            Work
          </p>
          <p className="py-6">
            <i>Check out some of my recent work</i>
          </p>
        </div>
        {/* grid items */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] flex group  contianer rounded-md  justify-center mx-auto  content-div text-center
           "
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className=" mt-5 text-2xl font-bold text-white tracking-wider text-center">
                React JS Application
              </span>

              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realestate})` }}
            className="shadow-lg shadow-[#040c16] flex group  contianer rounded-md  justify-center mx-auto  content-div text-center
           "
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className=" mt-5 text-2xl font-bold text-white tracking-wider text-center">
                React JS Application
              </span>

              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] flex group  contianer rounded-md  justify-center mx-auto  content-div text-center
           "
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className=" mt-5 text-2xl font-bold text-white tracking-wider text-center">
                React JS Application
              </span>

              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realestate})` }}
            className="shadow-lg shadow-[#040c16] flex group  contianer rounded-md  justify-center mx-auto  content-div text-center
           "
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className=" mt-5 text-2xl font-bold text-white tracking-wider text-center">
                React JS Application
              </span>

              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] flex group  contianer rounded-md  justify-center mx-auto  content-div text-center
           "
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className=" mt-5 text-2xl font-bold text-white tracking-wider text-center">
                React JS Application
              </span>

              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realestate})` }}
            className="shadow-lg shadow-[#040c16] flex group  contianer rounded-md  justify-center mx-auto  content-div text-center
           "
          >
            {/* Hover Effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className=" mt-5 text-2xl font-bold text-white tracking-wider text-center">
                React JS Application
              </span>

              <div className="pt-8 text-center">
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
