import Skills from "./Skills";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const slideToRight = useAnimation();

  useEffect(() => {
    if (inView) {
      slideToRight.start({
        x: 0,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      slideToRight.start({
        x: "-100vw",
        transition: {
          duration: 1,
        },
      });
    }
  }, [inView]);

  return (
    <section ref={ref} id="about-section" className="py-[50px] pt-[100px]">
      <motion.h1
        animate={slideToRight}
        ease="easeIn"
        className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-gray-200     ml-5 "
      >
        ABOUT ME
      </motion.h1>
      <div className="w-[95%] mx-auto sm:w-[90%] lg:flex   justify-center items-center">
        <div className="text-base sm:text-lg  w-fit max-w-xl sm:mx-[50px] md:ml-[90px] ">
          <h3 className="text-3xl font-semibold text-[#4f46e5]  ">Who am I?</h3>
          <p className="mt-5">
            Hi there, my name is{" "}
            <strong className="text-[#6366f1] text-xl sm:text-2xl font-medium">
              Vivek Khanal
            </strong>
            . I m a{" "}
            <strong className="text-[#6366f1] text-xl sm:text-2xl font-medium">
              {" "}
              Web Developer{" "}
            </strong>{" "}
            and{" "}
            <strong className="text-[#6366f1] text-xl sm:text-2xl font-medium">
              {" "}
              Electronics & Communication Engineer
            </strong>
            . I help designers, small agencies and businesses bring their ideas
            to life. Check out my projects to see what I m capable of. Feel free
            to connect or follow me on my LinkedIn.
          </p>

          <a
            href="/resume.pdf"
            download="Vivek-Khanal-Resume.pdf"
            className="w-[150px] mt-10 flex justify-between items-center bg-gradient-to-r from-[#080c55] to-[#030349] text-white p-3 rounded-md cursor-pointer active:scale-95 transition-all"
          >
            <span className="mr-2">Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
        <Skills />
      </div>
    </section>
  );
}

export default About;
