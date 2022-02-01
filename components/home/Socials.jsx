import Image from "next/image";
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";
import { motion } from "framer-motion";

function Socials() {
  return (
    <motion.div
      initial={{ marginRight: "40vw", opacity: 0 }}
      animate={{ marginRight: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      ease="easeIn"
      className=" absolute h-screen top-0 left-0 flex items-center"
    >
      <div className="hidden md:flex  flex-col justify-between  px-5 h-[200px] ">
        <div className="bg-slate-400 p-2 rounded-full flex justify-center items-center scale-90 cursor-pointer hover:bg-slate-100 transition-all active:bg-slate-500">
          <Image
            src={Linkedin}
            alt="Linkedin icon"
            height={50}
            width={50}
            layout="fixed"
            className=" "
          />
        </div>
        <Image
          src={Github}
          alt="Linkedin icon"
          height={55}
          width={55}
          layout="fixed"
          className="bg-clip-content bg-slate-400 rounded-full cursor-pointer hover:bg-slate-100 transition-all active:bg-slate-500"
        />
      </div>
    </motion.div>
  );
}

export default Socials;
