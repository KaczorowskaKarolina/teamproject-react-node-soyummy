import { createSlice } from '@reduxjs/toolkit';
import { searchRecipesByName } from './actions';

const initialState = {
  recipes: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(searchRecipesByName.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchRecipesByName.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(searchRecipesByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
