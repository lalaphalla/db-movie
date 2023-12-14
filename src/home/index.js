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
    trendingMovies && trendingMovies.map((movie) => {
      <CardTrailer key={movie.id} title={movie.title} backdrop_path={movie.backdrop_path} />
    })
  }

  const Heavy = lazy(() => import("../components/Card"));
  const RandomPopular = lazy(() => import("../components/Hero"));
  return (
    <section className="max-w-screen-xl mx-auto  ">
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
          <div className="bg-white py-8">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Now Playing
              </span>{" "}
              Movies
            </h1>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              More
            </button>

            <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
              <Suspense fallback={<Loading />}>
                {nowPlayingMovies.length > 0 &&
                  nowPlayingMovies.map((movie) => createMovieList(movie))}
              </Suspense>
            </div>
          </div>

          <div className="grid grid-cols-3">
            {
              trendingMovies.length > 0 && trendingMovies.map((movie) => (
                <CardTrailer
                  key={movie.id}
                  title={movie.title}
                  backdrop_path={movie.backdrop_path} />
              ))
            }
            Hello
          </div>


          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Trending
            </span>{" "}
            Movies
          </h1>
          <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
            <Suspense fallback={<Loading />}>
              {trendingMovies.length > 0 &&
                trendingMovies.map((movie) => createMovieList(movie))}
            </Suspense>{" "}
          </div>

          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Popular
            </span>{" "}
            Movies
          </h1>
          <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
            <Suspense fallback={<Loading />}>
              {movies.length > 0 &&
                movies.map((movie) => createMovieList(movie))}
            </Suspense>
          </div>

          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Up Coming
            </span>{" "}
            Movies
          </h1>
          <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
            <Suspense fallback={<Loading />}>
              {upComingMovies.length > 0 &&
                upComingMovies.map((movie) => createMovieList(movie))}
            </Suspense>
          </div>

          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Top Rated
            </span>{" "}
            Movies
          </h1>
          <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
            <Suspense fallback={<Loading />}>
              {topRatedMovies.length > 0 &&
                topRatedMovies.map((movie) => createMovieList(movie))}
            </Suspense>
          </div>
        </div>
      )}
    </section>
  );
}
