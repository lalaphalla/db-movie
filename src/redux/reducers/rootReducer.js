import { movieReducer } from "./movieReducer";
import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    movieR: movieReducer,
})