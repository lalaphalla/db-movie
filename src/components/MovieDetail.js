import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMovieDetail,
  fetchMovieDetail,
  fetchMovieTrailer,
} from "../redux/actions/movieActions";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import CardCast from "../components/CardCast";
import { fetchCastById } from "../services/moviesAction";
import TrailerModal from "../components/TrailerModal";
import { API_BACKDROP_PATH, API_POSTER_PATH } from "../utils/constant";

export default function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [casts, setCasts] = useState([]);

  let { movieDetail, movieTrailer } = useSelector((state) => state.movieR);
  let { isMovieDetailLoad } = useSelector((state) => state.movieR);

  const imageUrl = API_BACKDROP_PATH + movieDetail.backdrop_path; //`http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetail.backdrop_path}`
  const hours = Math.floor(movieDetail.runtime / 60);
  const minutes = movieDetail.runtime % 60;
  const percentage = Math.round(movieDetail.vote_average * 10);
  const finalTrailer = "Final Trailer";
  const officialTrailer = "Official Trailer";
  const trailer = "Trailer";

  const trailerKey = movieTrailer.find(
    (movie) =>
      movie.name === finalTrailer ||
      movie.name === officialTrailer ||
      movie.type === trailer,
  );
  // const [trailerId, setTrailerId] = useState({});

  // const getTrailerId = () => {
  //   let trailerKey = ""
  //   if (movieTrailer.length > 0) trailerKey = movieTrailer.find(movie => (movie.name === finalTrailer).key)
  //   console.log(trailerKey);
  // }
  useEffect(() => {
    fetchCastById(id).then((res) => setCasts(res.cast.slice(0, 7)));
    // getMovieDetail(id).then(res => setMovieDetail(res.data) )
    dispatch(fetchMovieDetail(id));
    dispatch(fetchMovieTrailer(id));
    // setTrailerId(movieTrailer.find((movie) => movie.name === finalTrailer));

    return () => {
      dispatch(clearMovieDetail());
    };
  }, [dispatch, id]);

  return (
    <div className="">
      {isMovieDetailLoad ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1">
          {/* <div style={{'--image-url': `url(http://image.tmdb.org/t/p/original${movieDetail.poster_path})`}}  className="flex w-full bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-opacity-50 bg-[center_top]" > */}
          {/* background */}
          <div
            className="relative 
          before:absolute before:h-full before:w-full before:bg-black before:bg-opacity-70 before:content-[''] "
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            {/* <div className="absolute w-full h-[320px] bg-black bg-opacity-50" ></div> */}
            {/* content */}
            <div className="relative mx-auto flex max-w-screen-xl pb-8  ">
              <div className="w-1/4 py-8">
                {movieDetail.poster_path && (
                  <img
                    // className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    className="rounded-t-lg object-fill"
                    src={API_POSTER_PATH + movieDetail.poster_path}
                    alt="poster"
                  />
                )}
              </div>
              <div className="ml-6 mt-10 w-3/4 text-white">
                <h3 className="text-xl font-bold">{movieDetail.title}</h3>
                <ul>
                  <li> {movieDetail.release_date}</li>
                  <li>
                    {" "}
                    {movieDetail.genres &&
                      movieDetail.genres.map((genre) => genre.name + " ")}{" "}
                  </li>
                  <li>runtime:{`${hours}h ${minutes}m`}</li>
                </ul>
                <div className="flex items-center">
                  <div className="mr-2 w-16">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </div>
                  <p className="mr-4 font-bold">
                    User <br /> Score
                  </p>
                  {trailerKey && <TrailerModal videoId={trailerKey.key} />}{" "}
                </div>
                <div className="w-3/4">
                  <h3>Overview</h3>
                  <p>{movieDetail.overview}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl bg-white">
            <h3 className="text-2xl font-bold mt-4">Top Billed Cast</h3>
            <div className="mt-4 grid grid-cols-7 gap-4">
              {casts.length > 0 &&
                casts.map((cast) => (
                  <CardCast
                    key={cast.id}
                    name={cast.name}
                    profile_path={cast.profile_path}
                    character={cast.character}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
