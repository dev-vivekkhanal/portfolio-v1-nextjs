import { useEffect, useState } from "react";
import Logo from "./Logo";
import ResumeButton from "./ResumeButton";
import Link from "next/link";
import { motion } from "framer-motion";

import React from "react";
import Image from "next/image";
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState("");

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 15) {
        setNavBg("bg-[#000000f2]");
      } else if (window.scrollY < 15) {
        setNavBg("");
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: "-20vh", opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      ease="easeIn"
      className={`${navBg} fixed w-full text-white  z-50 `}
    >
      <div className="flex justify-between items-center p-2 md:px-4 lg:px-6 text-sm md:text-base">
        <Logo />
        <div
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="md:hidden bg-indigo-700  h-[40px] w-[40px] flex flex-col justify-between items-center rounded-full py-3 cursor-pointer active:scale-95 transition shadow-lg"
        >
          <p className="h-[2px] w-[60%] bg-white "></p>
          <p className="h-[2px] w-[60%] bg-white "></p>
          <p className="h-[2px] w-[60%] bg-white "></p>
        </div>
        <ul className="hidden md:flex ">
          <Link href="/#project-section">
            <li className="p-5 mx-2 lg:mx-3 cursor-pointer border-b-4 border-transparent hover:border-slate-300 ">
              Projects
            </li>
          </Link>
          <Link href="/#about-section">
            <li className="p-5 mx-2 lg:mx-3 cursor-pointer border-b-4 border-transparent hover:border-slate-300 ">
              About
            </li>
          </Link>
          <Link href="/#contact-section">
            <li className="p-5 mx-2 lg:mx-3 cursor-pointer border-b-4 border-transparent hover:border-slate-300 ">
              Contact
            </li>
          </Link>
        </ul>
        <ResumeButton />
      </div>

      {/* sidebar for smaller screen */}
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.1 }}
        ease="easeIn"
        className={`bg-gradient-to-b from-[#010330] via-[#000020] to-[#000000] text-white absolute top-0 w-screen h-screen transition-all flex flex-col items  `}
      >
        <div
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="bg-white h-[40px] w-[40px] flex flex-col justify-center items-center rounded-full mt-[20px] mr-[8px] cursor-pointer active:scale-95 transition self-end m-2 shadow-lg"
        >
          <p className="h-[2px] w-[60%] bg-indigo-700 -rotate-[47deg]"></p>
          <p className="h-[2px] w-[60%] bg-indigo-700 rotate-45 "></p>
        </div>

        <div className=" flex flex-col justify-around items-center h-[70vh] ">
          <Link href="/">
            <li className="p-5 w-full text-center cursor-pointer border-l-4 border-transparent hover:border-white transition-all">
              Home
            </li>
          </Link>
          <Link href="/#project-section">
            <li className="p-5 w-full text-center cursor-pointer  border-l-4 border-transparent hover:border-white transition-all">
              Projects
            </li>
          </Link>
          <Link href="/#about-section">
            <li className="p-5 w-full text-center cursor-pointer  border-l-4 border-transparent hover:border-white transition-all">
              About
            </li>
          </Link>
          <Link href="/#contact-section">
            <li className="p-5 w-full text-center cursor-pointer  border-l-4 border-transparent hover:border-white transition-all">
              Contact
            </li>
          </Link>
          <li className="p-4 px-9 active:scale-95  text-center cursor-pointer   border-transparent bg-white text-black transition-all">
            Resume
          </li>
        </div>
      </motion.div>
    </motion.header>
  );
}

export default Header;
