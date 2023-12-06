import React from "react";
import { Link } from "react-router-dom";

export default function PersonCard({ id, name, profile_path, known_for }) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <Link to={`/person/${id}`}>
        <img
          className="rounded-t-lg w-full"
          src={` http://image.tmdb.org/t/p/w440_and_h660_face/${profile_path}`}
          alt="poster"
        />
      </Link>
      <div className="p-5">
        <a href="#"></a>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">{name}</p>
        <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">
          {known_for.length >0 && known_for.map((tv) => tv.name !== undefined ? tv.name + ", " : tv.title + ", ")}
        </p>
      </div>
    </div>
  );
}
