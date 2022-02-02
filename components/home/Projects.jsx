import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
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

  return (
    <section
      ref={ref}
      id="project-section"
      className=" pt-[100px] overflow-hidden"
    >
      <motion.h1
        animate={slideToLeft}
        ease="easeIn"
        className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-gray-200  text-right mb-5 mr-5 "
      >
        PROJECTS
      </motion.h1>
      <div className=" mx-auto w-[95%] sm:w-[80%] md:w-[95%] xl:w-[80%] pt-[50px] pb-[50px] space-y-[150px]">
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
      </div>
    </section>
  );
}

export default Projects;
