import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies, fetchMoreMovies, fetchPopularMovies } from "../redux/actions/movieActions";
import Loading from "../components/Loading";

export default function Movies() {
  const dispatch = useDispatch();
  let { isLoading, } = useSelector((state) => state.movieR);
  let { movies } = useSelector((state) => state.movieR)
  const [curPage, setCurPage] = useState(1);
  const isButtonDisabled = curPage >=5;


  useEffect(() => {
    // fetchMoviePopular().then((res) => {
    //   setMovies(res.results.slice(0,7));
    //   console.log(res);
    // }); 
    dispatch(fetchAllMovies())

    // if(curPage>1){
    //   dispatch(fetchMoreMovies(curPage))
    //   createPopularMovieList(moreMovies)

    // console.log(moreMovies, curPage);

    // }

  }, [dispatch]);

  const createPopularMovieList = (movieList) => {
    return isLoading ? "loading" : movieList.map((movie) => {
      return <Card
        key={movie.id}
        id={movie.id}
        title={movie.title}
        vote_average={movie.vote_average}
        release_date={movie.release_date}
        poster_path={movie.poster_path}
      />;
    });
  };

  const handleLoadMore = () => { 
    setCurPage(curPage + 1)
    if (isLoading) return
    dispatch(fetchMoreMovies(curPage))
    console.log("hello", curPage);
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Popular
        </span>{" "}
        Movie
      </h1>

      <div className="grid grid-cols-5 gap-4 ">
        {createPopularMovieList(movies)}
      </div>
      <button
        type="button"
        onClick={handleLoadMore}
        disabled={isButtonDisabled}
        class="btnLoadmore text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium w-full mt-6 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {isButtonDisabled ? 'No More Movies' : 'Load More' }
      </button>
    </div>
  );
}
