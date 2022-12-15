import React from "react";

const test = () => {
  return (
    <div>
      <div className="fixed flex items-center justify-center left-0 top-0 w-full h-16 bg-navbar z-[100] ease-in-out duration-300">
        <div className="flex items-center space-x-2">
          <GiTimeBomb className="text-blacky text-4xl" />
          <div className="text-blacky font-bold text-4xl font-quicksand">
            Ranggo Pato
          </div>
        </div>

        {/* thesidebar */}
      </div>
      <div
        className={`${
          shadow
            ? ""
            : "fixed flex items-center justify-center space-x-[10rem] left-0 top-16 w-full h-12 bg-test z-[100] text-navbar font-ibm font-bold  "
        } transform transition duration-1000 ease-in-out `}
      >
        <Link href="#" className="hover:text-white/90 ">
          Home
        </Link>
        <Link href="#" className="hover:text-white/90 ">
          About
        </Link>
        <Link href="#" className="hover:text-white/90 ">
          Skills
        </Link>
        <Link href="#" className="hover:text-white/90 ">
          Resume
        </Link>
        <Link href="#" className="hover:text-white/90 ">
          Contact
        </Link>
      </div>
      <div
        className={
          shadow
            ? "hidden"
            : "fixed flex items-center justify-center space-x-5 left-0 top-28 w-full h-8 bg-kuning z-[100] ease-in-out duration-300"
        }
      >
        <BsEmojiSunglasses />
        <p className="font-ibm text-cokelat">
          Rabu Kelabu, Selamat datang di Portofolio singkat saya !
        </p>
      </div>
    </div>
  );
};

export default test;
