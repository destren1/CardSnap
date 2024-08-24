import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCardsApi } from "../utils/card-api";

export const getCards = createAsyncThunk("cards/getAll", async () =>
  getCardsApi()
);

export interface UnsplashPhoto {
  id: string;
  alt_description: string;
  likes: string;
  urls: {
    full: string;
    regular: string;
    small: string;
  };
}

interface TCards {
  cards: UnsplashPhoto[];
  card: UnsplashPhoto;
  request: boolean;
  pending: boolean;
}

export const initialState: TCards = {
  cards: [],
  card: {
    id: "",
    alt_description: "",
    likes: "",
    urls: { full: "", regular: "", small: "" },
  },
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
    getCardById: (state, action) => {
      const _id = action.payload;
      state.card =
        state.cards.find((card) => card.id === _id) || initialState.card;
    },
  },
  selectors: {
    getAllCards: (state) => state.cards,
    getCard: (state) => state.card,
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

export const { getAllCards, getCard } = cardsSlice.selectors;
export const { deleteCardById, getCardById } = cardsSlice.actions;
