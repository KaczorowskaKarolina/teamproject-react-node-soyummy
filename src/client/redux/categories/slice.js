import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './operations.js';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.items = action.push;
      })
      .addCase(fetchCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
