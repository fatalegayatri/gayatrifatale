import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsGithub } from "react-icons/bs";
import { Link } from "react-scroll";

const Nabar = () => {
  const [nav, setnav] = useState(false);
  const handlclick = () => setnav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-50">
      <div className="">
        <img
          src={require("../assets/logo1.png")}
          alt="logo"
          style={{ width: "50px" }}
        />
      </div>
      {/* MENU */}

      <ul className=" hidden md:flex  ">
        <li>
          {" "}
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          {" "}
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handlclick} className=" md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 flex flex-col justify-center items-center bg-[#0a192f] h-screen w-full"
        }
      >
        <li className="py-6 text-4xl">
          {" "}
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl">
          {" "}
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className=" hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="flex flex-col justify-center items-center w-[160px] h-[60px]  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              href=""
              className="flex flex-row justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="flex flex-col justify-center items-center w-[160px] h-[60px]  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#133333]">
            <a
              href=""
              className="flex flex-row justify-between items-center w-full text-gray-300"
            >
              Github <BsGithub size={30} />
            </a>
          </li>
          <li className="flex flex-col justify-center items-center w-[160px] h-[60px]  ml-[-100px] hover:ml-[-10px] duration-300  bg-red-600">
            <a
              href=""
              className="flex flex-row justify-between items-center w-full text-gray-300"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="flex flex-col justify-center items-center w-[160px] h-[60px]  ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500">
            <a
              href=""
              className="flex flex-row justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nabar;
