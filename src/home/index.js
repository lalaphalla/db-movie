import React, { useEffect, useState } from "react";
import Card from "../components/Card"; 
import { useDispatch, useSelector } from "react-redux"
import { fetchAllMovies, fetchTrendingMovies } from "../redux/actions/movieActions";
import Search from "../components/Search";

export default function Home() {
  // const [movies, setMovies] = useState([]);
  const dispatch = useDispatch()

  let { movies } = useSelector(state => state.movieR)
  
  useEffect(() => {
    // fetchMoviePopular().then((res) => {
    //   setMovies(res.results.slice(0,7));
    //   console.log(res);
    // });

    dispatch(fetchTrendingMovies()) 
  }, []);

  return (
    <>
      Home Page
      <Search />
      <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
        {movies.length > 0 &&
          movies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              poster_path={movie.poster_path}
            /> 
          ))}
      </div>
    </>
  );
}
