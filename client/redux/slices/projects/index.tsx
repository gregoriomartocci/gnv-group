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

export type TModal = {
  actions: boolean;
  update: boolean;
  delete: boolean;
  create: boolean;
};

export type TModalPayload = {
  name: string;
  value: boolean;
};

export interface initialState {
  projects: IProject[];
  projectView: IProject | {};
  projectsFilter: IProject[];
  projectSelected: IProject | {};
  modal: TModal;
  alert: { message: string; status: string }[];
}

const initialState: initialState = {
  projects: [],
  projectView: {},
  projectsFilter: [],
  projectSelected: {},
  modal: { actions: false, update: false, delete: false, create: false },
  alert: [],
  // alert: { message: "", status: "" },
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<initialState>) => {
      return (state = action.payload);
    },
    // setModal: ()
    setModal: (state, action: PayloadAction<TModalPayload>) => {
      const { name, value } = action?.payload;
      state.modal = { ...state.modal, [name]: value };
    },
    setSelected: (state, action: PayloadAction<IProject>) => {
      state.projectSelected = { ...action.payload };
    },
    setProjectView: (state, action: PayloadAction<IProject>) => {
      state.projectView = { ...action.payload };
    },
    setProjects: (state, action: PayloadAction<IProject[]>) => {
      state.projects = [...action.payload];
    },
    setFilter: (state, action: PayloadAction<IProject[]>) => {
      state.projectsFilter = [...action.payload];
    },
  },
});

export const {
  setState,
  setProjects,
  setFilter,
  setSelected,
  setProjectView,
  setModal,
} = projectsSlice.actions;

export default projectsSlice.reducer;
