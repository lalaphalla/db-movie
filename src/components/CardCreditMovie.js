import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom"; 
import defaultImage from "../assets/500x750.png";
import ImagePath from "./ui/ImagePath";

export default function CardCreditMovie({id, title, poster_path }) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <Link to={`/movie/${id}`}>
        <ImagePath path={poster_path} type='POSTER' />
      </Link>
      <div className="p-5"> 
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 ">
        {title}
        </p> 
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          
        </p> 
        
      </div>
    </div>
  );
}
