import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProject } from "../../../pages/profile/news";

export interface initialState {
  projects: IProject[];
  project: IProject | {};
  created: string;
  deleted: string;
}

const initialState: initialState = {
  projects: [],
  project: {},
  created: "",
  deleted: "",
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
    setCreated: (state, action: PayloadAction<string>) => {
      state.created = action.payload;
    },
    setDeleted: (state, action: PayloadAction<string>) => {
      state.deleted = action.payload;
    },
  },
});

export const { setProjects, setProject, setCreated } = projectsSlice.actions;

export default projectsSlice.reducer;
