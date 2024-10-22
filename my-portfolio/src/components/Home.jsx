import { useRef, useEffect } from "react";
import hero from "../assets/hero (2).jpg";
import pdf from "../components/data/resume.pdf";
import Projects from "./Projects";
import Skills from "./Skills";
import Typed from "typed.js";
function Home() {
  const inputRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(inputRef.current, {
      strings: ["My name is  Prince Thakur", " I am Frontend  web developer"],
      startDelay: 300,
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 100,
      loop: true,
      smartBackspace: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <main>
        <div className="text-white flex  flex-col items-center min-h-[70vh] max-h-full text-center pt-8 sm:flex-row justify-around">
          <div className="left w-36 py-5 sm:w-52 md:w-60 lg:w-72">
            <div
              className="hero rounded-full"
              // data-aos="fade-right"
              // data-aos-delay="50"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
            >
              <img
                src={hero}
                alt=""
                className="w-full rounded-full shadow-xl shadow-sky-400"
              />
            </div>
          </div>
          <div className="right sm:w-[300px] md:w-[450px] " 
         
              data-aos="fade-left"
              data-aos-delay="30"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out">
            <h2 className="text-lg font-bold leading-10 sm:text-xl md:text-2xl lg:text-3xl py-5">
              Hello <br />{" "}
              <span ref={inputRef} className="text-blue-600"></span>
            </h2>
            <a
              href={pdf}
              download="resume.pdf"
              className="bg-yellow-700 px-3 py-2 rounded-lg font-semibold my-5 hover:bg-yellow-500"
            >
              Download Resume
            </a>
          </div>
        </div>
      </main>
      <Skills />
      <Projects />
    </>
  );
}

export default Home;
