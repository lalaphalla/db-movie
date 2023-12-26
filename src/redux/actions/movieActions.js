import { API_URL } from "../../utils/constant";
import axios from "axios";
import { actionType } from "./actionTypes";

export const fetchPopularMovies = (limit, page) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=${page}`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_MOVIES,
        payload: res.data.results.slice(0, limit),
      }),
    );
  };
};
export const fetchAllMovies = () => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_MOVIES,
        // payload: res.data.results,
        payload: res.data,
      }),
    );
  };
};

export const fetchMoviesByGenres = (genresIds) => {
  return (dispatch) => {
    axios(
      `${API_URL}discover/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genresIds} `,
    ).then((res) =>
      dispatch({
        type: actionType.GET_MOVIES,
        payload: res.data.results,
        // payload: res.data,
      }),
    );
  };
};

export const fetchTotalsPage = (genresIds) => {
  return (dispatch) => {
    axios(
      `${API_URL}discover/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genresIds} `,
    ).then((res) =>
      dispatch({
        type: actionType.GET_TOTAL_PAGES,
        payload: res.data.total_pages,
        // payload: res.data,
      }),
    );
  };
};

export const fetchMoreMovies = (page, genresIds) => {
  return (dispatch) => {
    axios(
      `${API_URL}discover/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&sort_by=popularity.desc&with_genres=${genresIds}&page=${
        page + 1
      }`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_MORE_MOVIES,
        payload: res.data.results,
        // payload: res.data,
      }),
    );
  };
};
export const fetchMoreTvs = (page, genresIds) => {
  return (dispatch) => {
    axios(
      `${API_URL}discover/tv?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&sort_by=popularity.desc&with_genres=${genresIds}&page=${
        page + 1
      }`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_MORE_TVS,
        payload: res.data.results,
        // payload: res.data,
      }),
    );
  };
};

export const fetchPopularTV = (genresIds) => {
  return (dispatch) => {
    axios(
      `${API_URL}discover/tv?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genresIds}`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_POPULAR_TV,
        payload: res.data.results,
      }),
    );
  };
};
export const fetchNowPlayingMovies = (limit) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_NOWPLAYING_MOVIES,
        payload: res.data.results.slice(0, limit),
      }),
    );
  };
};
export const fetchTopRatedMovies = (limit) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/top_rated?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_TOPRATED_MOVIES,
        payload: res.data.results.slice(0, limit),
      }),
    );
  };
};

export const fetchUpComingMovies = (limit) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_UPCOMING_MOVIES,
        payload: res.data.results.slice(0, limit),
      }),
    );
  };
};
export const fetchMovieDetail = (id) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_MOVIE_DETAIL,
        payload: res.data,
      }),
    );
  };
};
export const fetchTvDetail = (id) => {
  return (dispatch) => {
    axios(
      `${API_URL}tv/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_TV_DETAIL,
        payload: res.data,
      }),
    );
  };
};
export const fetchTrendingMovies = (limit) => {
  return (dispatch) => {
    axios(
      `${API_URL}trending/movie/day?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_TRENDING_MOVIES,
        payload: res.data.results.slice(0, limit),
      }),
    );
  };
};

export const fetchSearchMovie = (query) => {
  return (dispatch) => {
    axios(
      ` ${API_URL}search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&query=${query}`,
    ).then((res) =>
      dispatch({
        type: actionType.SEARCH_MOVIE,
        // payload: res.data.results
        payload: res.data.results.sort(function (a, b) {
          return b.popularity - a.popularity;
        }),
        // payload: res.data.results.sort(function (a, b) {
        //   return new Date(b.release_date) - new Date(a.release_date);
        // }),
      }),
    );
  };
};
export const fetchRandomMovie = () => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&page=1`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_RANDOM_MOVIE,
        payload: res.data.results[Math.floor(Math.random() * 19)],
      }),
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

export const fetchMovieTrailer = (id) => {
  return (dispatch) => {
    axios(
      `${API_URL}movie/${id}/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_MOVIE_TRAILER,
        payload: res.data.results,
      }),
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

export const fetchPersonDetail = (id) => {
  return (dispatch) => {
    axios(
      `${API_URL}person/${id}?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_PERSON_DETAIL,
        payload: res.data,
      }),
    );
  };
};
export const fetchPersonCredits = (id) => {
  return (dispatch) => {
    axios(
      `${API_URL}person/${id}/movie_credits?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&sort_by=popularity.desc`,
    ).then((res) =>
      dispatch({
        type: actionType.GET_PERSON_CREDITS,
        payload: res.data.cast,
      }),
    );
  };
};


export const clearMovieDetail = () => {
  return { type: "CLEAR_MOVIE_DETAILS" };
};
export const clearTvDetail = () => {
  return { type: "CLEAR_TV_DETAILS" };
};
export const clearPersonDetail = () => {
  return { type: actionType.CLEAR_PERSON_DETAILS };
};
export const clearSearch = () => {
  return { type: actionType.CLEAR_SEARCH };
};