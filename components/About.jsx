import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TypeWriter from './TypeWriter';

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
          I am a programmer and a learner who really likes programming. every
          day I learn new things related to programming languages or their
          implementation in the world of work, and I also really like algorithms
          a lot, With 2 years of professional experience I have learned various
          programming languages. This is due to my love of learning and
          recognizing new things, I hope that later I can contribute to
          advancing the development of IT in Indonesia
        </p>
      </div>
    </div>
  );
};

export default About;
