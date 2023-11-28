import { API_URL } from "../../utils/constant"
import axios from 'axios'
import { actionType } from "./actionTypes"

export const fetchAllMovies = () =>{
    return(dispatch) => {
        axios(`${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`) 
            .then(res => dispatch({
                type: actionType.GET_MOVIES,
                payload: res.data.results.slice(0,7)
            }))
    }
}
export const fetchMovieDetail = (id) =>{
    return(dispatch) => {
        axios(`${API_URL}movie/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`) 
            .then(res => dispatch({
                type: actionType.GET_MOVIE_DETAIL,
                payload: res.data
            }))
    }
}

export const searchMovie = (title) =>{
    return(dispatch) =>{
        axios(` ${API_URL}search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&query=${title}`)
            .then(res => dispatch({
                type: actionType.SEARCH_MOVIE,
                payload: res.data
            }))
    }
}