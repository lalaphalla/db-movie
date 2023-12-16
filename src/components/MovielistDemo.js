// MovieList.js
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'; 
import MovieDemo from '../pages/MovieDemo';

const MovieListDemo = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const observer = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=${page}`
        );

        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, [page]);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    if (observer.current) {
      observer.current.observe(document.getElementById('observer'));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieDemo key={movie.id} {...movie} />
      ))}
      <div id="observer" style={{ height: '10px' }}></div>
    </div>
  );
};

export default MovieListDemo;
