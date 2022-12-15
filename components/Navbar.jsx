import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";

import { GiSharpSmile } from "react-icons/gi";
import { IoMdSend } from "react-icons/io";

import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div>
      <div className={`${shadow ? "" : ""}`}>
        {shadow ? (
          <div className="fixed flex items-center justify-center left-0 top-0 w-full h-12 bg-navbar z-[100] ease-in-out duration-300">
            <div className="flex items-center space-x-2 ">
              <div className="rounded-full animate-bounce shadow-lg bg-cokelat  p-1 cursor-pointer hover:scale-110 ease-in duration-300">
                <GiSharpSmile className="text-base text-kuning sm:text-xl md:text-2xl " />
              </div>

              <p className="font-ibm text-cokelat uppercase animate-bounce text-[10px] sm:text-[12px] md:text-2xl">
                welcome to my portfolio
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="fixed flex items-center justify-between md:justify-center px-4 left-0 top-0 w-full h-16 bg-navbar z-[100] ease-in-out duration-300">
              <div className="flex items-center space-x-2">
                <FiCodesandbox className="text-navbar fill-blacky  text-4xl" />

                <div className=" text-blacky font-bold text-2xl md:text-4xl font-quicksand">
                  Ranggo Pato
                </div>
              </div>
              <div onClick={handleNav} className="flex md:hidden">
                <AiOutlineMenu className="text-2xl font-bold" />
              </div>

              {/* thesidebar */}
            </div>
            <div className="hidden fixed md:flex items-center justify-center space-x-[6rem] left-0 top-16 w-full h-12 bg-test z-[100] text-navbar font-ibm font-bold  ">
              <Link href="/#home" className="hover:text-white/90 ">
                Home
              </Link>
              <Link href="/#about" className="hover:text-white/90 ">
                About
              </Link>
              <Link href="/#skills" className="hover:text-white/90 ">
                Skills
              </Link>
              <Link href="/#projects" className="hover:text-white/90 ">
                Projects
              </Link>
              <Link href="/resume" className="hover:text-white/90 ">
                Resume
              </Link>
              <Link href="/#contact" className="hover:text-white/90 ">
                Contact
              </Link>
            </div>
            <div className="fixed flex  items-center justify-center space-x-1 sm:space-x-2 md:space-x-5 left-0 top-16 md:top-28 w-full h-12 bg-kuning z-[100] ease-in-out duration-300">
              <div className="rounded-full animate-bounce shadow-lg bg-cokelat  p-1 cursor-pointer hover:scale-110 ease-in duration-300">
                <GiSharpSmile className="text-base text-navbar sm:text-xl md:text-2xl " />
              </div>

              <p className="font-ibm text-cokelat uppercase animate-bounce text-[10px] sm:text-[12px] md:text-2xl">
                welcome to my portfolio
              </p>
            </div>
          </div>
        )}
      </div>
      <div
        className={
          nav
            ? "md:hidden z-[200] fixed left-0 top-0 w-full h-screen bg-black/70 text-white"
            : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[100%]  h-screen overflow-scroll bg-test  ease-in duration-500 "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between p-4">
              <Link
                onClick={handleNav}
                className="border-2 border-navbar p-2"
                href="/"
              >
                <div className="text-xl">Welcome to My Portofolio</div>
              </Link>
              <div onClick={handleNav} className=" bg-kuning   cursor-pointer">
                <AiOutlineClose className="text-2xl text-navbar" />
              </div>
            </div>
          </div>
          <div className="flex flex-col  ">
            <ul className="flex flex-col space-y-4 uppercase">
              <Link
                onClick={() => setNav(false)}
                className="flex justify-between border-b border-navbar"
                href="/"
              >
                <li className="p-4  text-xl">Home</li>
                <li className="p-4 text-xl">
                  <IoMdSend className="text-navbar" />
                </li>
              </Link>
              <Link
                href="/#about"
                onClick={() => setNav(false)}
                className="flex justify-between border-b border-navbar"
              >
                <li className="p-4 text-xl">About</li>
                <li className="p-4 text-xl">
                  <IoMdSend className="text-navbar" />
                </li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                className="flex justify-between border-b border-navbar"
                href="/#skills"
              >
                <li className="p-4 text-xl">Skills</li>
                <li className="p-4 text-xl">
                  <IoMdSend className="text-navbar" />
                </li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                className="flex justify-between border-b border-navbar"
                href="/#projects"
              >
                <li className="p-4 text-xl">Projects</li>
                <li className="p-4 text-xl">
                  <IoMdSend className="text-navbar" />
                </li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                className="flex justify-between border-b border-navbar"
                href="/resume"
              >
                <li className="p-4 text-xl">Resume</li>
                <li className="p-4 text-xl">
                  <IoMdSend className="text-navbar" />
                </li>
              </Link>
              <Link
                onClick={() => setNav(false)}
                className="flex justify-between border-b border-navbar"
                href="/#contact"
              >
                <li className="p-4 text-xl">Contact</li>
                <li className="p-4 text-xl">
                  <IoMdSend className="text-navbar" />
                </li>
              </Link>
            </ul>
            <div className="p-10">
              <p className="uppercase tracking-widest text-kuning">
                Connect With Me !!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/ranggo-pato-676435192/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-kuning p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn className="text-navbar" />
                  </div>
                </a>
                <a
                  href="https://github.com/ranggopato"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-kuning p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub className="text-navbar" />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-kuning p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail className="text-navbar" />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-kuning p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill className="text-navbar" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
