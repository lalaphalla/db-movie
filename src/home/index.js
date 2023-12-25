import React, { Suspense, lazy, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
import CardTrailer from "../components/CardTrailer";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchRandomMovie,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpComingMovies,
} from "../redux/actions/movieActions";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Heavy = lazy(() => import("../components/Card"));
const RandomPopular = lazy(() => import("../components/Hero"));

export default function Home() {
  const limit = 8;
  const dispatch = useDispatch();

  let {
    movies,
    trendingMovies,
    nowPlayingMovies, 
    topRatedMovies,
    randomMovie,
    isLoading,
  } = useSelector((state) => state.movieR); 
 
  useEffect(() => {
    dispatch(fetchTrendingMovies(3));
    dispatch(fetchPopularMovies(limit, 1));
    dispatch(fetchNowPlayingMovies(limit));
    dispatch(fetchUpComingMovies(limit));
    dispatch(fetchTopRatedMovies(limit));
    dispatch(fetchRandomMovie())
  }, []);
 

  const createMovieList = (movie) => {
    return (
      <Heavy
        key={movie.id}
        id={movie.id}
        title={movie.title}
        vote_average={movie.vote_average}
        release_date={movie.release_date}
        poster_path={movie.poster_path}
      />
    );
  };

  return (
    <section>
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

          <div className="mx-auto max-w-screen-2xl bg-white px-4 py-8">
            <div className="flex justify-between">
              <h1 className="font-lime text-4xl mb-4 text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                Now Playing
                </span>{" "}
                
                Movies
              </h1> 
            </div>

            <div className="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-4 md:max-w-screen-xl md:grid-cols-4 lg:max-w-screen-2xl ">
              <Suspense fallback={<Loading />}>
                {nowPlayingMovies.length > 0 &&
                  nowPlayingMovies.map((movie) => createMovieList(movie))}
              </Suspense>
            </div>
          </div>

          <div className="bg-primary">
            <h3 className="ml-4 pt-6 font-lime text-4xl font-extrabold text-white dark:text-white">
              <span className="bg-gradient-to-r from-white to-emerald-600 bg-clip-text text-transparent">
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

          <div className="mx-auto max-w-screen-2xl bg-white px-4 py-8">
            <div className="flex justify-between">
              <h1 className="mb-4 font-lime text-4xl font-extrabold text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                  Popular
                </span>{" "}
                Movies
              </h1>
            </div>
            <div className="mx-auto grid  gap-4 grid-cols-2 sm:grid-cols-4 md:max-w-screen-xl md:grid-cols-4  lg:max-w-screen-2xl ">
              <Suspense fallback={<Loading />}>
                {movies.length > 0 &&
                  movies.map((movie) => createMovieList(movie))}
              </Suspense>
            </div>
          </div>

          <div className="w-full bg-primary">
            <div className="mx-auto max-w-screen-2xl py-8 px-4">
              <div className="flex justify-between">
                <h1 className="mb-4 font-lime text-4xl font-extrabold text-white dark:text-white">
                  <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                    Top Rated
                  </span>{" "}
                  Movies
                </h1>
                
              </div>
              <div className="mx-auto grid  grid-cols-2 gap-4 sm:grid-cols-4 md:max-w-screen-xl md:grid-cols-4 lg:max-w-screen-2xl ">
                <Suspense fallback={<Loading />}>
                  {topRatedMovies.length > 0 &&
                    topRatedMovies.map((movie) => createMovieList(movie))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      )}
      <ScrollToTopButton />
    </section>
  );
}
