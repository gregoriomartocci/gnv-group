import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "../slices/articles";
import projectsSlice from "../slices/projects";
import templatesSlice from "../slices/templates";
import timelineSlice from "../slices/timeline";
import gallerySlice from "../slices/gallery";
import authSlice from "../slices/auth";
import usersSlice from "../slices/users";

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    timeline: timelineSlice,
    projects: projectsSlice,
    gallery: gallerySlice,
    users: usersSlice,
    auth: authSlice,
    templates: templatesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
