import { actionType } from "../actions/actionTypes";

const initialState = {
  movies: [],
  moreMovies: [],
  nowPlayingMovies: [],
  trendingMovies: [],
  upComingMovies: [],
  topRatedMovies: [],
  tvshow: [],
  movieDetail: {},
  movieTrailer: [],
  tvDetail: {},
  currentPage: 1,
  itemsPerPage: 10,
  isLoading: true,
};

export const paginationReducer = (state = initialState, action)=>{

}

export const movieReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case actionType.GET_MOVIES:
      return { ...state, movies: payload, isLoading: false };

    case actionType.GET_MOVIE_DETAIL:
      return { ...state, movieDetail: payload, isLoading: false };

    // case actionType.GET_MORE_MOVIES:
    //   return { ...state, moreMovies: payload, isLoading: false };

    case actionType.GET_TRENDING_MOVIES:
      return { ...state, trendingMovies: payload, isLoading: false };

    case actionType.GET_NOWPLAYING_MOVIES:
      return { ...state, nowPlayingMovies: payload, isLoading: false };

    case actionType.GET_UPCOMING_MOVIES:
      return { ...state, upComingMovies: payload, isLoading: false };

    case actionType.GET_TOPRATED_MOVIES:
      return { ...state, topRatedMovies: payload, isLoading: false };

    case actionType.GET_POPULAR_TV:
      return { ...state, tvshow: payload, isLoading: false };

     case actionType.GET_MOVIE_TRAILER:
      return { ...state, movieTrailer: payload, isLoading: false };
     
    case actionType.GET_TV_DETAIL:
      return { ...state, tvDetail: payload, isLoading: false };

    case actionType.SEARCH_MOVIE:
      return { ...state, movies: payload, isLoading: false };

    case actionType.GET_MORE_MOVIES:
      return { ...state, currentPage: state.currentPage + 1, movies: [...state.movies, ...action.payload] };

    default:
      return state;
  }
};
