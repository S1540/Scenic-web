import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 pt-20 flex flex-wrap justify-around items-start px-5 md:px-20 ">
        <div className="w-full md:w-1/3 px-2">
          <h1 className="text-3xl font-thin py-6">Digital Studio</h1>
          <p className="text-gray-500">
            321 Donec et justo id risus, Malesuada pharetra, Tristique
            vestibulum, Lorem ipsum dolor Lorem ipsum dolor sit amet.
            vestibulum, Lorem
          </p>
        </div>
        <div className="w-full md:w-1/3 text-gray-500 px-2">
          <h1 className="text-3xl font-thin py-6 text-black">Keep in touch</h1>
          <p>+1 234 567 890</p>
          <p className="mt-3">email@example.com</p>
          <p className="mt-3">Our Location</p>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <h1 className="text-3xl font-thin py-6">About Us</h1>
          <p className="text-gray-500">
            Sed vestibulum posuere ante, eget blandit metus. Morbi sodales
            feugiat erat, et placerat sapien suscipit ut.
          </p>
        </div>

        <span className="text-start py-10 text-gray-800 font-medium">
          Copyright © 2018 Company Name | Design: Tooplate
        </span>
      </footer>
    </>
  );
};

export default Footer;
