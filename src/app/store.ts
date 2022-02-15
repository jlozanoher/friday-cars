import { configureStore } from "@reduxjs/toolkit";
import { makesReducer, modelsReducer, vehiclesReducer } from "../slices";

const store = configureStore({
  reducer: {
    makes: makesReducer,
    models: modelsReducer,
    vehicles: vehiclesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
