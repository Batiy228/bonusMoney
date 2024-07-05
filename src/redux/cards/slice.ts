import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { card } from "../../@types/Card/card";
import { fetchCards } from "./asyncActions";
import { Status } from "../../@types/Status";
import { IStateCards } from "../../@types/redux/stateCrads";

const initialState: IStateCards = {
  cards: [],
  offset: 0,
  status: Status.LOADING,
  errorMessage: null,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    increaseOffset: (state, action) => {
      state.offset += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchCards.fulfilled, (state, action: PayloadAction<card[]>) => {
        state.cards = [...state.cards, ...action.payload];
        state.status = Status.SUCCESS;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.cards = [];
        state.status = Status.ERROR;
        console.log(action.payload);
        state.errorMessage = action.payload ?? "Неизвестная ошибка";
      });
  },
});

export const { increaseOffset } = cardsSlice.actions;

export default cardsSlice.reducer;
