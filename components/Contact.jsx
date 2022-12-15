import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full p-2 lg:h-screen">
      <div className="flex items-center m-4">
        <div className="flex-grow h-[4px] bg-cokelat"></div>

        <span className="flex-shrink text-2xl text-cokelat hover:bg-navbar border-b-8 border-navbar border-opacity-40 uppercase px-4 font-ibm ease-in-out duration-300 ">
          Contact
        </span>

        <div className="flex-grow h-[4px] bg-cokelat"></div>
      </div>
      <div className="px-4 flex flex-col md:px-10">
        <h1 className="text-blacky text-2xl font-ibm font-bold">
          Get in Touch
        </h1>
      </div>
      <div className="m-auto p-4  w-full font-ibm ">
        <div className="grid p-4 lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-cokelat rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 text-cokelat font-bold text-2xl">
                  Ranggo Pato
                </h2>
                <p>Full Stack Engineer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and lets talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href="https://www.linkedin.com/in/ranggo-pato-676435192/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-kuning bg-cokelat p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn className="text-navbar" />
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/ranggopato"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-kuning bg-cokelat p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub className="text-navbar" />
                    </div>
                  </Link>

                  <div className="rounded-full shadow-lg shadow-kuning bg-cokelat p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail className="text-navbar" />
                  </div>
                  <Link href="/resume">
                    <div>
                      <div className="rounded-full shadow-lg shadow-kuning bg-cokelat p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill className="text-navbar" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-cokelat rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-cokelat outline-navbar"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-cokelat outline-navbar"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-cokelat outline-navbar"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-cokelat outline-navbar"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 outline-navbar border-cokelat"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>

                <button className="w-full p-4 bg-cokelat text-navbar  mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div>
              <div className="rounded-full shadow-lg shadow-kuning bg-cokelat p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-navbar" size={30} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
