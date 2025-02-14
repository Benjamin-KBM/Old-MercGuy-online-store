import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billing: {},
};

export const billingFormSlice = createSlice({
  name: "billingState",
  initialState,
  reducers: {
    billingForm: (state, action) => {
      state.billing = action.payload;
    },
  },
});

export const { billingForm } = billingFormSlice.actions;

export default billingFormSlice.reducer;
