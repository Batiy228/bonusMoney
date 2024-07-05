import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { card } from "../../@types/Card/card";
import { AppDispatch, RootState } from "../store";

export const fetchCards = createAsyncThunk<
  card[],
  string,
  {
    state: RootState;
    dispatch: AppDispatch;
    rejectValue: string;
  }
>("bonusMoney/fetchCards", async (url, { getState, rejectWithValue }) => {
  const offset = getState().cards.offset;

  try {
    const { data } = await axios.post(
      url,
      { offset, limit: 5 },
      {
        headers: {
          "Content-Type": "application/json",
          TOKEN: "123",
        },
      }
    );
    const newCompanies = data?.companies;

    return newCompanies;
  } catch (error: any) {
    if (error.response.status === 400) {
      return rejectWithValue(error.response.data.message);
    }
    if (error.response.status === 401) {
      return rejectWithValue("Ошибка авторизации");
    }
    return rejectWithValue("Все упало");
  }
});
