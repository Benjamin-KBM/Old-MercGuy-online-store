import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    login: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { registerUser, login } = registerSlice.actions;

export default registerSlice.reducer;
