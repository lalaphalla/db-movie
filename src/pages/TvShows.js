import React, { useEffect } from 'react'
import { fetchPopularTV } from '../redux/actions/movieActions';
import { useDispatch, useSelector } from 'react-redux'; 
import TvCard from '../components/TvCard';

export default function TvShows() {
    
  const dispatch = useDispatch();
  let { tvshow } = useSelector((state) => state.movieR);
    
  useEffect(() => { 
    dispatch(fetchPopularTV('popular'));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Popular
        </span>{" "}
        TV Show
      </h1>

      <div className="grid grid-cols-7 gap-4">
        {tvshow.length > 0 &&
          tvshow.map((tvshow) => (
            <TvCard
              key={tvshow.id}
              id={tvshow.id}
              title={tvshow.name}
              vote_average={tvshow.vote_average}
              release_date={tvshow.first_air_date}
              poster_path={tvshow.poster_path}
            />
          ))}
      </div>
    </div>
  )
}
