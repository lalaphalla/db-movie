import React, { Suspense, lazy, useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchRandomMovie,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpComingMovies,
} from "../redux/actions/movieActions";
import MovieSearch from "../components/MovieSearch";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import ModalTest from "../components/ModalTest";
import InputSearch from "../components/ui/InputSearch";
import CardTrailer from "../components/CardTrailer";

export default function Home() {
  const limit = 7;
  const dispatch = useDispatch();

  let {
    movies,
    trendingMovies,
    nowPlayingMovies,
    upComingMovies,
    topRatedMovies,
    randomMovie,
    isLoading,
  } = useSelector((state) => state.movieR);

  // const getRandomMovie = () => {
  //   return (
  //     movies.length > 0 && movies[Math.floor(Math.random() * movies.length)]
  //   );
  // };

  const [randomMovie2, setRandomMovie2] = useState({});

  const randomMovie1 = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    dispatch(fetchTrendingMovies(3));
    dispatch(fetchPopularMovies(limit, 1));
    dispatch(fetchNowPlayingMovies(limit));
    dispatch(fetchUpComingMovies(limit));
    dispatch(fetchTopRatedMovies(limit));
    if (randomMovie) dispatch(fetchRandomMovie());
    else return;
    // setRandomMovie2(movies && movies[Math.floor(Math.random() * movies.length)])
    // randomMovie = getRandomMovie();
    //  console.log(randomMovie1);
  }, []);

  const createMovieList = (movie) => {
    return (
      <Card
        key={movie.id}
        id={movie.id}
        title={movie.title}
        vote_average={movie.vote_average}
        release_date={movie.release_date}
        poster_path={movie.poster_path}
      />
    );
  };

  const upComingMovieTrailer = () => {
    // 1. Video url, title movie
    // get 4 movie trailer
    // trendingMovies && trendingMovies.length > 0 && trendingMovies.length < 4
    trendingMovies &&
      trendingMovies.map((movie) => {
        <CardTrailer
          key={movie.id}
          title={movie.title}
          backdrop_path={movie.backdrop_path}
        />;
      });
  };

  const Heavy = lazy(() => import("../components/Card"));
  const RandomPopular = lazy(() => import("../components/Hero"));
  return (
    <section className="">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Suspense fallback={<Loading />}>
            {randomMovie && (
              <Hero
                id={randomMovie.id}
                title={randomMovie.title}
                overview={randomMovie.overview}
                backdrop_path={randomMovie.backdrop_path}
                poster_path={randomMovie.poster_path}
              />
            )}
          </Suspense>

          <div className="mx-auto max-w-screen-2xl bg-white py-8">
            <div className="flex justify-between">
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
                <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                  Now Playing
                </span>{" "}
                Movies
              </h1>
              <button
                type="button"
                className="my-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                More
              </button>
            </div>
            <div className="mx-auto grid  gap-4 sm:grid-cols-4 md:max-w-screen-xl md:grid-cols-7 lg:max-w-screen-2xl ">
              <Suspense fallback={<Loading />}>
                {nowPlayingMovies.length > 0 &&
                  nowPlayingMovies.map((movie) => createMovieList(movie))}
              </Suspense>
            </div>
          </div>

          <div className="bg-primary">
            <h3 className="ml-4 py-4 text-3xl font-extrabold text-white dark:text-white md:text-5xl ">
              <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                Trending
              </span>{" "}
              Trailer
            </h3>
            <div className="grid grid-cols-3 gap-8 px-8">
              {trendingMovies.length > 0 &&
                trendingMovies.map((movie) => (
                  <CardTrailer
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    backdrop_path={movie.backdrop_path}
                  />
                ))}
              Hello
            </div>
          </div>

          <div className="mx-auto max-w-screen-2xl bg-white py-8">
            <div className="flex justify-between">
              <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
                <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                  Popular
                </span>{" "}
                Movies
              </h1>
              <button
                type="button"
                className="my-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                More
              </button>
            </div>
            <div className="mx-auto grid  gap-4 sm:grid-cols-4 md:max-w-screen-xl md:grid-cols-7 lg:max-w-screen-2xl ">
              <Suspense fallback={<Loading />}>
                {movies.length > 0 &&
                  movies.map((movie) => createMovieList(movie))}
              </Suspense>
            </div>
          </div>

          <div className="w-full bg-primary">
            <div className="mx-auto max-w-screen-2xl py-8">
              <div className="flex justify-between">
                <h1 className="mb-4 text-3xl font-extrabold text-white dark:text-white md:text-5xl">
                  <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                    Top Rated
                  </span>{" "}
                  Movies
                </h1>
                <button
                  type="button"
                  className="my-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  More
                </button>
              </div>
              <div className="mx-auto grid  gap-4 sm:grid-cols-4 md:max-w-screen-xl md:grid-cols-7 lg:max-w-screen-2xl ">
                <Suspense fallback={<Loading />}>
                  {topRatedMovies.length > 0 &&
                    topRatedMovies.map((movie) => createMovieList(movie))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
