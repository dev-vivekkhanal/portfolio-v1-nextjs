import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectWrapper from "./ProjectWrapper";

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

      <ProjectWrapper>
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
      </ProjectWrapper>
    </section>
  );
}

export default Projects;
