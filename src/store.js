import {configureStore} from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import {combineReducers} from "redux";
import authedUserReducer from "./reducers/authedUserReducer";
import pollReducer from "./reducers/pollReducer";

const reducer = combineReducers({
  authedUser: authedUserReducer,
  polls: pollReducer
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(logger)
})
