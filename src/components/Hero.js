import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { API_BACKDROP_PATH } from "../utils/constant";

export default function Hero({ id, title, overview, backdrop_path, poster_path }) {
  const imageUrl = API_BACKDROP_PATH + backdrop_path
  console.log(imageUrl && imageUrl);
  useEffect(() => {
    console.log(backdrop_path, title);
  }, []);
  return (

    <section className="bg-black dark:bg-gray-900 relative 
    before:bg-black before:content-[''] before:w-full before:h-full before:absolute before:bg-opacity-50 "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >

      <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"

      >
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-white text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {overview}
          </p>
          <Link
            to={`/movie/${id}`}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Detail
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {backdrop_path && (
            <img
              src={`http://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
              alt="mockup"
            />
          )}
        </div>
      </div>
    </section>
  );
}
