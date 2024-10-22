import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-slate-900 text-white px-10 w-full">
        <div className="flex justify-between items-center py-4 px-5">
          <a href="/">
            <span className="text-2xl font-bold hover:border-b-2 border-blue-500 hover:text-blue-500">MyPortfolio</span>
          </a>
          <ul className="hidden md:flex  md:space-x-8   ">
            <NavLink
              to="/"
              className=" text-lg font-bold hover:border-b-2 border-blue-500 hover:text-blue-500"
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className=" text-lg font-bold hover:border-b-2 border-blue-500 hover:text-blue-500"
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className=" text-lg font-bold hover:border-b-2 border-blue-500 hover:text-blue-500"
            >
              Project
            </NavLink>

            <NavLink
              to="/contact"
              className=" text-lg font-bold hover:border-b-2 border-blue-500 hover:text-blue-500"
            >
              Contact
            </NavLink>
          </ul>
          <button onClick={handleMenu} className="md:hidden">
            <FaBars />
          </button>
        </div>

        {isOpen ? (
          <ul className=" flex flex-col md:hidden bg-slate-700  ">
            <NavLink
              to="/"
              className="text-white inline-block text-lg font-bold hover:border-b-2 border-blue-500 hover:text-blue-500 py-4 text-center"
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className="text-white inline-block text-lg font-bold hover:border-b-2 border-blue-500 hover:text-blue-500 py-4 text-center"
            >
              Skills
            </NavLink>
            <NavLink to="/projects"
              className="text-white inline-block text-lg font-bold hover:border-b-2 border-blue-500 hover:text-blue-500 py-4 text-center"
            >
              Project
            </NavLink>

            <NavLink
              to="/contact"
              className="text-white inline-block text-lg font-bold hover:border-b-2 border-blue-500 hover:text-blue-500 py-4 text-center"
            >
              Contact
            </NavLink>
          </ul>
        ) : null}
      </nav>
    </>
  );
}

export default Nav;
