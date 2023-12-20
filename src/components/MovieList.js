import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { fetchAllMovies, fetchMoreMovies } from "../redux/actions/movieActions";
import { API_URL } from "../utils/constant";
// import TodoListItem from './TodoListItem'

const seleteMovie = (state) => state.todos;

export const MovieList = ({totalPages}) => {
  const dispatch = useDispatch();
  let { isLoading } = useSelector((state) => state.movieR);
  let { movies } = useSelector((state) => state.movieR);
  const [curPage, setCurPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const isButtonDisabled = curPage >= itemPerPage;

  const createPopularMovieList = (movieList) => {
    
    return isLoading
      ? "loading"
      : movieList && movieList.map((movie) => {
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
  const fetchPageResult = async () => {
    const response = await fetch(
      `${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`,
    ).then((res) => res.json());
    return response;
  };


  const handleLoadMore = () => {
    setCurPage(curPage + 1);
    if (isLoading) return;
    dispatch(fetchMoreMovies(curPage));
    console.log("handleloadmore", curPage);
  };

  useEffect(() => {

    dispatch(fetchAllMovies());
    // fetchPageResult().then((res) => setItemPerPage(res.total_pages));
    // movies && setTotalPages(movies.total_pages);

    movies &&
      console.log("movies list page", curPage, movies.total_pages);
  }, [dispatch]);

  // const pageNumber = movies.total_pages

  return (
    <>
      <h1>Page number {movies && movies.total_pages}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 ">
        {createPopularMovieList(movies.results)}
      </div>
      <button
        type="button"
        onClick={handleLoadMore}
        disabled={curPage === totalPages}
        className="btnLoadmore mb-2 me-2 mt-6 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {curPage === totalPages ? "No More Movies" : "Load More"}
      </button>
    </>
  );
};

export default MovieList;
