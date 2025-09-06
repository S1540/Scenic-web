import React from "react";
import StudioCard from "./StudioCard";
import image1 from "../assets/project-image1.jpg";
import image2 from "../assets/project-image2.jpg";
import image3 from "../assets/project-image3.jpg";
import image4 from "../assets/project-image4.jpg";

const Studio = () => {
  const images = [image1, image2, image3, image4];
  return (
    <>
      <div className="max-w-full bg-gray-100 ">
        <div className="text-center py-20 md:py-40 md:w-5xl mx-auto ">
          <h1 className="text-gray-800/90 text-sm font-bold uppercase tracking-[8px]">
            Introducing Scenic
          </h1>
          <p className="text-gray-800 text-3xl md:text-4xl font-thin px-2 py-5 leading-10 md:leading-14">
            This template is designed for you. Sed ornare, tortor nec placerat
            lacinia, leo quam rutrum leo, eget posuere ipsum sem eu justo.
            Integer nunc libero.
          </p>
        </div>
        <div className="md:w-7xl mx-auto flex justify-center md:justify-start flex-wrap gap-5 overflow-hidden">
          {images.map((img, index) => (
            <StudioCard key={index} image={img} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Studio;
