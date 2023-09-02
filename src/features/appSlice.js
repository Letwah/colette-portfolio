import { createSlice } from "@reduxjs/toolkit";
import { HOME } from "../store/types";

const initialState = {
  page: HOME,
  burgerOpen: false,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setBurgerOpen: (state) => {
      state.burgerOpen = !state.burgerOpen;
    },
  },
});

export const { setPage, setBurgerOpen } = appSlice.actions;
export const selectPage = (state) => state.app.page;
export const selectBurgerOpen = (state) => state.app.burgerOpen;
export default appSlice.reducer;
