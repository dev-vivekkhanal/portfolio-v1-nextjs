import Image from "next/image";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import tailwind from "../../assets/images/tailwind.png";
import react from "../../assets/images/react.png";
import nextjs from "../../assets/images/nextjs.png";
import firebase from "../../assets/images/firebase.png";
import git from "../../assets/images/git.png";

function Skills() {
  return (
    <div className="mt-14  max-w-xl sm:mx-[50px] md:ml-[90px]  ">
      <h3 className="text-3xl font-semibold text-[#4f46e5]  mb-10">
        My Skills
      </h3>
      <div className="flex flex-wrap ">
        <div className="flex flex-col justify-center items-center shadow p-5 hover:shadow-xl transition-all m-1">
          <div className="relative w-[50px]">
            <Image src={html} layout="responsive" />
          </div>
          <span className="font-semibold">HTML</span>
        </div>

        <div className="flex flex-col justify-center items-center shadow p-5 hover:shadow-xl transition-all m-1">
          <div className="relative w-[50px]">
            <Image src={css} layout="responsive" />
          </div>
          <span className="font-semibold">CSS</span>
        </div>

        <div className="flex flex-col justify-center items-center shadow p-5 hover:shadow-xl transition-all m-1">
          <div className="relative w-[50px]">
            <Image src={js} layout="responsive" />
          </div>
          <span className="font-semibold">JS</span>
        </div>

        <div className="flex flex-col justify-center items-center shadow p-5 hover:shadow-xl transition-all m-1">
          <div className="relative w-[50px]">
            <Image src={tailwind} layout="responsive" />
          </div>
          <span className="font-semibold">Tailwind</span>
        </div>

        <div className="flex flex-col justify-center items-center shadow p-5 hover:shadow-xl transition-all m-1">
          <div className="relative w-[50px]">
            <Image src={react} layout="responsive" />
          </div>
          <span className="font-semibold">React</span>
        </div>

        <div className="flex flex-col justify-center items-center shadow p-5 hover:shadow-xl transition-all m-1">
          <div className="relative w-[50px]">
            <Image src={nextjs} layout="responsive" />
          </div>
          <span className="font-semibold">Next Js</span>
        </div>

        <div className="flex flex-col justify-center items-center shadow p-5 hover:shadow-xl transition-all m-1">
          <div className="relative w-[50px]">
            <Image src={firebase} layout="responsive" />
          </div>
          <span className="font-semibold">Firebase</span>
        </div>

        <div className="flex flex-col justify-center items-center shadow p-5 hover:shadow-xl transition-all m-1">
          <div className="relative w-[50px]">
            <Image src={git} layout="responsive" />
          </div>
          <span className="font-semibold">Git</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
