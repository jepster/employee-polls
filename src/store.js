import {configureStore} from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import {combineReducers} from "redux";
import authedUserReducer from "./reducers/authedUserReducer";
import userReducer from "./reducers/userReducer";
import questionReducer from "./reducers/questionReducer";

const reducer = combineReducers({
  authedUser: authedUserReducer,
  users: userReducer,
  questions: questionReducer,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(logger)
})
