import React, { useState, useEffect } from "react";
import { HiOutlineBars4 } from "react-icons/hi2";

const Header = () => {
  const menuItems = ["HOME", "STUDIO", "OUR PEOPLE", "LETS TALK"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  });
  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 bg-[#4DC47D] p-5 text-white ${
          isScrolled
            ? "bg-[#4DC47D] shadow-md transition-all duration-300 ease-in-out"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between px-2 md:justify-around items-center ">
          <h1 className="text-2xl md:text-3xl">Scenic</h1>
          <div className="space-x-8 hidden md:block">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:underline transition-all duration-300 ease-in-out cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <HiOutlineBars4 size={32} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
