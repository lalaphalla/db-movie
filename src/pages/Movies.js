import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoviesByGenres,
  fetchTotalsPage,
} from "../redux/actions/movieActions";
import { MovieList } from "../components/MovieList";
import Filterbar from "../components/Filterbar";
import ScrollToTopButton from "../components/ScrollToTopButton";


export default function Movies() {
  const dispatch = useDispatch();
  let { movies, totalPages } = useSelector((state) => state.movieR);
  const [isFilter, setIsFilter] = useState(false)
  const [genresIds, setGenresIds] = useState('')
  const category = "movie"

  useEffect(() => {
    dispatch(fetchMoviesByGenres(genresIds))
    dispatch(fetchTotalsPage(genresIds))
  }, [dispatch, genresIds, isFilter]);

  return (
    <div className="mx-auto max-w-screen-xl">
      <Filterbar category={category} isFilter={isFilter} setIsFilter={setIsFilter} setGenresIds={setGenresIds} />
      <div className="px-4">
        <h1 className="font-lime my-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-4xl">
          <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
            Popular
          </span>{" "}
          Movie
        </h1>
        {movies && <MovieList movies={movies} totalPages={totalPages} genresIds={genresIds} />}
        <ScrollToTopButton />
      </div>
    </div>
  );
}
