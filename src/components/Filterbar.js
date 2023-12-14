import React, { useEffect, useState } from "react";
import ButtonFilter from "./ui/ButtonFilter";
import { API_URL } from "../utils/constant";

export default function Filterbar({ isFilter, setIsFilter }) {
  const [genres, setGenres] = useState([]);
  const [filterGenres, setFilterGenres] = useState([]);

  const [isActive, setIsActive] = useState(false);

  const fetchGeners = async () => {
    const response = await fetch(
      `${API_URL}genre/movie/list?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`,
    ).then((res) => res.json());
    return response;
  };

  const handleFilter = (id, isActive) => {
    console.log('isActive',isActive);
    !isActive
      ? setFilterGenres([...filterGenres, id])
      : setFilterGenres((current) =>
          current.filter((genre) => {
            return genre.id === id;
          }),
        );
    !isActive ? setIsActive(true) : setIsActive(false)
    console.log(id,filterGenres, isActive);
  };
  // const fetchMoviesByGenres = async () =>{
  //     const response = await fetch(
  //         `${API_URL}discover/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&sort_by=release_date.desc&page=1&with_genres=35,37,80`
  //       ).then((res) => res.json());
  //       return response;
  // }
  useEffect(() => {
    fetchGeners().then((res) => setGenres(res.genres));
    // isFilter && fetchMoviesByGenres()
  }, []);

  return (
    <div className="flex w-full flex-wrap bg-secondary ">
      {genres &&
        genres.map((genre) => (
          <ButtonFilter
            key={genre.id}
            isActive ={isActive}
            onClick={() => {
              handleFilter(genre.id, isActive);
            }}
          >
            {genre.name}
          </ButtonFilter>
        ))}
    </div>
  );
}
