import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { GiSharpSmile } from "react-icons/gi";

const Navbar = ({ onFormSubmit }) => {
  const [shadow, setShadow] = useState(false);
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
            <div className="flex md:hidden">
              <AiOutlineMenu className="text-2xl font-bold" />
            </div>

            {/* thesidebar */}
          </div>
          <div className="hidden fixed md:flex items-center justify-center space-x-[6rem] left-0 top-16 w-full h-12 bg-test z-[100] text-navbar font-ibm font-bold  ">
            <Link href="#home" className="hover:text-white/90 ">
              Home
            </Link>
            <Link href="#about" className="hover:text-white/90 ">
              About
            </Link>
            <Link href="#skills" className="hover:text-white/90 ">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-white/90 ">
              Projects
            </Link>
            <Link href="#" className="hover:text-white/90 ">
              Resume
            </Link>
            <Link href="#contact" className="hover:text-white/90 ">
              Contact
            </Link>
          </div>
          <div className="fixed flex  items-center justify-center space-x-1 sm:space-x-2 md:space-x-5 left-0 top-16 md:top-28 w-full h-10 bg-kuning z-[100] ease-in-out duration-300">
            <BsEmojiSunglasses className="text-base animate-bounce sm:text-xl md:text-2xl " />
            <p className="font-ibm text-cokelat animate-bounce text-[10px] sm:text-[12px] md:text-xl">
              Rabu Kelabu, Selamat datang di Portofolio singkat saya !
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
