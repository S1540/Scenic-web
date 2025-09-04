import React from "react";
import video from "../assets/Keyboard style.mp4";

const Home = () => {
  return (
    <>
      <div className="max-w-full h-screen">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover brightness-50"
        ></video>
      </div>
    </>
  );
};

export default Home;
