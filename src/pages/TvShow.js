import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTvDetail, fetchTvDetail } from "../redux/actions/movieActions";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import CardCast from "../components/CardCast";
import { fetchCastById } from "../services/moviesAction";

export default function TvShow() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [casts, setCasts] = useState([]);

  let { tvDetail } = useSelector((state) => state.movieR);
  let { isLoading } = useSelector((state) => state.movieR);
  const hours = Math.floor(tvDetail.runtime / 60);
  const minutes = tvDetail.runtime % 60;
  const percentage = Math.round(tvDetail.vote_average * 10);

  useEffect(() => {
    dispatch(fetchTvDetail(id));

    return () => {
      dispatch(clearTvDetail());
    };
  }, []);
  return (
    <div className="mx-auto max-w-screen-xl">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="flex">
            <img
              className="w-48 rounded-t-lg"
              src={` http://image.tmdb.org/t/p/w500/${tvDetail.poster_path}`}
              alt="poster"
            />
            <div>
              <h3>{tvDetail.name}</h3>
              <p>
                {tvDetail.release_date} - genres:{" "}
                {tvDetail.genres &&
                  tvDetail.genres.map((genre) => genre.name + ",")}
                runtime:{`${hours}h ${minutes}m`}
              </p>
              <div className="w-16">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              </div>
              <h3>Overview</h3>
              <p>{tvDetail.overview}</p>
            </div>
          </div>

          <div className="mx-auto grid max-w-screen-xl grid-cols-7 gap-4 ">
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
      )}
    </div>
  );
}
