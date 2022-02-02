import Link from "next/link";
import Socials from "./Socials";
import Waves from "./Waves";
import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ease="easeIn"
      className="relative text-center bg-[url('../assets/images/homeBg.webp')] bg-cover bg-no-repeat bg-center  text-white"
    >
      <div className="bg-[#00000080] h-[90vh] lg:h-screen   pt-[200px]">
        <p className="text-2xl lg:text-[28px]">Plan &gt; Build &gt; Optimise</p>
        <p className="text-[2.5rem]   max-w-2xl  m-auto mt-12 sm:text-6xl md:text-6xl lg:text-7xl lg:max-w-3xl  lg:leading-tight">
          I build awesome web apps using modern workflows
        </p>
        <div>
          <Link href="/#contact-section">
            <button className="p-3 px-6 lg:px-12 mx-5 mt-10 cursor-pointer active:scale-95 transition-all bg-[#5951ee] hover:bg-[#443bec] rounded sm:text-xl">
              Hire Me
            </button>
          </Link>
          <Link href="/#project-section">
            <button className="p-3 px-6 lg:px-12 mx-5 mt-10 cursor-pointer active:scale-95 transition-all bg-[#5951ee] hover:bg-[#443bec] rounded sm:text-xl">
              My Work
            </button>
          </Link>
        </div>

        <Socials />

        <div className="absolute bottom-10   w-full">
          <Link href="/#project-section">
            <span>Projects</span>
          </Link>
          <hr className="w-32 m-auto rotate-90 mt-[70px] border-[#ffffff]" />
        </div>

        <Waves />
      </div>
    </motion.section>
  );
}

export default Home;
