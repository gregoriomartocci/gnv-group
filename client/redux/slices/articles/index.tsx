import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IImagetoUpload } from "../../../components/Image-Uploader";

export interface IArticle {
  id?:number;
  _id?:string;
  title:string;
  source:string;
  date:string;
  images:IImagetoUpload[]
  published?: boolean;
  link:string;
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
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.articles = [...action.payload];
    },
    setArticle: (state, action: PayloadAction<IArticle>) => {
      state.article = { ...action.payload };
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
  setArticles,
  setArticle,
  setCreate,
  setDelete,
  setUpdate,
  setActions,
} = articlesSlice.actions;

export default articlesSlice.reducer;
