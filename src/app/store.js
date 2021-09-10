import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import planReducer from "../features/planSlice";
import emailReducer from "../features/emailSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    plan: planReducer,
    email: emailReducer,
  },
});
