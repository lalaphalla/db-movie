import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpComingMovies,
} from "../redux/actions/movieActions";
import Search from "../components/Search";
import YoutubePlayer from "../components/YoutubePlayer";

export default function Home() {
  // const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  let {
    movies,
    trendingMovies,
    nowPlayingMovies,
    upComingMovies,
    topRatedMovies,
    isLoading,
  } = useSelector((state) => state.movieR);
 const videoId = "RjNcTBXTk4I"
  useEffect(() => {
    // fetchMoviePopular().then((res) => {
    //   setMovies(res.results.slice(0,7));
    //   console.log(res);
    // }); 
    dispatch(fetchTrendingMovies(7));
    dispatch(fetchPopularMovies(7, 1));
    dispatch(fetchNowPlayingMovies(7));
    dispatch(fetchUpComingMovies(7));
    dispatch(fetchTopRatedMovies(7));
  }, []);
  // const createPopularMovieList = () => {
  //   return (
  //     <Card
  //       key={movie.id}
  //       id={movie.id}
  //       title={movie.title}
  //       vote_average={movie.vote_average}
  //       release_date={movie.release_date}
  //       poster_path={movie.poster_path}
  //     />
  //   );
  // };
  return (
    <section className="max-w-screen-xl mx-auto">
      <Search />
      <YoutubePlayer videoId = {videoId} />
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Now Playing
        </span>{" "}
        Movies
      </h1>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        More
      </button>

      <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
        {nowPlayingMovies.length > 0 &&
          nowPlayingMovies.map((movie) => (
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

      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Up Coming
        </span>{" "}
        Movies
      </h1>
      <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
        {upComingMovies.length > 0 &&
          upComingMovies.map((movie) => (
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
          Top Rated
        </span>{" "}
        Movies
      </h1>
      <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
        {topRatedMovies.length > 0 &&
          topRatedMovies.map((movie) => (
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
