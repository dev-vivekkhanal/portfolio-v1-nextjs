import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectWrapper from "./ProjectWrapper";
import Image from "next/image";
import Netflix1 from "../../assets/images/netflix-1.webp";
import Whastsapp from "../../assets/images/whatsapp.png";
import Eko from "../../assets/images/eko.jpeg";
import Mag from "../../assets/images/mag.webp";
import Speedy from "../../assets/images/speedy.png";
import Wrkin from "../../assets/images/wrkin.png";
import Crypto from "../../assets/images/crypto.png";

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const slideToLeft = useAnimation();

  const [inViewCounter, setInViewCounter] = useState(0);

  useEffect(() => {
    setInViewCounter(inViewCounter + 1);
    if (inView && inViewCounter < 2) {
      slideToLeft.start({
        x: 0,
        transition: {
          duration: 1,
          type: "spring",
          bounce: 0.1,
        },
      });
    }
    if (!inView && inViewCounter < 2) {
      slideToLeft.start({
        x: "100vw",
        transition: {
          duration: 1,
        },
      });
    }

    if (!inView && inViewCounter > 2) {
      slideToLeft.start({
        x: 0,
        transition: {
          duration: 1,
        },
      });
    }
  }, [inView]);

  const projectsData = [
    {
      img: Netflix1,
      name: "Netflix Clone",
      desc: "This web app is a clone of Netflix. I tried to clone the UI and some of its functionality using the tech stack I am familiar with.",
      feat: "User Authentication | Server Side Rendering | API integration | Online video player | Responsive Design",
      techStack:
        "HTML | CSS | JavaScript | Tailwind CSS | React JS | Next JS | Firebase",
      code: "https://github.com/dev-vivekkhanal/NetflixClone-nextjs",
      live: "https://netflix-clone-nextjs-rosy.vercel.app",
    },
    {
      img: Whastsapp,
      name: "Whatsapp Clone",
      desc: "This web app is a clone of WhatsApp. I tried to clone the UI and the realtime chat functionality using the tech stack I am familiar with.",
      feat: " User Authentication | Server Side Rendering | Realtime Chat | Responsive Design",
      techStack:
        "HTML | CSS | JavaScript | Tailwind CSS | React JS | Next JS | Firebase",
      code: "https://github.com/dev-vivekkhanal/whatsapp-clone",
      live: "https://whatsapp-clone-xi-rouge.vercel.app",
    },

    {
      img: Speedy,
      name: "Speedy Writer",
      desc: "Developed an frontend only interface where you can create blogs or articles by choosing a topic or by even creating a topic. You can add and remove topic. I have made this functionality using localStorage and have also added a filter function and animation.",
      feat: "Filter | Animations | Local Storage Data Manipulation",
      techStack:
        "HTML | CSS | JavaScript | Tailwind CSS | React JS | Vercel | Vite",
      code: "https://github.com/dev-vivekkhanal/speedy-brand/tree/main",
      live: "https://speedy-brand-4m020m6o7-dev-vivekkhanal.vercel.app/",
    },

    {
      img: Mag,
      name: "Mag Production",
      desc: "Developed the website for a event management company dedicated to crafting everlasting impressions, by catering all your weddings/events needs as per your ritual, within your budget and quality, to create exceptional projects. From intimate moments to grand occasions.",
      feat: "",
      techStack:
        "HTML | CSS | JavaScript | Tailwind CSS | React JS | Vercel | Email JS",
      code: "",
      live: "https://mag-swart.vercel.app/",
    },

    {
      img: Crypto,
      name: "Crypto Stats",
      desc: "This is a interface whre I have listed multiple cryptos through a javaScript mock object that I created. I have implemented search functionaly with an animation as well. I have also tried to show my skills with visual representation of data using graphs. Here you can select a crypto and see its graph with time filter like day, week, month or year. The graph will react accordingly.",
      feat: "Search function with animation | Filter crypto's value chart according to the time selected (day, week, month or year)",
      techStack:
        "HTML | CSS | JavaScript | Tailwind CSS | React JS | Vercel | Vite | Recoil | Recharts",
      code: "",
      live: "https://wrkin-web.vercel.app/",
    },

    {
      img: Eko,
      name: "Eko Infomatics",
      desc: "I developed the second rendition of the main website for my company, Eko Infomatics. The website serves as a showcase for our services and solutions. The website features a modern, sleek design that is both visually appealing and easy to navigate. ",
      feat: "",
      techStack:
        "HTML | CSS | JavaScript | Tailwind CSS | React JS | Vercel | Email JS",
      code: "",
      live: "https://www.ekoinfomatics.com/",
    },

    {
      img: Wrkin,
      name: "Wrkin App",
      desc: "Wrkin.app is an innovative digital platform that redefines the way professionals and businesses manage work collaboration, streamline task management, and simplify Human Resource Management (HRM). Wrkin.app offers a holistic solution designed to enhance workplace productivity, organization, and communication.",
      feat: "",
      techStack:
        "HTML | CSS | JavaScript | Tailwind CSS | React JS | Vercel | Vite",
      code: "",
      live: "https://wrkin-web.vercel.app/",
    },
  ];

  return (
    <section
      ref={ref}
      id="project-section"
      className=" pt-[100px] overflow-hidden"
    >
      <motion.h1
        animate={slideToLeft}
        ease="easeIn"
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-gray-200  text-right mb-5 mr-5 "
      >
        PROJECTS
      </motion.h1>

      <ProjectWrapper>
        {projectsData?.reverse()?.map((data, index) => {
          return (
            <div key={index}>
              <div
                className={`md:flex ${
                  (index + 1) % 2 !== 0 ? "" : "md:flex-row-reverse"
                } bg-white p-2 rounded-lg pb-10 border-b-2`}
              >
                <div className="md:w-3/6 mb-5 md:mb-0 md:mr-5  ">
                  <div className="border-4 rounded-xl relative">
                    <Image
                      src={data?.img}
                      alt={data?.name}
                      className="rounded-xl "
                      fill={true}
                    />
                  </div>
                </div>
                <div className="md:w-3/6 ">
                  <div className="md:flex md:flex-col justify-center md:w-[80%]">
                    <h2 className="text-[#6366f1] font-medium text-2xl lg:text-4xl mb-1 lg:mb-4">
                      {data?.name}
                    </h2>
                    <p className="mb-2">{data?.desc}</p>
                    {data?.feat && (
                      <div>
                        <h3 className="text-xl  font-semibold ">Features</h3>
                        <p className="mb-2">{data?.feat}</p>
                      </div>
                    )}
                    {data?.techStack && (
                      <div>
                        <h3 className="text-xl  font-semibold ">
                          Technologies used
                        </h3>
                        <p className="mb-5">{data?.techStack}</p>
                      </div>
                    )}
                    <div>
                      {data?.code && (
                        <a
                          href={data?.code}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-[#5951ee] hover:bg-[#443bec] active:scale-95 transition-all text-white p-3 px-6 rounded cursor-pointer mr-5 "
                        >
                          Code
                        </a>
                      )}
                      {data?.live && (
                        <a
                          href={data?.live}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-[#5951ee] hover:bg-[#443bec] active:scale-95 transition-all text-white p-3 px-6 rounded cursor-pointer "
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <ProjectOne />
        <ProjectTwo /> */}
        {/* <ProjectThree /> */}
      </ProjectWrapper>
    </section>
  );
}

export default Projects;
