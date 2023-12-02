import React, { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../redux/actions/movieActions";

export default function Movies() {
  const dispatch = useDispatch();
  let { movies } = useSelector((state) => state.movieR);

  useEffect(() => {
    // fetchMoviePopular().then((res) => {
    //   setMovies(res.results.slice(0,7));
    //   console.log(res);
    // });

    dispatch(fetchPopularMovies());
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Popular
        </span>{" "}
        Movie
      </h1>

      <div className="grid grid-cols-7 gap-4 ">
        {movies.length > 0 &&
          movies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
            />
          ))}
      </div>
    </div>
  );
}
