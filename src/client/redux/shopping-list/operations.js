import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../pages/shoppingList/const/axiosBaseUrl.js';


export const getShoppingList = createAsyncThunk(
  'products/getShoppingList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/ingredients/shopping-list');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToShoppingList = createAsyncThunk(
  'shopping-list/addToShoppingList',
  async (product, thunkAPI) => {
    try {
      const response = await axios.post(
        '/ingredients/shopping-list/add-ingredient',
        product
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromShoppingList = createAsyncThunk(
  'shopping-list/removeFromShoppingList',
  async (product, thunkAPI) => {
    try {
      const response = await axios.post(
        'ingredients/shopping-list/remove-ingredient',
        product
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
