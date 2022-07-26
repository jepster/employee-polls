import {configureStore} from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import {combineReducers} from "redux";
import authedUserReducer from "./reducers/authedUserReducer";
import pollReducer from "./reducers/pollReducer";
import voteReducer from "./reducers/voteReducer";

const reducer = combineReducers({
  authedUser: authedUserReducer,
  polls: pollReducer,
  votes: voteReducer,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(logger)
})
