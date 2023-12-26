import React, { Suspense, lazy, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { fetchMoreMovies } from "../redux/actions/movieActions";
import Loading from "./Loading";

const Heavy = lazy(() => import("../components/Card"));

export const MovieList = ({ movies, totalPages, genresIds }) => {
  const dispatch = useDispatch();
  let { isLoading } = useSelector((state) => state.movieR);
  const [curPage, setCurPage] = useState(1);

  const createPopularMovieList = (movieList) => {
    return isLoading
      ? <Loading />
      : movieList &&
      movieList.map((movie) => {
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
      });
  };

  const handleLoadMore = () => {
    setCurPage(curPage + 1);
    if (isLoading) return;
    dispatch(fetchMoreMovies(curPage, genresIds));
  };

  return (
    <>
      {/* <h1>
        Page number: {movies && curPage} Total Pages: {movies && totalPages}
      </h1> */}

      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 ">
          {createPopularMovieList(movies)}
        </div> 
      </Suspense>

      <button
        type="button"
        onClick={handleLoadMore}
        disabled={curPage === totalPages}
        className="btnLoadmore mb-2 me-2 mt-6 w-full rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {curPage === totalPages ? "No More Movies" : "Load More"}
      </button>
    </>
  );
};

export default MovieList;
