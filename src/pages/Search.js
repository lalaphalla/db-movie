import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearSearch, fetchSearchMovie } from "../redux/actions/movieActions"; 
import CardSearch from "../components/CardSearch";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  //api
  const dispatch = useDispatch();
  let { searchMovies } = useSelector((state) => state.movieR);

  useEffect(() => {
    dispatch(fetchSearchMovie(query));
    return () => {
      dispatch(clearSearch());
    };
  }, [dispatch,query]);
  return (
    <section className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 px-4 mb-2"> 
      {searchMovies && searchMovies.map((movie)=>(
        // <p>{movie.title}</p>
      <CardSearch 
        key={movie.id}
        id={movie.id}
        title={movie.title} 
        overview={movie.overview}
        release_date={movie.release_date}
        poster_path={movie.poster_path}
      />
      ))}
        <ScrollToTopButton />

    </section>
  );
}
