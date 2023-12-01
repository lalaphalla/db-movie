import React, { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovies } from "../redux/actions/movieActions";

export default function Movies() {
  const dispatch = useDispatch();
  let { movies } = useSelector((state) => state.movieR);

  useEffect(() => {
    // fetchMoviePopular().then((res) => {
    //   setMovies(res.results.slice(0,7));
    //   console.log(res);
    // });

    dispatch(fetchAllMovies("popular"));
  }, []);
  return (
    <div>
      <h2>Poplular</h2>

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
    </div>
  );
}
