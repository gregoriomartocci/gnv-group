import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Project = {
  id: string;
  name: string;
  description: string;
  date: string;
};

export interface initialState {
  projects: Project[];
  project: Project;
}

const initialState: initialState = {
  projects: [],
  project: { id: "", date: "", name: "", description: "" },
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = [...action.payload];
    },
    setProject: (state, action: PayloadAction<Project>) => {
      state.project = { ...action.payload };
    },
  },
});

export const { setProjects, setProject } = projectsSlice.actions;

export default projectsSlice.reducer;
