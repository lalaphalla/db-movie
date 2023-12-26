import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom"; 
import defaultImage from "../assets/500x750.png";

export default function CardCast({id, name, profile_path,character  }) {
  

  const getThumbnail = () => {
    return profile_path
      ? ` http://image.tmdb.org/t/p/w500/${profile_path}`
      : defaultImage;
  };
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <Link to={`/person/${id}`}>
        <img
          className="rounded-t-lg w-full"
          // src={` http://image.tmdb.org/t/p/w500/${profile_path}`}
          src={getThumbnail()}
          alt="poster"
        />
      </Link>
      <div className="p-5"> 
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 ">
        {name}
        </p> 
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {character}
        </p> 
        
      </div>
    </div>
  );
}
