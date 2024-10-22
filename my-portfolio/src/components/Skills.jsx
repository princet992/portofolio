import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import bs from "../assets/bootstrap.png";
import jquery from "../assets/jQuery.png";
import react from "../assets/react.png";

function Skills() {
  return (
    <>
      <div className="skills text-white text-center pb-10">
        <h2
          className="text-3xl font-bold text-pink-600 py-10 md:text-4xl lg:text-[40px] xl-[45px]  
        "
          data-aos="flip-left"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Skills
        </h2>
        <div className="grid  grid-cols-1 gap-8  mx-auto sm:grid-cols-2 md:grid-cols-3 justify-center  md:w-[700px] lg:w-[900px]">
          <div
            className="html bg-slate-900 text-sm font-semibold px-5 py-3 rounded-lg w-[150px] sm:w-[170px]  hover:bg-slate-800 shadow-lg shadow-sky-500 mx-auto"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <img
              src={html}
              alt=""
              className="mx-auto w-[70px] h-[70px] shadow-2xl shadow-blue-400 rounded-lg"
            />
            <h2 className="py-3">HTML</h2>
          </div>
          <div
            className="css bg-slate-900 text-sm font-semibold px-5 py-3 rounded-lg w-[150px] sm:w-[170px]  hover:bg-slate-800 shadow-lg shadow-sky-500 mx-auto"
            data-aos="flip-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <img
              src={css}
              alt=""
              className="mx-auto w-[70px] h-[70px] shadow-2xl shadow-blue-400 rounded-lg"
            />
            <h2 className="py-3">CSS</h2>
          </div>
          <div
            className="js bg-slate-900 text-sm font-semibold px-5 py-3 rounded-lg w-[150px] sm:w-[170px]  hover:bg-slate-800 shadow-lg shadow-sky-500 mx-auto"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <img
              src={bs}
              alt=""
              className="mx-auto w-[70px] h-[70px] shadow-2xl shadow-blue-400 rounded-lg"
            />
            <h2 className="py-3">Bootstrap</h2>
          </div>
          <div
            className="bootstrap bg-slate-900 text-sm font-semibold px-5 py-3 rounded-lg w-[150px] sm:w-[170px]  hover:bg-slate-800 shadow-lg shadow-sky-500 mx-auto"
            data-aos="flip-down"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <img
              src={js}
              alt=""
              className="mx-auto w-[70px] h-[70px] shadow-2xl shadow-blue-400 rounded-lg"
            />
            <h2 className="py-3">Java-script</h2>
          </div>
          <div
            className="jquery bg-slate-900 text-sm font-semibold px-5 py-3 rounded-lg w-[150px] sm:w-[170px]  hover:bg-slate-800 shadow-lg shadow-sky-500 mx-auto"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <img
              src={jquery}
              alt=""
              className="mx-auto w-[70px] h-[70px] shadow-2xl shadow-blue-400 rounded-lg"
            />
            <h2 className="py-3">jQuery</h2>
          </div>
          <div
            className="react bg-slate-900 text-sm font-semibold px-5 py-3 rounded-lg w-[150px] sm:w-[170px]  hover:bg-slate-800 shadow-lg shadow-sky-500 mx-auto"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <img
              src={react}
              alt=""
              className="mx-auto w-[70px] h-[70px] shadow-2xl shadow-blue-400 rounded-lg"
            />
            <h2 className="py-3">React-JS</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
