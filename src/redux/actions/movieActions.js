import { API_URL } from "../../utils/constant";
import axios from "axios";
import { actionType } from "./actionTypes";

export const fetchPopularMovies = (limit, page) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=${page}`
    ).then((res) =>
      dispatch({
        type: actionType.GET_MOVIES,
        payload: res.data.results.slice(0, limit),
      })
    );
  };
};
export const fetchAllMovies = () => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`
    ).then((res) =>
      dispatch({
        type: actionType.GET_MOVIES,
        payload: res.data.results,
      })
    );
  };
};
export const fetchNowPlayingMovies = (limit) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/nowplaying?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`
    ).then((res) =>
      dispatch({
        type: actionType.GET_NOWPLAYING_MOVIES,
        payload: res.data.results.slice(0, limit),
      })
    );
  };
};
export const fetchTopRatedMovies = (limit) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/top_rated?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`
    ).then((res) =>
      dispatch({
        type: actionType.GET_TOPRATED_MOVIES,
        payload: res.data.results.slice(0, limit),
      })
    );
  };
};

export const fetchUpComingMovies = (limit) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`
    ).then((res) =>
      dispatch({
        type: actionType.GET_UPCOMING_MOVIES,
        payload: res.data.results.slice(0, limit),
      })
    );
  };
};
export const fetchMovieDetail = (id) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`
    ).then((res) =>
      dispatch({
        type: actionType.GET_MOVIE_DETAIL,
        payload: res.data,
      })
    );
  };
};
export const fetchTvDetail = (id) => {
  return (dispatch) => {
    axios(
      `${API_URL}tv/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`
    ).then((res) =>
      dispatch({
        type: actionType.GET_TV_DETAIL,
        payload: res.data,
      })
    );
  };
};
export const fetchTrendingMovies = () => {
  return (dispatch) => {
    axios(
      `${API_URL}trending/movie/day?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`
    ).then((res) =>
      dispatch({
        type: actionType.GET_TRENDING_MOVIES,
        payload: res.data.results.slice(0, 7),
      })
    );
  };
};

export const fetchPopularTV = (category) => {
  return (dispatch) => {
    axios(
      `${API_URL}tv/${category}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`
    ).then((res) =>
      dispatch({
        type: actionType.GET_POPULAR_TV,
        payload: res.data.results,
      })
    );
  };
};

export const fetchSearchMovie = (query) => {
  return (dispatch) => {
    axios(
      ` ${API_URL}search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&query=${query}`
    ).then((res) =>
      dispatch({
        type: actionType.SEARCH_MOVIE,
        payload: res.data.results.sort(function (a, b) {
          return new Date(b.release_date) - new Date(a.release_date);
        }),
      })
    );
  };
};
export const fetchRandomMovie = () => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`
    ).then((res) =>
      dispatch({
        type: actionType.GET_RANDOM_MOVIE,
        payload: res.data.results[Math.floor(Math.random() * 19)],
      })
    );
  };
};
// export const fetchMoreMovie = () => async (dispatch, getState) => {
//     const { currentPage, itemsPerPage } = getState().pagination;
//     const newData = await fetch(`${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`)
//     dispatch({
//         type: 'FETCH_MORE_DATA',
//         payload: newData,
//     })
// }

// export const fetchMoreMovies = () => async(dispatch, getState) => {
//     const { currentPage } = getState().pagination;
//     try {
//         const res = await axios.get(`${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=${currentPage + 1}`)
//         dispatch({
//             type: actionType.GET_MORE_MOVIES,
//             payload: res.data.results
//         })
//     } catch (error) {
//         console.error('Error Fetching', error)
//     }

export const fetchMoreMovies = (page) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=${
        page + 1
      }`
    ).then((res) =>
      dispatch({
        type: actionType.GET_MORE_MOVIES,
        payload: res.data.results,
      })
    );
  };
};
export const fetchMovieTrailer = (id) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/${id}/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`
    ).then((res) =>
      dispatch({
        type: actionType.GET_MOVIE_TRAILER,
        payload: res.data.results,
      })
    );
  };
};

// return (dispatch) => {
//     axios(`${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=${currentPage + 1}`)
//         .then(res => dispatch({
//             type: actionType.GET_MORE_MOVIES,
//             payload: res.data.results
//         }))
// }
// }
