import { createSlice } from "@reduxjs/toolkit";
import { HOME } from "../store/types";

const initialState = {
  page: HOME,
  burgerOpen: false,
  toastContent: "",
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
    setToastContent: (state, action) => {
      state.toastContent = action.payload;
    },
  },
});

export const { setPage, setBurgerOpen, setToastContent } = appSlice.actions;
export const selectPage = (state) => state.app.page;
export const selectBurgerOpen = (state) => state.app.burgerOpen;
export const selectToastContent = (state) => state.app.toastContent;
export default appSlice.reducer;
