import React from "react";
import video from "../assets/Keyboard style.mp4";

const Home = () => {
  return (
    <>
      <div className=" relative max-w-full h-screen">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover brightness-50"
        ></video>
        <div className="absolute top-1/3 md:left-1/5 text-white text-5xl md:text-7xl max-w-2xl w-full px-4 md:px-12 leading-14 md:leading-24 font-sans font-thin">
          <h1 className="md:text-center">
            Your Website has a video background!
          </h1>
          <p className="text-sm text-start md:px-5 py-5 text-gray-300">
            Feel free to download and use HTML templates from Tooplate
          </p>
          <button className="text-base bg-green-400/90 px-6 py-2.5 font-mono hover:bg-gray-500 transition-all duration-300 ease-in cursor-pointer">
            Discover More
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
