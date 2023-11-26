import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { fetchMoviePopular } from '../../services/moviesAction'

export default function Home() {

  const [movies, setMovies] = useState([])

  useEffect(()=> {

    fetchMoviePopular()
      .then(res=>{ 
        setMovies(res.results)
        console.log(res)
      })
  },[])

  return (
    <>
    Home Page
    {
    movies.length > 0 &&
    movies.map((movie)=>(
      <Card 
      key={movie.id}
      id={movie.id}
      title={movie.title}
      release_date={movie.release_date}
      />
    ))}
    </>

  )
}
