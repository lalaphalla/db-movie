import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { fetchAllMovies, fetchMoreMovies } from "../redux/actions/movieActions";
// import TodoListItem from './TodoListItem'

const seleteMovie = (state) => state.todos;

export const MovieList = () => {
  const dispatch = useDispatch();
  let { isLoading } = useSelector((state) => state.movieR);
  let { movies } = useSelector((state) => state.movieR);
  const [curPage, setCurPage] = useState(1);
  const isButtonDisabled = curPage >= 5;
  const createPopularMovieList = (movieList) => {
    return isLoading
      ? "loading"
      : movieList.map((movie) => {
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
        });
  };

  const handleLoadMore = () => {
    setCurPage(curPage + 1);
    if (isLoading) return;
    dispatch(fetchMoreMovies(curPage));
    console.log("hello", curPage);
  };

  useEffect(() => {
    dispatch(fetchAllMovies())
  }, [dispatch]);

  
  return (
    <>
      <div className="grid grid-cols-5 gap-4 ">
        {createPopularMovieList(movies)}
      </div>
      <button
        type="button"
        onClick={handleLoadMore}
        disabled={isButtonDisabled}
        className="btnLoadmore text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium w-full mt-6 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {isButtonDisabled ? "No More Movies" : "Load More"}
      </button>
    </>
  );
};

export default MovieList;
