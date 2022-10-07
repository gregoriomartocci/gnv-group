import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IArticle {
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
  project: IArticle | {};
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
  articles: IArticle[];
  article: IArticle | {};
  articlesFiltered: IArticle[];
  articleSelected: IArticle | {};
  modal: TModal;
  alert: { message: string; status: string }[];
}

const initialState: initialState = {
  articles: [],
  article: {},
  articlesFiltered: [],
  articleSelected: {},
  modal: { actions: false, update: false, delete: false, create: false },
  alert: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<IArticle[]>) => {
      state.articles = [...action.payload];
    },
    setModal: (state, action: PayloadAction<TModalPayload>) => {
      const { name, value } = action?.payload;
      state.modal = { ...state.modal, [name]: value };
    },
    setArticle: (state, action: PayloadAction<TModalPayload>) => {
      state.article = { ...action.payload };
    },
    setAlert: (state, action: PayloadAction<TAlert>) => {
      state.alert = [...state.alert, action?.payload];
    },
    closeAlert: (state, action: PayloadAction<number>) => {
      state.alert = [...state.alert].splice(action?.payload, 1);
    },
    setSelected: (state, action: PayloadAction<IArticle>) => {
      state.articleSelected = { ...action.payload };
    },
  },
});

export const {
  setArticles,
  setSelected,
  setArticle,
  setModal,
  setAlert,
  closeAlert,
} = articlesSlice.actions;

export default articlesSlice.reducer;
