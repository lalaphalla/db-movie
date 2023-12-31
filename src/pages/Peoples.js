import React, { useEffect, useState } from "react";
import { fetchPopularPeople } from "../services/moviesAction";
import PersonCard from "../components/PersonCard";

export default function People() {
    const [people, setPeople] = useState({})


  useEffect(() => {
    fetchPopularPeople().then((res) => {
      setPeople(res.results); 
    });
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-4 ">
      <h1 className="mb-4 font-lime my-4 text-3xl text-gray-900 dark:text-white md:text-4xl ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-primary ">
          Popular
        </span>{" "}
        People
      </h1>

      <div className="grid grid-cols-3 md:grid-cols-5  gap-4 ">
        {people.length > 0 &&
          people.map((person) => (
            <PersonCard
              key={person.id}
              id={person.id}
              name={person.name}
              known_for={person.known_for}
              profile_path={person.profile_path}
            />
          ))}
      </div>
    </div>
  );
}
