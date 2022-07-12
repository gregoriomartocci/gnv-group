import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProject {
  id: number;
  _id: string;
  name: string;
  description: string;
  images: string[];
  link: string;
  published: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

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

export type TUpdate = {
  status: string;
  message: string;
  loading: boolean;
  modal: boolean;
  api: { path: string; id: number };
  project: IProject | {};
};

export interface initialState {
  projects: IProject[];
  project: IProject | {};
  projects_filter: IProject[];
  create: TCreate;
  actions: boolean;
  delete: TDelete;
  update: TUpdate;
}

const initialState: initialState = {
  projects: [],
  project: {},
  projects_filter: [],
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
    project: {},
  },
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<IProject[]>) => {
      state.projects = [...action.payload];
    },
    setFilter: (state, action: PayloadAction<IProject[]>) => {
      state.projects_filter = [...action.payload];
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
    setUpdate: (state, action: PayloadAction<TUpdate>) => {
      state.update = action.payload;
    },
    setActions: (state, action: PayloadAction<boolean>) => {
      state.actions = action.payload;
    },
  },
});

export const {
  setProjects,
  setProject,
  setCreate,
  setFilter,
  setDelete,
  setUpdate,
  setActions,
} = projectsSlice.actions;

export default projectsSlice.reducer;
