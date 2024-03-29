import Head from "next/head";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import React from "react";
import Landing from "../components/home/Landing";
import Projects from "../components/home/Projects";
import LoadingScreen from "../components/global/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 5400);
  });
  return (
    <>
      <Head>
        <title>Vivek Khanal | React JS Developer</title>
        <meta
          name="description"
          content="Software developer Vivek Khanal's portfolio website "
        />
        <link rel="icon" href="/vivek-icon.ico" />
      </Head>
      {loading ? (
        <div className="relative cursor-default bg-white ">
          <Header />
          <Landing />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
