import React from "react";

const StudioCard = ({ image }) => {
  return (
    <div className="p-5 w-full max-w-xl">
      <div className="relative w-full h-96 group overflow-hidden shadow-lg">
        <img
          src={image}
          alt="Project"
          className="w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
          <h1 className="text-white text-4xl md:text-5xl font-thin">
            Lorem, ipsum dolor.
          </h1>
          <span className="text-sm font-semibold text-white mt-2">
            Lorem ipsum dolor sit amet.
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudioCard;
