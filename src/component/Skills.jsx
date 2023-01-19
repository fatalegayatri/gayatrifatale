import React from "react";
import javascript from "../assets/javascript.png";
const Skills = () => {
  return (
    <div name="skills" className=" w-full  h-full bg-[#0a192f] text-gray-300">
      {/* container */}
      <div
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full
      "
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">
            <q>These are the technologies I've worked with</q>
          </p>
        </div>
        <div className="w-full grid  gap-5 grid-cols-2 text-center py-8 sm:grid-cols-4   ">
          <div className="  py-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={require("../assets/html.png")}
              alt=""
            />
            <p my-4>HTML</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={require("../assets/css.png")}
              alt=""
            />
            <p my-4>CSS</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={require("../assets/javascript.png")}
              alt=""
            />
            <p my-4>Javascript</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={require("../assets/react.png")}
              alt=""
            />
            React{" "}
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={require("../assets/tailwind.png")}
              alt=""
            />
            <p my-4>tailwind</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={require("../assets/node.png")}
              alt=""
            />
            <p my-4>Node</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={require("../assets/github.png")}
              alt=""
            />
            <p my-4>Github</p>
          </div>
          <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
              alt="java"
            />
            <p my-4>Java</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
