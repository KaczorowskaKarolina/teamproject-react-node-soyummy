import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipe/category-list');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchCategories };
