import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Card({title, vote_average,release_date,poster_path }) {
  const percentage = 66;

  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <a href="#">
        <img
          class="rounded-t-lg"
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
          alt=""
        />
      </a>
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
