import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularMovies,
  fetchTrendingMovies,
} from "../redux/actions/movieActions";
import Search from "../components/Search";

export default function Home() {
  // const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  let { movies, trendingMovies } = useSelector((state) => state.movieR);

  useEffect(() => {
    // fetchMoviePopular().then((res) => {
    //   setMovies(res.results.slice(0,7));
    //   console.log(res);
    // });

    dispatch(fetchTrendingMovies(7));
    dispatch(fetchPopularMovies(7));
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto">
      <Search />
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Trending
        </span>{" "}
        Movies
      </h1>
      <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
        {trendingMovies.length > 0 &&
          trendingMovies.map((movie) => (
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

      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Popular
        </span>{" "}
        Movies
      </h1>
      <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
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
    </section>
  );
}
