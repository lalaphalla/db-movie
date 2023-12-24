import React, { useEffect, useState } from "react";
import { fetchPopularTV } from "../redux/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
import TvCard from "../components/TvCard";
import TvList from "../components/TvList";
import Filterbar from "../components/Filterbar";

export default function TvShows() {
  const dispatch = useDispatch();
  let { tvShows } = useSelector((state) => state.movieR);
  let { isLoading } = useSelector((state) => state.movieR);
  const [genresIds, setGenresIds] = useState("");
  const [isFilter, setIsFilter] = useState(false)
  const category = "tv"


  useEffect(() => {
    // dispatch(fetchMoviesByGenres(genresIds));
    // dispatch(fetchTotalsPage(genresIds));
    console.log(genresIds);

    dispatch(fetchPopularTV(genresIds));
    
  }, [dispatch,genresIds]);

  return (
    <div className="mx-auto max-w-screen-xl">
      <Filterbar category={category} isFilter={isFilter} setIsFilter={setIsFilter} setGenresIds={setGenresIds} />

      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
          Popular
        </span>{" "}
        TV Show
      </h1>
      <TvList tvShows={tvShows} genresIds={genresIds} isLoading={isLoading} />
    </div>
  );
}
