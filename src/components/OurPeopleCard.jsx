import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const OurPeopleCard = ({ person, level, image }) => {
  return (
    <div className="p-5 max-w-80 w-full sm:w-72">
      {/* Image Box */}
      <div className="relative w-full h-68 group overflow-hidden shadow-md">
        <img
          src={image}
          alt={person}
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

      {/* Text */}
      <div className="text-center mt-4">
        <h1 className="text-lg font-medium text-gray-600">{person}</h1>
        <p className="text-lg font-bold text-gray-800 tracking-wide">{level}</p>
      </div>
    </div>
  );
};

export default OurPeopleCard;
