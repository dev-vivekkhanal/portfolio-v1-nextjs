import { useEffect, useState } from "react";
import Logo from "./Logo";
import ResumeButton from "./ResumeButton";
import Image from "next/image";
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";
import Link from "next/link";
import { motion } from "framer-motion";

function Header() {
  const [menuStatus, setMenuStatus] = useState("invisible");
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
          className="md:hidden bg-[#4f46e5] h-[40px] w-[40px] flex flex-col justify-between items-center rounded-full py-3 cursor-pointer active:scale-95 transition shadow-lg"
          onClick={() => {
            setMenuStatus("block");
          }}
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
      <div
        className={`bg-[#5951ee] text-white absolute top-0 w-screen h-screen transition-all flex flex-col items ${menuStatus}  `}
      >
        <div
          className="bg-[#4f46e5] h-[40px] w-[40px] flex flex-col justify-center items-center rounded-full mt-[20px] mr-[8px] cursor-pointer active:scale-95 transition self-end m-2 shadow-lg"
          onClick={() => {
            setMenuStatus("invisible");
          }}
        >
          <p className="h-[2px] w-[60%] bg-white -rotate-[47deg]"></p>

          <p className="h-[2px] w-[60%] bg-white rotate-45 "></p>
        </div>

        <div className=" flex flex-col justify-around items-center h-[70vh] ">
          <Link href="/">
            <li
              onClick={() => {
                setMenuStatus("invisible");
              }}
              className="p-5 w-full text-center cursor-pointer border-l-4 border-transparent hover:border-white transition-all"
            >
              Home
            </li>
          </Link>
          <Link href="/#project-section">
            <li
              onClick={() => {
                setMenuStatus("invisible");
              }}
              className="p-5 w-full text-center cursor-pointer  border-l-4 border-transparent hover:border-white transition-all"
            >
              Projects
            </li>
          </Link>
          <Link href="/#about-section">
            <li
              onClick={() => {
                setMenuStatus("invisible");
              }}
              className="p-5 w-full text-center cursor-pointer  border-l-4 border-transparent hover:border-white transition-all"
            >
              About
            </li>
          </Link>
          <Link href="/#contact-section">
            <li
              onClick={() => {
                setMenuStatus("invisible");
              }}
              className="p-5 w-full text-center cursor-pointer  border-l-4 border-transparent hover:border-white transition-all"
            >
              Contact
            </li>
          </Link>
          <li
            onClick={() => {
              setMenuStatus("invisible");
            }}
            className="p-5 w-full text-center cursor-pointer  border-l-4 border-transparent hover:border-white transition-all"
          >
            Resume
          </li>
        </div>
        <div className="scale-75 pt-[50px]  w-[200px] m-auto flex justify-between items- items-center  ">
          <Image
            src={Linkedin}
            alt="Linkedin icon"
            height={50}
            width={50}
            layout="fixed"
            className="  cursor-pointer"
          />

          <Image
            src={Github}
            alt="Linkedin icon"
            height={55}
            width={55}
            layout="fixed"
            className="scale-105 cursor-pointer "
          />
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
