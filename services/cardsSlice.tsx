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
  isLiked: boolean;
}

interface TCards {
  cards: UnsplashPhoto[];
  card: UnsplashPhoto;
  showOnlyLiked: boolean;
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
    isLiked: false,
  },
  showOnlyLiked: false,
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
    likeCard: (state, action) => {
      // Из-за ограниченного количества запросов к API и особенностей проекта, связанного со случайным обновлением карточек,
      // было принято решение управлять лайками локально для повышения эффективности и снижения нагрузки на сервер.
      const { id, liked } = action.payload;

      const card = state.cards.find((card) => card.id === id);

      if (card) {
        let likeCount = parseInt(card.likes, 10);

        if (liked) {
          likeCount--;
          card.isLiked = false;
        } else {
          likeCount++;
          card.isLiked = true;
        }

        card.likes = likeCount.toString();
      }
    },
    setOnlyShowLiked: (state) => {
      state.showOnlyLiked = !state.showOnlyLiked;
    },
  },
  selectors: {
    getAllCards: (state) => state.cards,
    getCard: (state) => state.card,
    getShowOnlyLikedState: (state) => state.showOnlyLiked,
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

export const { getAllCards, getCard, getShowOnlyLikedState } =
  cardsSlice.selectors;
export const { deleteCardById, getCardById, likeCard, setOnlyShowLiked } =
  cardsSlice.actions;
