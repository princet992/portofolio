import { NavLink } from "react-router-dom";

function Cards({ src, title, url }) {
  return (
    <div className="w-[200px]  md:w-[200px]  p-2 text-around rounded-2xl bg-slate-900 text-white shadow-lg shadow-sky-500">
      <img
        src={src}
        alt=""
        className="rounded-2xl w-full shadow-2xl shadow-blue-400"
      />
      <p className="mb-3 font-bold ">{title}</p>
      <NavLink
        to={url}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        View Projects
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </NavLink>
    </div>
  );
}

export default Cards;
