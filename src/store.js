import {configureStore} from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import userReducer from "./reducers/userReducer";
import questionReducer from "./reducers/questionReducer";
import authedUserReducer from "./slices/authedUserSlice";

export const store = configureStore({
  reducer: {
    authedUser: authedUserReducer,
    users: userReducer,
    questions: questionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(logger)
})
