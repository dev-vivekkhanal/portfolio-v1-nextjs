import { motion } from "framer-motion";

function Waves() {
  return (
    <motion.div
      initial={{ bottom: -80, opacity: 0 }}
      animate={{ bottom: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      ease="easeIn"
      className="rotate-180 absolute bottom-0 w-[100%] overflow-hidden left-0 leading-none z-40"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block h-[160px] w-[calc(140%+1.3px)]"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="#fefeff"
          fillOpacity="1"
        ></path>
      </svg>
    </motion.div>
  );
}

export default Waves;
