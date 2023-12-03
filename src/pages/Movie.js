import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail } from "../redux/actions/movieActions";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import CardCast from "../components/CardCast";
import { fetchCastById } from "../services/moviesAction";

export default function Movie() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [casts, setCasts] = useState([]);

  let { movieDetail } = useSelector((state) => state.movieR);
  let { isLoading } = useSelector((state) => state.movieR);
  const hours = Math.floor(movieDetail.runtime / 60);
  const minutes = movieDetail.runtime % 60;
  const percentage = Math.round(movieDetail.vote_average * 10);

  useEffect(() => {
    fetchCastById(id).then((res) => setCasts(res.cast.slice(0, 7)));
    dispatch(fetchMovieDetail(id));
    console.log("useeffect");
  }, []);


  return (
    <div className="max-w-screen-xl mx-auto">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="flex">
            <div className="ml-6 w-[680px]">
              <img
                className="rounded-t-lg w-full"
                src={` http://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
                alt="poster"
              />
            </div>

            <div className="ml-6 mt-10">
              <h3 className="font-bold text-xl">{movieDetail.title}</h3>
              <ul>
                <li> {movieDetail.release_date}</li>
                <li> {movieDetail.genres && movieDetail.genres.map((genre) => genre.name + " ")} </li>
                <li>runtime:{`${hours}h ${minutes}m`}</li>
              </ul>
              <div className="flex items-center">
                <div className="w-16 mr-2">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div> 
                <p className="font-bold">User <br/> Score</p>
                <button>Play Trailer</button>
              </div>
              <h3>Overview</h3>
              <p>{movieDetail.overview}</p>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
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
