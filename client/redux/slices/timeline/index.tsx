import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type THighlight = {
  name: string;
  description: string;
  images: string;
};
export interface ITimeline {
  id: number;
  _id: number;
  year: string;
  highlights: THighlight[];
}

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
  timelineItems: ITimeline[];
  timelineItem: ITimeline | {};
  timelineItemSelected: ITimeline | {};
  modal: TModal;
  alert: { message: string; status: string }[];
}

const initialState: initialState = {
  timelineItems: [],
  timelineItem: {},
  timelineItemSelected: {},
  modal: { actions: false, update: false, delete: false, create: false },
  alert: [],
};

export const timelineSlice = createSlice({
  name: "timeline",
  initialState,
  reducers: {
    setTimelineItems: (state, action: PayloadAction<ITimeline[]>) => {
      state.timelineItems = [...action.payload];
    },
    setModal: (state, action: PayloadAction<TModalPayload>) => {
      const { name, value } = action?.payload;
      state.modal = { ...state.modal, [name]: value };
    },
    setTimelineItem: (state, action: PayloadAction<TModalPayload>) => {
      state.timelineItem = { ...action.payload };
    },
    setAlert: (state, action: PayloadAction<TAlert>) => {
      state.alert = [...state.alert, action?.payload];
    },
    closeAlert: (state, action: PayloadAction<number>) => {
      state.alert = [...state.alert].splice(action?.payload, 1);
    },
    setSelected: (state, action: PayloadAction<ITimeline>) => {
      state.timelineItemSelected = { ...action.payload };
    },
  },
});

export const {
  setTimelineItems,
  setSelected,
  setTimelineItem,
  setModal,
  setAlert,
  closeAlert,
} = timelineSlice.actions;

export default timelineSlice.reducer;
