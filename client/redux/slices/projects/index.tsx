import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProject {
  id: number;
  _id: string;
  name: string;
  description: string;
  order: number;
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

export type TAlert = {
  message: string;
  status: string;
};

export interface initialState {
  projects: IProject[];
  project: IProject | {};
  projectsFiltered: IProject[];
  projectSelected: IProject | {};
  modal: TModal;
  alert: { message: string; status: string }[];
}

const initialState: initialState = {
  projects: [],
  project: {},
  projectsFiltered: [],
  projectSelected: {},
  modal: { actions: false, update: false, delete: false, create: false },
  alert: [],
  // alert: { message: "", status: "" },
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<IProject[]>) => {
      state.projects = [...action.payload];
    },
    setModal: (state, action: PayloadAction<TModalPayload>) => {
      const { name, value } = action?.payload;
      state.modal = { ...state.modal, [name]: value };
    },
    setProject: (state, action: PayloadAction<TModalPayload>) => {
      state.project = { ...action.payload };
    },
    setAlert: (state, action: PayloadAction<TAlert>) => {
      state.alert = [...state.alert, action?.payload];
    },
    closeAlert: (state, action: PayloadAction<number>) => {
      state.alert = [...state.alert].splice(action?.payload, 1);
    },
    setSelected: (state, action: PayloadAction<IProject>) => {
      state.projectSelected = { ...action.payload };
    },
    setFilter: (state, action: PayloadAction<IProject[]>) => {
      state.projectsFiltered = [...action.payload];
    },
  },
});

export const {
  setProjects,
  setFilter,
  setSelected,
  setProject,
  setModal,
  setAlert,
  closeAlert,
} = projectsSlice.actions;

export default projectsSlice.reducer;
