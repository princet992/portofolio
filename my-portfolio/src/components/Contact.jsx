import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <>
      <main>
        <h2
          className="text-3xl font-bold text-pink-600 py-10 md:text-4xl lg:text-[40px] xl-[45px] text-center 
        "
          data-aos="flip-left"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          My Contact
        </h2>
        <div className="contact h-[40vh] max-h-full text-white flex flex-wrap  justify-center space-x-5">
          {/* <FaFacebook className="iconw-[38px] h-[38px] shadow-2xl shadow-blue-500  rounded-full border-2 border-yellow-500 p-2  hover:shadow-2xl hover:shadow-green-600" /> */}

          <a href="">
          <FaInstagram className="icon w-[50px] h-[50px] shadow-2xl shadow-blue-500  rounded-full border-2 border-yellow-500 p-3  hover:shadow-2xl hover:shadow-green-600 " />
          </a>

          <FaLinkedin className="icon w-[50px] h-[50px] shadow-2xl shadow-blue-500  rounded-full border-2 border-yellow-500 p-3  hover:shadow-2xl hover:shadow-green-600" />

          <FaYoutube className="icon w-[50px] h-[50px] shadow-2xl shadow-blue-500  rounded-full border-2 border-yellow-500 p-3 hover:shadow-2xl hover:shadow-green-600  " />
        </div>
      </main>
    </>
  );
}

export default Contact;
