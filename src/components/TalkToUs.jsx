import React from "react";
import backgroundImage from "../assets/background-image.jpg";

const TalkToUs = () => {
  return (
    <>
      <div className="relative max-w-full h-screen overflow-hidden">
        <img
          src={backgroundImage}
          alt="background-image"
          className="object-cover h-full w-full"
        />

        {/* Title */}
        <div className="absolute inset-0 text-center py-10 text-4xl md:text-5xl font-thin tracking-widest">
          <h1>Talk To Us!</h1>
        </div>

        <form className="absolute inset-0 max-w-3xl w-full flex flex-col items-center justify-center px-5 mx-auto gap-5">
          <div className="flex gap-5 w-full">
            <input
              type="text"
              placeholder="Name"
              required
              className="bg-white px-4 py-3.5 w-1/2 rounded-sm outline-0"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="bg-white px-4 py-3.5 w-1/2 rounded-sm outline-0"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            required
            className="px-4 py-3.5 bg-white w-full rounded-sm outline-0"
          />
          <textarea
            name=""
            placeholder="Message"
            className="bg-white w-full px-4 py-3.5 h-36 rounded-sm text-gray-950 outline-0"
          ></textarea>

          <button
            type="submit"
            className="text-base bg-green-400/90 px-6 py-2.5 font-mono hover:bg-gray-500 transition-all duration-300 ease-in cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default TalkToUs;
