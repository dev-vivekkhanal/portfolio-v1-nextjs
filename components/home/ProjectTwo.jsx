import React from "react";

import Image from "next/image";
import Whastsapp from "../../assets/images/whatsapp.png";

function ProjectTwo() {
  return (
    <div>
      <div className="md:flex md:flex-row-reverse bg-white p-2 py-10 rounded-lg border-b-2">
        <div className="md:w-3/6 mb-5 md:mb-0 md:mr-5 relative ">
          <Image
            src={Whastsapp}
            alt="WhastsApp screenshot"
            className="rounded-xl "
          />
        </div>
        <div className="md:w-3/6 ">
          <div className="md:flex md:flex-col justify-center w-[80%]">
            <h2 className="text-[#6366f1] font-medium text-2xl lg:text-4xl mb-1 lg:mb-4">
              WhatsApp Clone
            </h2>
            <p className="mb-2">
              This web app is a clone of WhatsApp. I tried to clone the UI and
              the realtime chat functionality using the tech stack I am familiar
              wih.
            </p>
            <h3 className="text-xl  font-semibold ">Features</h3>
            <p className="mb-2">
              User Authentication | Server Side Rendering | Realtime Chat |
              Responsive Design
            </p>
            <h3 className="text-xl  font-semibold ">Technologies used</h3>
            <p className="mb-5">
              HTML | CSS | JavaScript | Tailwind CSS | React | Next Js |
              Firebase
            </p>
            <div>
              <a
                href="https://github.com/dev-vivekkhanal/whatsapp-clone"
                target="_blank"
                rel="noreferrer"
                className="bg-[#5951ee] hover:bg-[#443bec] active:scale-95 transition-all text-white p-3 px-6 rounded cursor-pointer mr-5 "
              >
                Code
              </a>
              <a
                href="https://whatsapp-clone-xi-rouge.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="bg-[#5951ee] hover:bg-[#443bec] active:scale-95 transition-all text-white p-3 px-6 rounded cursor-pointer "
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTwo;
