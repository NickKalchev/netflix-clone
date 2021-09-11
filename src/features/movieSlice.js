import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    isMovie: (state, action) => {
      state.movie = action.payload;
      state.netflix = action.payload;
    },
    noMovie: (state) => {
      state.movie = null;
    },
  },
});

export const { isMovie, noMovie } = movieSlice.actions;

export const selectMovie = (state) => state.movie.movie;

export default movieSlice.reducer;
