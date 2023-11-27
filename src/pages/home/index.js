import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { fetchMoviePopular } from "../../services/moviesAction";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviePopular().then((res) => {
      setMovies(res.results);
      console.log(res);
    });
  }, []);

  return (
    <>
      Home Page
      <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
        {movies.length > 0 &&
          movies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
            />
          ))}
      </div>
    </>
  );
}
