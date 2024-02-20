import { createSlice } from '@reduxjs/toolkit';
import {
  getShoppingList,
  addToShoppingList,
  removeFromShoppingList,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  shoppingList: [],
  isLoading: false,
  error: null,
};
const shoppingListSlice = createSlice({
  name: 'products',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getShoppingList.pending, handlePending)
      .addCase(getShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.shoppingList = action.payload.data.shoppingList;
      })
      .addCase(getShoppingList.rejected, handleRejected)

      .addCase(addToShoppingList.pending, handlePending)
      .addCase(addToShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.shoppingList = action.payload.data.shoppingList;
      })
      .addCase(addToShoppingList.rejected, handleRejected)

      .addCase(removeFromShoppingList.pending, handlePending)
      .addCase(removeFromShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.shoppingList = action.payload.data.shoppingList;
      })
      .addCase(removeFromShoppingList.rejected, handleRejected);
  },
});

export default shoppingListSlice.reducer;
