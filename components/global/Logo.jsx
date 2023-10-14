import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href="/">
        <h1 className="text-xl md:text-2xl">
          <span className=" font-semibold text-[#4f46e5] mr-1">Vivek</span>
          Khanal
        </h1>
      </Link>
      <p className="text-xs md:text-sm">
        <span className="block">Software Developer</span>
        <span>Electronics & Comm Engineer</span>
      </p>
    </div>
  );
}

export default Logo;
