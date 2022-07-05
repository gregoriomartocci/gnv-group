import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProject } from "../../../pages/profile/news";

export type TResult = {
  status: string;
  message: string;
  loading: boolean;
};

export interface initialState {
  projects: IProject[];
  project: IProject | {};
  created: TResult;
  deleted: TResult;
}

const initialState: initialState = {
  projects: [],
  project: {},
  created: { status: "", message: "", loading: false },
  deleted: { status: "", message: "", loading: false },
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
    setCreated: (state, action: PayloadAction<TResult>) => {
      state.created = action.payload;
    },
    setDeleted: (state, action: PayloadAction<TResult>) => {
      state.deleted = action.payload;
    },
  },
});

export const { setProjects, setProject, setCreated } = projectsSlice.actions;

export default projectsSlice.reducer;
