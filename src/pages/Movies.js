import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllMovies,
  fetchMoreMovies,
  fetchMoviesByGenres,
  fetchPopularMovies,
} from "../redux/actions/movieActions";
import Loading from "../components/Loading";
import { MovieList } from "../components/MovieList";
import Filterbar from "../components/Filterbar";

export default function Movies() {
  const dispatch = useDispatch();
  let { isLoading } = useSelector((state) => state.movieR);
  let { movies } = useSelector((state) => state.movieR);
  const [curPage, setCurPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const isButtonDisabled = curPage >= 5;
  const [isFilter, setIsFilter] = useState(false)
  const [genresIds, setGenresIds] = useState('')
  const observer = useRef();

  useEffect(() => {
    !isFilter ? dispatch(fetchAllMovies()) : dispatch(fetchMoviesByGenres(genresIds))
    // movies && setItemPerPage(movies.total_pages)
    console.log(genresIds)
    movies && setTotalPages((pre) => movies.total_pages)
    console.log('movie_page', totalPages)
  }, [dispatch, genresIds, isFilter]);

  // infinite scroll
  // const handleIntersection = (entries) => {
  //   if (entries[0].isIntersecting) {
  //     setCurPage((prevPage) => prevPage + 1);
  //   }
  // };

  // useEffect(() => {
  //   observer.current = new IntersectionObserver(handleIntersection, {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.1,
  //   });

  //   if (observer.current) {
  //     observer.current.observe(document.getElementById('observer'));
  //   }

  //   return () => {
  //     if (observer.current) {
  //       observer.current.disconnect();
  //     }
  //   };
  // }, []);
  const Heavy = lazy(() => import("../components/Card"));
  const createPopularMovieList = (movieList) => {
    return isLoading
      ? <Loading />
      : movieList.map((movie) => {
        return (
          <Suspense fallback={<Loading />}>
            <Heavy
              key={movie.id}
              id={movie.id}
              title={movie.title}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
            />
          </Suspense>

        );
      });
  };

  const handleLoadMore = () => {
    setCurPage(curPage + 1);
    if (isLoading) return;
    dispatch(fetchMoreMovies(curPage));
    console.log("hello", curPage);
  };

  return (
    <div className="mx-auto max-w-screen-xl">
      <Filterbar isFilter={isFilter} setIsFilter={setIsFilter} setGenresIds={setGenresIds} />
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
          Popular
        </span>{" "}
        Movie
      </h1>
      <MovieList totalPages={totalPages}/>
      {/* <div className="grid grid-cols-5 gap-4 ">
        <Suspense fallback={<Loading />}>
          {createPopularMovieList(movies)}
        </Suspense>
      </div>
      <button
        type="button"
        onClick={handleLoadMore}
        disabled={isButtonDisabled}
        className="btnLoadmore text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium w-full mt-6 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {isButtonDisabled ? "No More Movies" : "Load More"}
      </button> */}
    </div>
  );
}
