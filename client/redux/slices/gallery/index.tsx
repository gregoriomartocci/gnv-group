import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IGallery {
  id: number;
  _id: string;
  title: string;
  technique: string;
  images: [];
  artist: string;
  measures: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  published: boolean;
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
  project: IGallery | {};
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
  galleryItems: IGallery[];
  galleryItem: IGallery | {};
  galleryItemsFiltered: IGallery[];
  galleryItemSelected: IGallery | {};
  modal: TModal;
  alert: { message: string; status: string }[];
}

const initialState: initialState = {
  galleryItems: [],
  galleryItem: {},
  galleryItemsFiltered: [],
  galleryItemSelected: {},
  modal: { actions: false, update: false, delete: false, create: false },
  alert: [],
  // alert: { message: "", status: "" },
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setGalleryItems: (state, action: PayloadAction<IGallery[]>) => {
      state.galleryItems = [...action.payload];
    },
    setModal: (state, action: PayloadAction<TModalPayload>) => {
      const { name, value } = action?.payload;
      state.modal = { ...state.modal, [name]: value };
    },
    setGalleryItem: (state, action: PayloadAction<TModalPayload>) => {
      state.galleryItem = { ...action.payload };
    },
    setAlert: (state, action: PayloadAction<TAlert>) => {
      state.alert = [...state.alert, action?.payload];
    },
    closeAlert: (state, action: PayloadAction<number>) => {
      state.alert = [...state.alert].splice(action?.payload, 1);
    },
    setSelected: (state, action: PayloadAction<IGallery>) => {
      state.galleryItemSelected = { ...action.payload };
    },
    setFilter: (state, action: PayloadAction<IGallery[]>) => {
      state.galleryItemsFiltered = [...action.payload];
    },
  },
});

export const {
  setGalleryItems,
  setFilter,
  setSelected,
  setGalleryItem,
  setModal,
  setAlert,
  closeAlert,
} = gallerySlice.actions;

export default gallerySlice.reducer;
