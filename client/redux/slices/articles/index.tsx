import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Article = {
  id: string;
  name: string;
  description: string;
  date: string;
};

export interface initialState {
  articles: Article[];
  article: Article;
}

const initialState: initialState = {
  article: { id: "", date: "", name: "", description: "" },
  articles: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    getArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = [...action.payload];
    },
    getArticle: (state, action: PayloadAction<Article>) => {
      state.article = { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getArticles, getArticle } = articlesSlice.actions;

export default articlesSlice.reducer;
