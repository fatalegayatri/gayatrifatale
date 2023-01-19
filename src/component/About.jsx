import React from "react";

const About = () => {
  return (
    <div name="about" className="  w-full  h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center  w-full h-full">
        <div className="max-w-[100px] w-full px-4 grid grid-cols-2   gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
            <div></div>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid  sm:grid-cols-2 gap-8 pl-4">
          <div className="sm:text-center text-4xl font-bold ">
            <p>Hi. I'm Gayatri nice to meet you. Please take look around.</p>
          </div>

          <div className="">
            <p>
              I am passionate about building excellent software that imporves
              the lives of those around me. I specialie in creating software
              taht improves the lives of those around me. I specialize in
              creating software for clinets ranging from individuals and
              small-businesses all the way to large enterprise corporations.
              what would you do if you had a software expert available at your
              fingertips
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
