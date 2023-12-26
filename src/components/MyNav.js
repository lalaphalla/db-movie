import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieSearch from "./MovieSearch";
import MyNavLink from "./MyNavLink";
import { initFlowbite } from "flowbite";

export default function MyNav() {
  const [isNavBarOpen, setNavBarOpen] = useState(false)

  const toggleMenu = () => {
    setNavBarOpen(!isNavBarOpen)
  }
  useEffect(() => {
    initFlowbite()
  }, [])
  return (
    <nav className="border-gray-200 bg-primary dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to="/">
          <h1 className="font-press my-4 text-xl text-gray-900 dark:text-white md:text-5xl lg:text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg"
            className="inline-block mr-2 mb-3"
              height="38"
              width="38" 
              fill="#fff"
              viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z" /></svg>
            <span className="text-white">        
              MovieDB
            </span>
          </h1>
        </Link>

        <button
          // data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"          
          onClick={toggleMenu}
          // aria-controls="navbar-default"
          // aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* mobile id="navbar-default" */}
        <div className={`w-full md:block md:w-auto ${isNavBarOpen ? 'block' : 'hidden'}`} >
          <ul className=" mt-4 mb-2 flex flex-col rounded-lg border border-gray-100  p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900">
            <li>
              <MyNavLink page="Movie" to="/movies" isNavBarOpen={isNavBarOpen} setNavBarOpen={setNavBarOpen} />
            </li>
            <li>
              <MyNavLink page="TV Show" to="/tv"  isNavBarOpen={isNavBarOpen} setNavBarOpen={setNavBarOpen} />
            </li>
            <li>
              <MyNavLink page="People" to="/people"  isNavBarOpen={isNavBarOpen} setNavBarOpen={setNavBarOpen} />
            </li>
          </ul>
        </div>
        <MovieSearch />
      </div>
    </nav>
  );
}
