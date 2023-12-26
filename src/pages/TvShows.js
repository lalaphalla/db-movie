import React, { useEffect, useState } from "react";
import { fetchPopularTV, fetchTotalsPage } from "../redux/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
import TvList from "../components/TvList";
import Filterbar from "../components/Filterbar";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function TvShows() {
  const dispatch = useDispatch();
  let { tvShows, totalPages } = useSelector((state) => state.movieR);
  let { isLoading } = useSelector((state) => state.movieR);
  const [genresIds, setGenresIds] = useState("");
  const [isFilter, setIsFilter] = useState(false)
  const category = "tv"
  useEffect(() => {
    dispatch(fetchPopularTV(genresIds));
    dispatch(fetchTotalsPage(genresIds))
  }, [dispatch, genresIds]);

  return (
    <div className="mx-auto max-w-screen-xl">
      <Filterbar category={category} isFilter={isFilter} setIsFilter={setIsFilter} setGenresIds={setGenresIds} />
      <div className="px-4">
        <h1 className="mb-4 font-lime my-4 text-3xl text-gray-900 dark:text-white md:text-4xl ">
          <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
            Popular
          </span>{" "}
          TV Show
        </h1>
        <TvList tvShows={tvShows} totalPages={totalPages} genresIds={genresIds} isLoading={isLoading} />
      </div>
      <ScrollToTopButton />

    </div>
  );
}
