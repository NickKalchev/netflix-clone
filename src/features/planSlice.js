import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: null,
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    hasPlan: (state, action) => {
      state.plan = action.payload;
    },
    noPlan: (state) => {
      state.plan = null;
    },
  },
});

export const { hasPlan, noPlan } = planSlice.actions;

export const selectPlan = (state) => state.plan.plan;

export default planSlice.reducer;
