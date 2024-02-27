import { createSlice } from '@reduxjs/toolkit';
import { addRecipe, fetchRecipes, deleteRecipe } from './operations.js';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const isPendingAction = action => {
//   return action.type.endsWith('/pending');
// };

// const isRejectAction = action => {
//   return action.type.endsWith('/rejected');
// };

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRecipes.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(...action.payload);
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // .addCase(addRecipe.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    // })
    // .addCase(deleteRecipe.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     contact => contact.id === action.payload
    //   );
    //   state.items.splice(index, 1);
    // })
    // .addMatcher(isPendingAction, handlePending)
    // .addMatcher(isRejectAction, handleRejected);
  },
});

export const recipesReducer = recipesSlice.reducer;
