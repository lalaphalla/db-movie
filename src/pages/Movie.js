import React, { useEffect } from 'react'
import MovieDetail from '../components/MovieDetail'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CastList from '../components/CastList';
import { fetchCastById } from '../services/moviesAction';
import { clearMovieDetail, fetchMovieDetail, fetchMovieTrailer } from '../redux/actions/movieActions';
import Loading from '../components/Loading';

export default function Movie() {
    const dispatch = useDispatch();
    const { id } = useParams();
    let { movieDetail, movieTrailer } = useSelector((state) => state.movieR);
    // let { isMovieDetailLoad } = useSelector((state) => state.movieR);
    let { isLoading } = useSelector((state) => state.movieR);
    const [casts, setCasts] = useState([]);
    // let { name, biography, birthday, gender, profile_path } =
    // (movieDetail && movieDetail) || {};

    useEffect(() => {
        fetchCastById(id).then((res) => setCasts(res.cast.slice(0, 7)));

        dispatch(fetchMovieDetail(id));
        dispatch(fetchMovieTrailer(id));

        return () => {
            dispatch(clearMovieDetail());
        };
    }, [dispatch, id]);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <> 
                    {movieDetail && <MovieDetail
                        movieDetail={movieDetail}
                        movieTrailer={movieTrailer}
                        isLoading={isLoading}
                    />}
                    <CastList casts={casts} />
                </>
            )}
        </div>
    )
}
