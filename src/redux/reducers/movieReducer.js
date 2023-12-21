import { actionType } from "../actions/actionTypes";

const initialState = {
  // movies: [],
  movies: [],
  // moreMovies: [],
  nowPlayingMovies: [],
  trendingMovies: [],
  upComingMovies: [],
  topRatedMovies: [],
  tvShows: [],
  movieDetail: {},
  movieTrailer: [],
  tvDetail: {},
  searchMovies: [],
  randomMovie: {},
  currentPage: 1,
  itemsPerPage: 10,
  isLoading: true,
  isMovieDetailLoad: true,
  totalPages: 0
};

export const paginationReducer = (state = initialState, action)=>{

}

export const movieReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case actionType.GET_MOVIES:
      return { ...state, movies: payload, isLoading: false };

    case actionType.GET_TOTAL_PAGES:
      return { ...state, totalPages: payload, isLoading: false };
      
    case actionType.GET_MOVIES_BY_GENRES:
      return { ...state, movies: payload, isLoading: false };

    case actionType.GET_MOVIE_DETAIL:
      return { ...state, movieDetail: payload, isMovieDetailLoad: false };

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
      return { ...state, tvShows: payload, isLoading: false };

     case actionType.GET_MOVIE_TRAILER:
      return { ...state, movieTrailer: payload, isLoading: false };
     
    case actionType.GET_TV_DETAIL:
      return { ...state, tvDetail: payload, isLoading: false };

    case actionType.SEARCH_MOVIE:
      return { ...state, searchMovies: payload, isLoading: false };

    case actionType.GET_MORE_MOVIES:
      // return { ...state, currentPage: state.currentPage + 1, movies:payload };
      return { ...state, currentPage: state.currentPage + 1, movies: [...state.movies, ...action.payload] };

    case actionType.GET_RANDOM_MOVIE:
      return { ...state, randomMovie: payload };

      case actionType.CLEAR_MOVIE_DETAILS: 
      return {...state, movieDetail: {}, isLoading:false }

    default:
      return state;
  }
};
