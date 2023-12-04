import React from "react";

export default function SearchCard(id, title, release_date, poster_path) {

  return (
    <section>
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg w-full"
          src={` http://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`}
          alt="poster"
        />
      </Link>

      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mb-2">{release_date}</p>
        <p>{overview}</p>
      </div>
    </section>
  );
}
