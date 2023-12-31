import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export default function TvCard({
  id,
  title,
  vote_average,
  release_date,
  poster_path,
}) {
  let percentage = Math.round(vote_average * 10);

  return (
    <div className="relative w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link to={`/tv/${id}`}>
        <img
          className="w-full rounded-t-lg"
          src={`http://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
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
          {/* {formatDate(release_date)} */}
          {release_date && release_date}
        </p>
        {/* <div className="p-5">
        <a href="#">
          <div className="w-10 h-10 bg-gray-200 rounded-full dark:bg-gray-700 absolute top-[230px] left-4">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {title}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {release_date}
        </p> */}
      </div>
    </div>
  );
}
