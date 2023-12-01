import React, { useEffect } from 'react'
import { fetchPopularTV } from '../redux/actions/movieActions';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';

export default function TvShows() {
    
  const dispatch = useDispatch();
  let { tvshow } = useSelector((state) => state.movieR);
    
  useEffect(() => { 
    dispatch(fetchPopularTV('popular'));
  }, []);
  return (
    <div>
      <h2>TV Show</h2>

      <div className="grid grid-cols-7 gap-4 max-w-screen-xl mx-auto ">
        {tvshow.length > 0 &&
          tvshow.map((tvshow) => (
            <Card
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
