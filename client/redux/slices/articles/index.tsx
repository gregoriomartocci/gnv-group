import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IImagetoUpload } from "../../../components/Image-Uploader";

export interface IArticle {
  id?: number;
  _id: string;
  title: string;
  source: string;
  date: string;
  images: any[];
  description: string;
  published?: boolean;
  link: string;
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
  project: IArticle | {};
};

export interface initialState {
  articles: IArticle[];
  article: IArticle | {};
  create: TCreate;
  actions: boolean;
  delete: TDelete;
  update: TUpdate;
  alert: { message: string; status: string };
}

const initialState: initialState = {
  articles: [],
  article: {},
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
  alert: { message: "", status: "" },
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState, 
  reducers: {
    setState: (state, action: PayloadAction<initialState>) => {
      return (state = action.payload);
    },
    setArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.articles = [...action.payload];
    },
  },
});

export const { setState, setArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
