import React, { useState } from "react";
import TvCard from "./TvCard";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { fetchMoreTvs } from "../redux/actions/movieActions";

export default function TvList({tvShows, totalPages, genresIds, isLoading}) {
  const [curPage, setCurPage] = useState(1);
  const dispatch = useDispatch();


  const createTvList = (tvShowsList) => {
    return (
      isLoading ? <Loading /> :
      tvShowsList && 
      tvShowsList.map((tvshow) => (
        <TvCard
          key={tvshow.id}
          id={tvshow.id}
          title={tvshow.name}
          vote_average={tvshow.vote_average}
          release_date={tvshow.first_air_date}
          poster_path={tvshow.poster_path}
        />
      ))
    );
  };
  const handleLoadMore = () => {
    setCurPage(curPage + 1);
    if (isLoading) return;
    dispatch(fetchMoreTvs(curPage, genresIds));

    // console.log(movies);
    // setCurPage(curPage + 1);
    // if (isLoading) return;
    // dispatch(fetchMoreMovies(curPage, genresIds));
    // console.log("handleloadmore", curPage);
  };
  return (
    <>
      <h1>
        {/* Page number: {movies && curPage} Total Pages: {movies && totalPages} */}
        TV Show
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5 ">
        {createTvList(tvShows)}
      </div>
      <button
        type="button"
        onClick={handleLoadMore}
        // disabled={curPage === totalPages}
        className="btnLoadmore mb-2 me-2 mt-6 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {/* {curPage === totalPages ? "No More Movies" : "Load More"} */}Load
      </button>

      {/* <div className="grid grid-cols-5 gap-4">
        
        {tvshow.length > 0 &&
          tvshow.map((tvshow) => (
            <TvCard
              key={tvshow.id}
              id={tvshow.id}
              title={tvshow.name}
              vote_average={tvshow.vote_average}
              release_date={tvshow.first_air_date}
              poster_path={tvshow.poster_path}
            />
          ))}
      </div> */}
    </>
  );
}
