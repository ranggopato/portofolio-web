import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full bg-test h-screen text-center font-ibm">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <p className="uppercase text-2xl pt-5 md:text-4xl tracking-widest text-slate-300">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <h1 className="py-4 text-slate-300">
            Hi, Im <span className="text-navbar font-bold"> Ranggo Pato</span>
          </h1>
          <h1 className="py-2 text-xl md:text-3xl text-slate-300">
            A Full Stack Developer
          </h1>
          <p className="py-4 text-slate-300 sm:max-w-[70%] m-auto">
            An experienced as a full stack developer with various programming
            skills that can be developed further with strong passion to learn
            new things fastly. Highly skilled in communication, collaboration
            and technical documentation. Proficient in React, NextJs, SQL,
            Golang, NodeJs and Python. Currently I am interested and learning
            about mobile developer
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/ranggo-pato-676435192/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg bg-cokelat shadow-kuning p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="text-navbar" />
              </div>
            </a>
            <a
              href="https://github.com/ranggopato"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg bg-cokelat shadow-kuning p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub className="text-navbar" />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg bg-cokelat shadow-kuning p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="text-navbar" />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg bg-cokelat shadow-kuning p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill className="text-navbar" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
