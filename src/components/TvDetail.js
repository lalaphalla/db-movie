import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTvDetail, fetchTvDetail } from "../redux/actions/movieActions";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import CardCast from "../components/CardCast";
import { fetchCastById, fetchTvCastById } from "../services/moviesAction";
import { API_BACKDROP_PATH, API_POSTER_PATH } from "../utils/constant";
import defaultImage from "../assets/500x750.png";
import TrailerModal from "./TrailerModal";

export default function TvDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [casts, setCasts] = useState([]);

  let { tvDetail, isTvDetailLoad } = useSelector((state) => state.movieR);
  let { isLoading } = useSelector((state) => state.movieR);

  const hours = Math.floor(tvDetail.runtime / 60);
  const minutes = tvDetail.runtime % 60;
  const percentage = Math.round(tvDetail.vote_average * 10);

  const imageUrl = tvDetail.backdrop_path && API_BACKDROP_PATH + tvDetail.backdrop_path; //`http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieDetail.backdrop_path}`

  const finalTrailer = "Final Trailer";
  const officialTrailer = "Official Trailer";
  const trailer = "Trailer";
  const getThumbnail = () => {
    return tvDetail.poster_path
      ? API_POSTER_PATH + tvDetail.poster_path
      : defaultImage;
  };

  // const trailerKey = tvDetail.find(
  //   (movie) =>
  //     movie.name === finalTrailer ||
  //     movie.name === officialTrailer ||
  //     movie.type === trailer,
  // );
  useEffect(() => {
    fetchTvCastById(id).then((res) => setCasts(res.cast.slice(0, 7)));
    dispatch(fetchTvDetail(id));

    return () => {
      dispatch(clearTvDetail());
    };
  }, [dispatch,id]);

  return (
    <>
      {isTvDetailLoad ? (
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
            {/* content */}
            <div className="relative mx-auto flex max-w-screen-xl pb-8  ">
              <div className="w-1/4 py-8">
                <img
                  className="rounded-t-lg object-fill"
                  src={getThumbnail()}
                  alt="poster"
                />
              </div>

              <div className="ml-6 mt-10 w-3/4 text-white">
                <h3 className="mb-2 text-2xl font-bold">
                  {tvDetail.name} ({tvDetail.first_air_date})
                </h3>
                <p className="mb-4">
                  {tvDetail.release_date}
                  {tvDetail.genres &&
                    tvDetail.genres.map((genre) => genre.name + " ")}
                </p>
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
                  {/* {trailerKey && <TrailerModal videoId={trailerKey.key} />}{" "} */}
                </div>
                <div className="w-3/4">
                  <h3 className="text-xl font-bold">Overview</h3>
                  <p>
                    {tvDetail.overview
                      ? tvDetail.overview
                      : "We don't have an overview translated in English. Help us expand our database by adding one."}
                  </p>
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
    </>
  );
}
