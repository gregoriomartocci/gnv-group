import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProject } from "../../../pages/profile/news";

export type TCreate = {
  status: string;
  message: string;
  loading: boolean;
  modal: boolean;
};

export type TDelete = {
  status: string;
  message: string;
  loading: boolean;
  modal: boolean;
  api: { path: string; id: number };
};

export interface initialState {
  projects: IProject[];
  project: IProject | {};
  create: TCreate;
  actions: boolean;
  delete: TDelete;
  update: TDelete;
}

const initialState: initialState = {
  projects: [],
  project: {},
  actions: false,
  create: { status: "", message: "", loading: false, modal: false },
  delete: {
    status: "",
    message: "",
    loading: false,
    modal: false,
    api: { path: "", id: 0 },
  },
  update: {
    status: "",
    message: "",
    loading: false,
    modal: false,
    api: { path: "", id: 0 },
  },
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
    setCreate: (state, action: PayloadAction<TCreate>) => {
      state.create = action.payload;
    },
    setDelete: (state, action: PayloadAction<TDelete>) => {
      state.delete = action.payload;
    },
    setUpdate: (state, action: PayloadAction<TDelete>) => {
      state.update = action.payload;
    },
    setActions: (state, action: PayloadAction<boolean>) => {
      state.actions = action.payload;
    },
  },
});

export const { setProjects, setProject, setCreate, setDelete, setActions } =
  projectsSlice.actions;

export default projectsSlice.reducer;
