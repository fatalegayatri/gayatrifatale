import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full flex p-4 items-center justify-center  h-screen bg-[#0a192f]"
    >
      <form
        method="POST"
        action="https://getform.io/f/ff8f15b5-7d36-4153-90bd-c47c9c12dd07"
        className="flex flex-col max-w-[600px] w-full mt-6"
      >
        <div className="pb-8 mt-5">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            <q>
              Submit the form below or shoot me an email -
              fatalegayatri24@gmail.com
            </q>{" "}
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className=" p-2 bg-[#ccd6f6]"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Massage"
          className="bg-[#ccd6f6] p-2"
        ></textarea>
        <button className=" px-2  border border-1 border-gray-300 flex items-center justify-center py-2 my-8 border-1 text-gray-300 self-center    hover:text-gray-300 hover:bg-pink-600 ">
          let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
