import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.section
      // initial={{ opacity: 1 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 5, duration: 1 }}
      className="bg-slate-200  h-screen relative overflow-hidden"
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ delay: 5, duration: 1.85 }}
        ease="easeIn"
        className="w-[500vw] bg-gradient-to-r from-[#060c80] via-[#01014d] to-[#000000] h-full  absolute top-0 z-40 "
      ></motion.div>
      <div className="flex justify-center items-center h-screen">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 5, duration: 0.5 }}
          className=" overflow-hidden pb-7 pt-3 "
        >
          <div className="text-3xl md:text-4xl lg:text-5xl  inline relative">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1.5 }}
              className=" font-semibold text-[#4f46e5] mr-2"
            >
              Vivek
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1.5 }}
            >
              Khanal
            </motion.span>
            <motion.span
              initial={{ y: -45, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 2.5,
                duration: 1,
                type: "spring",
                bounce: 0.75,
              }}
              className="h-2 w-2 ml-1 bg-[#4f46e5] inline-block rounded-full"
            >
              {" "}
            </motion.span>
            <motion.div
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{ duration: 3 }}
              ease="easeInOut"
              className="bg-gradient-to-r from-[#060c80] via-[#01014d] to-[#000000] h-full w-full absolute top-0 z-40 "
            ></motion.div>
            <motion.div
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{ delay: 2, duration: 3 }}
              ease="easeInOut"
              className="bg-gradient-to-r from-[#2364f1] via-[#0d40ad] to-[#031846] h-full w-full absolute -bottom-full z-40"
            ></motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1.5 }}
            className="text-sm md:text-base lg:text-lg ml-2 mt-2 leading-none md:leading-none lg:leading-none relative"
          >
            <p>Web Developer</p>
            <p>Electronics & Comm Engineer</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default LoadingScreen;
