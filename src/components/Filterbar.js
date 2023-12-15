import React, { useEffect, useState } from "react";
import ButtonFilter from "./ui/ButtonFilter";
import { API_URL } from "../utils/constant";

export default function Filterbar({ isFilter, setIsFilter, setGenresIds }) {
  const [genres, setGenres] = useState([
    { 'id': 0 },
    { 'name': '' },
  ]);
  //get id from genres [1,2,3]
  const [filterGenres, setFilterGenres] = useState([]);

  const [isActive, setIsActive] = useState(false);

  const fetchGeners = async () => {
    const response = await fetch(
      `${API_URL}genre/movie/list?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`,
    ).then((res) => res.json());
    return response;
  };

  const convertArrayToString = () => {
    const stringResult = filterGenres.join(', ')
    setGenresIds(stringResult)
  }
  const handleSearch = () => {
    convertArrayToString()
    setIsFilter(true)
  }
  const removeElement = (idElementRemove) => {
    const newArray = fetchGeners.filter((element) => element !== idElementRemove)
    setFilterGenres(newArray)
  }


  const handleFilter = (id, isActive) => {

    const itemIdex = filterGenres.indexOf(id)
    if (itemIdex === -1) {
      setFilterGenres([...filterGenres, id])
    } else {
      const updatedItems = [...filterGenres]
      updatedItems.splice(itemIdex, 1)
      setFilterGenres(updatedItems)
    }

    // setIsFilter(true)
    // if (isActive) {
    //   // removeElement(id)
    //   setIsActive(false)
    //   // setFilterGenres((current) =>
    //   //   current.filter((genre) => {
    //   //     return genre.id === id;
    //   //   }),
    //   // );
    // } else {
    //   setFilterGenres([...filterGenres, id])
    //   setIsActive(true)
    // }
    // console.log('isActive', isActive);
    console.log(filterGenres, id);

    // !isActive ? setIsActive(true) : setIsActive(false)
    // console.log(id, filterGenres, isActive);
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
    <div>

      <div className="flex w-full flex-wrap bg-secondary ">
        {genres &&
          genres.map((genre) => (
            <ButtonFilter
              key={genre.id}
              isActive={isActive}
              onClick={() => {
                handleFilter(genre.id, isActive);
              }}
            >
              {genre.name}
            </ButtonFilter>
          ))}
      </div>
      <button
      onClick={() => {
        handleSearch()
      }}
        className="bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search
      </button>
    </div>
  );
}
