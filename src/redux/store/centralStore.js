import { rootReducer } from "../reducers/rootReducer"
import thunk from "redux-thunk"
import { applyMiddleware, compose, legacy_createStore } from "redux"

const middleWare = [thunk]
export const centralStore = legacy_createStore(rootReducer, compose(applyMiddleware(...middleWare)))