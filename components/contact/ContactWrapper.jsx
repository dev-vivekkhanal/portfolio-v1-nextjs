import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function ContactWrapper(props) {
  const { ref, inView } = useInView({
    threshold: 0.3,
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
    <div ref={ref}>
      <motion.div animate={slideToRight} ease="easeIn">
        {props.children}
      </motion.div>
    </div>
  );
}

export default ContactWrapper;
