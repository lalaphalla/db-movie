import { API_URL } from '../utils/constant'

export const fetchMoviePopular = async () => {
    const response = await fetch(`${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`)
    .then(res => res.json())
    return response
}