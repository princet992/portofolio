import Cards from "../pages/Cards";
import password from "../assets/images.jpeg";
import weather from "../assets/weather.webp";
import todo from "../assets/todo.jpeg";

function Projects() {
  return (
    <>
      <main className="md:py-10 pb-5  md:w-[700px] mx-auto lg:w-[800px] xl:w-[800px] text-white text-center">
        <h2
          className="text-3xl font-bold text-pink-600 py-10 md:text-4xl lg:text-[40px] xl-[45px]  
        "
          data-aos="flip-left"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
         My Projects
        </h2>
        <div
          className="flex justify-between flex-col items-center gap-5 md:flex-row flex-wrap md:w-[670px] lg:w-[800px] sm:flex-row sm:w-[570px] mx-auto "
          data-aos="fade-right"
        >
          <Cards
            src={weather}
            title="Weather App"
            url="/weather"
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
          <Cards
            src={password}
            title="Password Generator"
            url="/password"
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
          <Cards
            src={todo}
            title="Todo Lists"
            url="/todo"
            data-aos="flip-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          />
        </div>
      </main>
    </>
  );
}

export default Projects;
