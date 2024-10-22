import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <nav className="bg-slate-900 text-white px-10 w-full z-50">
        <div className="flex justify-between items-center py-4 px-5">
          <a href="/">
            <span className="text-2xl font-bold hover:border-b-2 border-blue-500 hover:text-blue-500">
              MyPortfolio
            </span>
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
          {isOpen ? (
            <FaBars onClick={() => setIsOpen(!isOpen)} className="md:hidden" />
          ) : (
            <MdOutlineClear onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
        {/* ----Mobile view------- */}
        <ul
        onClick={()=>setIsOpen(!isOpen)}
          className={`w-full text-center fixed z-[100] bg-black left-[-100%] duration-300 ease-linear ${
            !isOpen && `left-[0%]`
          }`}
        >
          <NavLink
            to="/"
            className=" text-lg font-bold hover:border-b-2 border-blue-500 hover:text-blue-500 block py-3"
          >
            Home
          </NavLink>
          <NavLink
            to="/skills"
            className=" text-lg font-bold hover:border-b-2 border-blue-500 hover:text-blue-500 block py-3"
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className=" text-lg font-bold hover:border-b-2 border-blue-500 hover:text-blue-500 block py-3"
          >
            Project
          </NavLink>

          <NavLink
            to="/contact"
            className=" text-lg font-bold hover:border-b-2 border-blue-500 hover:text-blue-500 block py-3"
          >
            Contact
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
