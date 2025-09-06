import React from "react";
import teamimg1 from "../assets/team-image1.jpg";
import teamimg2 from "../assets/team-image2.jpg";
import teamimg3 from "../assets/team-image3.jpg";
import teamimg4 from "../assets/team-image4.jpg";
import OurPeopleCard from "./OurPeopleCard";

const OurPeople = () => {
  const people = [
    { name: "Catherine Jann", level: "Head Designer", image: teamimg1 },
    { name: "Luke Wara", level: "Specility Focus", image: teamimg2 },
    { name: "Mono Mana", level: "Art Director", image: teamimg3 },
    { name: "Sara Jann", level: "Lead Designer", image: teamimg4 },
  ];
  return (
    <>
      <div className="bg-gray-100">
        <h1 className="text-3xl md:text-5xl font-thin text-center pt-36 pb-10 text-gray-800">
          Meet Our People
        </h1>
        <div className="flex flex-wrap gap-10 justify-center">
          {people.map((person, index) => (
            <OurPeopleCard
              key={index}
              person={person.name}
              level={person.level}
              image={person.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurPeople;
