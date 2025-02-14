import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
};

export const formSlice = createSlice({
  name: "formState",
  initialState,
  reducers: {
    toggleForm: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const { toggleForm } = formSlice.actions;

export default formSlice.reducer;
