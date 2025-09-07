import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const OurPeopleCard = ({ person, level, image }) => {
  return (
    <>
      <div className="p-5 w-60">
        <div className="relative max-w-60 max-h-60  group overflow-hidden shadow-md">
          <img
            src={image}
            alt="unloaded-image"
            className="w-full h-full object-cover transform transition duration-500 ease-in group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition duration-500">
            <a
              href="#"
              className="text-white text-3xl hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a href="#">
              <BsWhatsapp className="text-white text-3xl hover:text-green-500 transition duration-300" />
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-lg font-[400] text-gray-600 mt-4 mb-1">
            {person}
          </h1>
          <p className="text-lg font-bold text-gray-800 tracking-widest">
            {level}
          </p>
        </div>
      </div>
    </>
  );
};

export default OurPeopleCard;
