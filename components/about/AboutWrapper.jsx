import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function AboutWrapper(props) {
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

  return (
    <div ref={ref} className="overflow-x-hidden">
      <motion.div
        animate={slideToLeft}
        ease="easeIn"
        className="overflow-x-hidden"
      >
        {props.children}
      </motion.div>
    </div>
  );
}

export default AboutWrapper;
