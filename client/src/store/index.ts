import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as muiReducer } from "./mui";
import { reducer as componentsReducer } from "./components";
import { createLogger } from "redux-logger";

import { starWarsApi } from "./api";
import jikanApi from "./api/jikan-service";

const logger = createLogger({
  collapsed: true,
});

const rootReducer = combineReducers({
  mui: muiReducer,
  components: componentsReducer,
  [starWarsApi.reducerPath]: starWarsApi.reducer,
  [jikanApi.reducerPath]: jikanApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      logger,
      starWarsApi.middleware,
      jikanApi.middleware
    ),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
