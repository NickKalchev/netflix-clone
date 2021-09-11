import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    signinEmail: (state, action) => {
      state.email = action.payload;
    },
    noEmail: (state) => {
      state.email = null;
    },
  },
});

export const { signinEmail, noEmail } = emailSlice.actions;

export const selectEmail = (state) => state.email.email;

export default emailSlice.reducer;
