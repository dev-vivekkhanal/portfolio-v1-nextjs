import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Netflix1 from "../../assets/images/netflix-1.webp";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

function ProjectTwo() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const slideToLeft = useAnimation();

  useEffect(() => {
    if (inView) {
      slideToLeft.start({
        x: 0,
        transition: {
          duration: 1.5,
          type: "spring",
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      slideToLeft.start({
        x: "100vw",
        transition: {
          duration: 1.5,
        },
      });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
        animate={slideToLeft}
        ease="easeIn"
        className="md:flex md:flex-row-reverse bg-white p-2 py-10 rounded-lg border-b-2"
      >
        <div className="md:w-3/6 mb-5 md:mb-0 md:mr-5 relative ">
          <Image
            src={Netflix1}
            alt="Netflix screenshot"
            className="rounded-xl "
          />
        </div>
        <div className="md:w-3/6 ">
          <div className="md:flex md:flex-col justify-center w-[80%]">
            <h2 className="text-[#6366f1] font-medium text-2xl lg:text-4xl mb-1 lg:mb-4">
              Netflix Clone
            </h2>
            <p className="mb-2">
              Netflix is a streaming service that allows members to watch TV
              shows and movies without commercials on an internet-connected
              device.
            </p>
            <h3 className="text-xl  font-semibold ">Features</h3>
            <p className="mb-2">
              User Authentication | Server Side Rendering | Lazy Load | API
              integration
            </p>
            <h3 className="text-xl  font-semibold ">Technologies used</h3>
            <p className="mb-5">
              HTML | CSS | Tailwind CSS | React | Next Js | Firebase | Node Js
            </p>
            <div>
              <button className="bg-[#5951ee] hover:bg-[#443bec] active:scale-95 transition-all text-white p-3 px-6 rounded cursor-pointer mr-5 ">
                Code
              </button>
              <button className="bg-[#5951ee] hover:bg-[#443bec] active:scale-95 transition-all text-white p-3 px-6 rounded cursor-pointer ">
                Live
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectTwo;
