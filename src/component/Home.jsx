import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div
      name="home"
      className="
  bg-[#0a192f] w-full h-screen"
    >
      {" "}
      {/* container */}
      <div className="max-w-[1000px] mx-auto  flex px-8 flex-col justify-center h-full">
        <p className="text-pink-600"> Hi, my name is </p>
        <h1 className="text-4xl sm:7xl font-bold text-[#ccd6f6]">
          Gayatri Fatale
        </h1>
        <h2 className="text-[#8892b0] text-4xl sm:text-7xl font-bold">
          {" "}
          I'm Front-End & Java Developer .
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] ">
          {" "}
          I'm a front-end developer specialiding im foucesed on (desinging)
          exceptional experiences.{" "}
        </p>
        <div className=" ">
          <button className="text-white group border px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-white">
            View Project{" "}
            <span className=" group-hover:rotate-90 duration-300">
              <HiOutlineArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
