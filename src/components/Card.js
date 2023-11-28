import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export default function Card({id, title, vote_average,release_date,poster_path }) {
  let percentage = Math.round(vote_average*10);

  return (
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg w-full"
          src={` http://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="poster"
        />
      </Link>
      <div class="p-5">
        <a href="#">
          <div class="w-10 h-10 bg-gray-200 rounded-full dark:bg-gray-700 absolute top-[310px] left-4">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {title}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {release_date}
        </p>
      </div>
    </div>
  );
}
