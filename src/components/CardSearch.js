import React from "react";
import { Link } from "react-router-dom";

export default function CardSearch({
  id,
  title,
  release_date,
  overview,
  poster_path,
}) {
  return (
    <section className="w-full">
      <Link
        to={`/movie/${id}`}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={` http://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
          alt="poster"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p>{release_date}</p>
          <p className="line-clamp-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
        </div>
      </Link>
    </section>
  );
}
