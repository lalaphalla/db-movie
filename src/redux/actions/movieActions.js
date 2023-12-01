import { API_URL } from "../../utils/constant"
import axios from 'axios'
import { actionType } from "./actionTypes"

export const fetchAllMovies = (category, limit) =>{
    return(dispatch) => {
        axios(`${API_URL}movie/${category}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`) 
            .then(res => dispatch({
                type: actionType.GET_MOVIES,
                payload: res.data.results.slice(0,limit)
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
export const fetchTrendingMovies = () =>{
    return(dispatch) => {
        axios(`${API_URL}trending/movie/day?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`) 
            .then(res => dispatch({
                type: actionType.GET_TRENDING_MOVIES,
                payload: res.data.results.slice(0,7)
            }))
    }
}

export const fetchPopularTV = (category) =>{
    return(dispatch) => {
        axios(`${API_URL}tv/${category}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`) 
            .then(res => dispatch({
                type: actionType.GET_POPULAR_TV,
                payload: res.data.results.slice(0,7)
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