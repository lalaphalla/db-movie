import React from "react";
import ImagePath from "./ui/ImagePath";

export default function SearchCard(id, title, release_date, poster_path) {

  return (
    <section>
      <Link to={`/movie/${id}`}>
        <ImagePath path={poster_path} type='POSTER' />
      </Link>

      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mb-2">{release_date}</p>
        <p>{overview}</p>
      </div>
    </section>
  );
}
