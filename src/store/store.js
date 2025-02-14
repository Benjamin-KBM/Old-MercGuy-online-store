import { configureStore } from "@reduxjs/toolkit";
import addUserReducer from "./features/userSlice";
import isLoggedInReducer from "./features/userSlice";
import toggleSignInReducer from "./features/formStateSlice";
import cartSliceReducer from "./features/cartSlice";
import billingSliceReducer from "./features/billingSlice";

export const store = configureStore({
  reducer: {
    addUser: addUserReducer,
    toggleSignIn: toggleSignInReducer,
    cartSlice: cartSliceReducer,
    billingSlice: billingSliceReducer,
    isLoggedIn: isLoggedInReducer,
    // Add other reducers here if needed
  },
});

export default store;
