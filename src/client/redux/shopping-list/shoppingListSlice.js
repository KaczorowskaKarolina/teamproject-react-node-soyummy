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

const handleAsyncAction = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.shoppingList = action.payload.data.shoppingList;
};

const initialState = {
  shoppingList: [],
  isLoading: false,
  error: null,
};

export const shoppingListSlice = createSlice({
  name: 'products',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getShoppingList.pending, handlePending)
      .addCase(getShoppingList.fulfilled, handleAsyncAction)
      .addCase(getShoppingList.rejected, handleRejected)

      .addCase(addToShoppingList.pending, handlePending)
      .addCase(addToShoppingList.fulfilled, handleAsyncAction)
      .addCase(addToShoppingList.rejected, handleRejected)

      .addCase(removeFromShoppingList.pending, handlePending)
      .addCase(removeFromShoppingList.fulfilled, handleAsyncAction)
      .addCase(removeFromShoppingList.rejected, handleRejected);
  },
});

export const { actions, reducer } = shoppingListSlice;
