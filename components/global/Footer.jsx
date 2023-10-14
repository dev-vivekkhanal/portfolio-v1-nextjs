import Image from "next/image";
import Linkedin from "../../assets/images/linkedin.png";
import Github from "../../assets/images/github.png";
import Waves2 from "./Waves2";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#010330] via-[#000020] to-[#000000]  text-white relative pt-[50px] ">
      <Waves2 />
      <div className="w-[90%] md:w-[80%] mx-auto ">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="py-10 md:py-24">
            <h1 className="font-bold text-xl md:text-2xl   mb-5">
              VIVEK KHANAL
            </h1>
            <p className="text-sm md:pr-10">
              A Software Developer building Websites and Web Applications that
              leads to the success of the overall product
            </p>
          </div>
          <div className="pt-10 md:py-24  md:w-[15%] lg:w-[10%]">
            <h1 className="font-bold text-xl md:text-2xl    mb-5">SOCIALS</h1>
            <div className=" flex  justify-start items-start ">
              <a
                href="https://www.linkedin.com/in/vivek-khanal-793016231/"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-400 p-1 mr-5 rounded-full flex justify-center items-center scale-90 cursor-pointer hover:bg-slate-100 transition-all active:bg-slate-500"
              >
                <Image
                  src={Linkedin}
                  alt="Linkedin icon"
                  height={26}
                  width={26}
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
                  className="bg-clip-content  bg-slate-400 rounded-full cursor-pointer hover:bg-slate-100 transition-all active:bg-slate-500"
                />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-xs py-5 md:py-10 text-center">
          © Copyright {new Date().getFullYear()} Made by{"  "}
          <a
            href="https://www.linkedin.com/in/vivek-khanal-793016231/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-rose-400"
          >
            Vivek Khanal
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
