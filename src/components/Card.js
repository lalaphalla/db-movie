import { format } from "date-fns";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { API_POSTER_PATH } from "../utils/constant";

export default function Card({
  id,
  title,
  vote_average,
  release_date,
  poster_path,
}) {
  let percentage = Math.round(vote_average * 10);

  const releaseDate = new Date(release_date);
  // const releaseDate = new Date(2022, 0, 1);

   const formmatedDate = format(releaseDate, "MMM dd, yyyy");
  //  console.log(release_date);
  return (
    <div className="relative w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link to={`/movie/${id}`}>
        <img
          className="w-full rounded-t-lg"
          src={API_POSTER_PATH + poster_path}
          alt="poster"
        />
      </Link>
      <div className="relative p-5">
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
          {title}
        </p>
        <div className="absolute left-4 top-[-20px] h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>{" "}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {formmatedDate}
        </p>
      </div>
    </div>
  );
}
