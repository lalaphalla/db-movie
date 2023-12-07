import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { applyMiddleware, compose, legacy_createStore } from "redux";

const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const centralStore = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);
