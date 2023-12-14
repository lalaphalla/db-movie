import React from "react";
import { Link } from "react-router-dom";
import MovieSearch from "./MovieSearch";
import MyNavLink from "./MyNavLink";

export default function MyNav() {
  return (
    <nav className="border-gray-200 bg-primary dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to="/">
          <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span class="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
              Movie-DB
            </span>
          </h1>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100  p-4 font-medium rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900">
            <li>
              <MyNavLink page="Movie" to="/movies" />
            </li>
            <li>
              <MyNavLink page="TV Show" to="/tv" />
            </li>
            <li>
              <MyNavLink page="People" to="/people" />
            </li>
          </ul>
        </div>
        <MovieSearch />
      </div>
    </nav>
  );
}
