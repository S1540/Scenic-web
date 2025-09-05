import React from "react";

const StudioCard = ({ image }) => {
  return (
    <>
      <div className="max-w-xl h-96 overflow-x-hidden overflow-y-hidden ">
        <img
          src={image}
          alt="Project-image-1"
          className="w-full px-5 md:mx-5  hover:scale-105 transition-all duration-500 ease-in-out overflow-x-hidden overflow-y-hidden"
        />
      </div>
    </>
  );
};

export default StudioCard;
