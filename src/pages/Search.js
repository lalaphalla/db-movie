import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchSearchMovie } from "../redux/actions/movieActions"; 
import CardSearch from "../components/CardSearch";

export default function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";

  //api
  const dispatch = useDispatch();
  let { searchMovies } = useSelector((state) => state.movieR);

  useEffect(() => {
    dispatch(fetchSearchMovie(query));
  }, [dispatch,query]);
  return (
    <section className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4">
      result of {query}
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

    </section>
  );
}
