import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProject } from "../../../pages/profile/news";

export interface initialState {
  projects: IProject[];
  project: IProject | {};
}

const initialState: initialState = {
  projects: [],
  project: {},
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<IProject[]>) => {
      state.projects = [...action.payload];
    },
    setProject: (state, action: PayloadAction<IProject>) => {
      state.project = { ...action.payload };
    },
  },
});

export const { setProjects, setProject } = projectsSlice.actions;

export default projectsSlice.reducer;
