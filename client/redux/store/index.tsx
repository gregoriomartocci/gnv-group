import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "../slices/articles";
import authSlice from "../slices/auth";
import projectsSlice from "../slices/projects";
import usersSlice from "../slices/users";

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    projects: projectsSlice,
    users: usersSlice,
    auth: authSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
