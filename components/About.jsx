import React from "react";
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "./TypeWriter";

const About = () => {
  return (
    <div id="about" className="w-full  p-2 flex-col ">
      <div className="flex  justify-center">
        <div className="border-4 border-navbar font-ibm font-bold text-2xl p-4 bg-test text-navbar animate-type">
          Quote of the Day
        </div>
      </div>
      <div className="flex m-8 justify-center">
        <div className="font-ibm font-bold text-xl p-4 text-cokelat ">
          <div>
            <TypeWriter />
          </div>
        </div>
      </div>

      <div className="flex items-center m-4">
        <div className="flex-grow h-[4px] bg-cokelat"></div>

        <span className="flex-shrink text-2xl text-cokelat hover:bg-navbar border-b-8 border-navbar border-opacity-40 px-4 font-ibm ease-in-out duration-300 delay-100">
          About Me
        </span>

        <div className="flex-grow h-[4px] bg-cokelat"></div>
      </div>
      <div className="px-4 md:px-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default About;
