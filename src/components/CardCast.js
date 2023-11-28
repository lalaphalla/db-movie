import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export default function CardCast({id, name, profile_path,character  }) {
  const percentage = 66;

  return (
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg w-full"
          src={` http://image.tmdb.org/t/p/w500/${profile_path}`}
          alt="poster"
        />
      </Link>
      <div class="p-5"> 
        <p class="mb-3 font-bold text-gray-700 dark:text-gray-400 ">
        {name}
        </p> 
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {character}
        </p> 
        
      </div>
    </div>
  );
}
