import React, { useEffect, useState } from "react";
import ButtonFilter from "./ui/ButtonFilter";
import { API_URL } from "../utils/constant";

export default function Filterbar({ setIsFilter, setGenresIds, category }) {
  const [genres, setGenres] = useState([{ id: 0 }, { name: "" }]);
  const [filterGenres, setFilterGenres] = useState([]);

  const [isActive, setIsActive] = useState(false);
  const [buttonStates, setButtonStates] = useState(
    genres &&
    genres.reduce((acc, genre) => {
      acc[genre] = false;
      return acc;
    }, {}),
  );

  const fetchGeners = async (category) => {
    const response = await fetch(
      `${API_URL}genre/${category}/list?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`,
    ).then((res) => res.json());
    return response;
  };

  const convertArrayToString = () => {
    const stringResult = filterGenres.join(", ");
    setGenresIds(stringResult);
  };
  const handleSearch = () => {
    if (filterGenres.length === 0) {
      setIsFilter(false)
    } else {
      convertArrayToString();
      setIsFilter(true);
    }
  };
  const removeElement = (idElementRemove) => {
    const newArray = fetchGeners.filter(
      (element) => element !== idElementRemove,
    );
    setFilterGenres(newArray);
  };

  const handleFilter = (id, isActive) => {
    const itemIdex = filterGenres.indexOf(id);
    if (itemIdex === -1) {
      setFilterGenres([...filterGenres, id]);
      setIsActive(true);
    } else {
      const updatedItems = [...filterGenres];
      updatedItems.splice(itemIdex, 1);
      setFilterGenres(updatedItems);
      setIsActive(false);
    }
    setButtonStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  useEffect(() => {
    fetchGeners(category).then((res) => setGenres(res.genres)); 
  }, []);

  return (
    <div>
      <div className="flex w-full flex-wrap bg-secondary py-2">
        {genres &&
          genres.map((genre) => (
            <button
              key={genre.id}
              className={`m-2 rounded-lg px-4 py-2 text-sm text-white ${buttonStates[genre.id] ? "bg-green-900 " : "bg-green-custom"
                }`}
              // style={{ backgroundColor: buttonStates[genre.id] ? "green" : "red" }}
              // isActive={isActive}
              onClick={() => {
                handleFilter(genre.id, isActive);
              }}
            >
              {genre.name}
            </button>
          ))}
      </div>
      <div className="flex w-full">
        <button
          onClick={() => {
            handleSearch();
          }}
          className="bottom-2.5 end-2.5 w-full bg-green-custom px-4 py-2 text-sm font-medium text-white hover:bg-green-900    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </div>
  );
}
