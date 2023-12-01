import { actionType } from "../actions/actionTypes";

const initialState = {
  movies: [],
  tvshow:[],
  movieDetail: {},
  isLoading: true,
};
export const movieReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case actionType.GET_MOVIES:
      return { ...state, movies: payload, isLoading: false };
      
    case actionType.GET_MOVIE_DETAIL:
      return { ...state, movieDetail: payload, isLoading: false };
    case actionType.GET_TRENDING_MOVIES:
      return { ...state, movies: payload, isLoading: false };
    case actionType.GET_POPULAR_TV:
      return { ...state, tvshow: payload, isLoading: false };

    case actionType.SEARCH_MOVIE:
      return { ...state, movies: payload, isLoading: false };
    default:
      return state;
  }
};
