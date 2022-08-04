import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IImagetoUpload } from "../../../components/Image-Uploader";

export interface ITemplate {
  id?: number;
  name: string;
  title: string;
  carousel: any[];
  description: string;
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
  article: ITemplate | {};
};

export interface initialState {
  templates: ITemplate[];
  template: ITemplate | {};
  create: TCreate;
  actions: boolean;
  delete: TDelete;
  update: TUpdate;
  alert: { message: string; status: string };
}

const initialState: initialState = {
  templates: [],
  template: {},
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
    article: {},
  },
  alert: { message: "", status: "" },
};

export const templatesSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<initialState>) => {
      return (state = action.payload);
    },
    setTemplates: (state, action: PayloadAction<ITemplate[]>) => {
      state.templates = [...action.payload];
    },
  },
});

export const { setState, setTemplates } = templatesSlice.actions;

export default templatesSlice.reducer;
