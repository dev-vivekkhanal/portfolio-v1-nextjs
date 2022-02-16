import Image from "next/image";
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";
import Atlas from "../../assets/images/atlas.png";
import Gmail from "../../assets/images/gmail.png";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactWrapper from "./ContactWrapper";

function Contact() {
  const [opacity, setOpacity] = useState("opacity-0");
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const slideToLeft = useAnimation();

  useEffect(() => {
    if (inView) {
      slideToLeft.start({
        x: 0,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      slideToLeft.start({
        x: "100vw",
        transition: {
          duration: 1,
        },
      });
    }
  }, [inView]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const copyButton = () => {
    copyText("dev.vivekkhanal@gmail.com");
    setOpacity("opacity-100");
    sleep(1500).then(() => {
      setOpacity("opacity-0");
    });
  };

  function copyText(entryText) {
    navigator.clipboard.writeText(entryText);
  }

  return (
    <section
      ref={ref}
      id="contact-section"
      className=" pt-[100px] overflow-hidden"
    >
      <motion.h1
        animate={slideToLeft}
        ease="easeIn"
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-gray-200  text-right mb-5 mr-5 "
      >
        GET IN TOUCH
      </motion.h1>
      <ContactWrapper>
        <div className="w-[90%] md:w-[80%] lg:w-[60%]   mx-auto  md:flex  rounded-l-3xl h-full mb-[50px] shadow-xl rounded-3xl ">
          <div className="md:w-[50%] rounded-l-3xl ">
            <div className="bg-gradient-to-t from-[#010330] via-[#000020] to-[#000000] h-full w-full rounded-t-3xl md:rounded-t-none md:rounded-l-xl text-white p-5">
              <div>
                <h1 className="text-2xl md:text-4xl my-5 md:my-10 font-semibold">
                  Contact Information
                </h1>
                <p className="text-base md:text-lg">
                  Fill up the form and I will get back to you as soon as
                  possible
                </p>
              </div>
              <div className="w-[100%] sm:w-[80%] mx-auto">
                <Image src={Atlas} />
              </div>

              <div className=" mx-auto">
                <div className=" justify-center flex items-center bg-[#000020] p-1  rounded space-x-2 md:space-x-5">
                  <div className="w-[20px] ms:[w-[30px] ">
                    <Image src={Gmail} />
                  </div>
                  <a
                    href="mailto:dev.vivekkhanal@gmail.com"
                    className="text-sm md:text-base"
                  >
                    dev.vivekkhanal@gmail.com
                  </a>
                  <div className="relative">
                    <span
                      className={` text-xs bg-slate-200 text-black rounded-lg p-2 font-semibold absolute top-[-200%] right-[-10px] ease-in transition-all ${opacity}`}
                    >
                      Copied
                    </span>
                    <svg
                      onClick={copyButton}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[20px] ms:[w-[30px] cursor-pointer active:scale-75 active:fill-slate-200 transition-all fill-slate-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                    </svg>
                  </div>
                </div>

                <div className=" flex   justify-center p-5   items-start">
                  <a
                    href="https://www.linkedin.com/in/vivek-khanal-793016231/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-300 p-1 mr-5 rounded-full flex justify-center items-center scale-90 cursor-pointer hover:bg-slate-100 transition-all active:bg-slate-500"
                  >
                    <Image
                      src={Linkedin}
                      alt="Linkedin icon"
                      height={25}
                      width={25}
                      layout="fixed"
                    />
                  </a>
                  <a
                    href="https://github.com/dev-vivekkhanal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={Github}
                      alt="Linkedin icon"
                      height={30}
                      width={30}
                      layout="fixed"
                      className="bg-clip-content  bg-slate-300 rounded-full cursor-pointer hover:bg-slate-100 transition-all active:bg-slate-500"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </ContactWrapper>
    </section>
  );
}

export default Contact;
