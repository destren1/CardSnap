import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCardsApi } from "../utils/card-api";

export const getCards = createAsyncThunk("cards/getAll", async () =>
  getCardsApi()
);

export interface UnsplashPhoto {
  id: string;
  width: number;
  height: number;
  alt_description: string;
  likes: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

interface TCards {
  cards: UnsplashPhoto[];
  request: boolean;
  pending: boolean;
}

export const initialState: TCards = {
  cards: [],
  request: true,
  pending: true,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    deleteCardById: (state, action) => {
      const _id = action.payload;
      state.cards = state.cards.filter((card) => card.id !== _id);
    },
  },
  selectors: {
    getAllCards: (state) => state.cards,
  },
  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      state.cards = action.payload;
      state.pending = false;
    });
    builder.addCase(getCards.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getCards.rejected, (state) => {
      state.request = false;
      state.pending = false;
    });
  },
});

export const { getAllCards } = cardsSlice.selectors;
export const { deleteCardById } = cardsSlice.actions;
