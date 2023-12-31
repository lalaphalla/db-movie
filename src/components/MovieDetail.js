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
import { API_BACKDROP_PATH } from "../utils/constant";
import ImagePath from "./ui/ImagePath";

export default function MovieDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [casts, setCasts] = useState([]);

  let { movieDetail, movieTrailer } = useSelector((state) => state.movieR);
  let { isMovieDetailLoad } = useSelector((state) => state.movieR);

  const imageUrl = movieDetail.backdrop_path && API_BACKDROP_PATH + movieDetail.backdrop_path; //`http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetail.backdrop_path}`
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

  useEffect(() => {
    fetchCastById(id).then((res) => setCasts(res.cast.slice(0, 7)));

    dispatch(fetchMovieDetail(id));
    dispatch(fetchMovieTrailer(id));

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
          <div
            className="relative before:absolute before:h-full before:w-full before:bg-black before:bg-opacity-70 before:content-[''] "
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            {/* content */}
            <div className="relative mx-auto flex max-w-screen-xl pb-8  px-4">
              <div className="w-1/4 py-8">
                <ImagePath path={movieDetail.poster_path} type='POSTER' />
              </div>

              <div className="ml-6 mt-10 w-3/4 text-white">
                <h3 className="mb-2 text-2xl font-bold">{movieDetail.title}</h3>
                <ul className="mb-4">
                  <li> {movieDetail.release_date}</li>
                  <li>
                    {" "}
                    {movieDetail.genres &&
                      movieDetail.genres.map((genre) => genre.name + " ")}{" "}
                  </li>
                  <li>Duration: {`${hours}h ${minutes}m`}</li>
                </ul>
                <div className="mb-6 flex items-center">
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
                  <h3 className="text-xl font-bold">Overview</h3>
                  <p>{movieDetail.overview}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-screen-xl bg-white pb-3">
            <h3 className="mt-4 text-2xl font-bold">Top Billed Cast</h3>
            <div className="mt-4 grid grid-cols-3 md:grid-cols-7 gap-4">
              {casts.length > 0 &&
                casts.map((cast) => (
                  <CardCast
                    key={cast.id}
                    id={cast.id}
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
