function ResumeButton() {
  return (
    <>
      <div className="hidden md:flex justify-between items-center bg-[#5951ee] hover:bg-[#443bec] text-white  rounded-md cursor-pointer active:scale-95 transition-all">
        <a
          href="/resume.pdf"
          download="Vivek-Khanal-Resume.pdf"
          className=" p-2 rounded-md"
        >
          <span className="mr-2">Resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export default ResumeButton;
