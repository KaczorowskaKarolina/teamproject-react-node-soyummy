import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchRecipes = createAsyncThunk(
  'recipes/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3000/api/recipes');
      return response.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addRecipe = createAsyncThunk('recipes/addRecipe', async (_, thunkAPI) => {
  try {
    console.log('Testing');
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const deleteRecipe = createAsyncThunk(
  'recipes/deleteRecipe',
  async (_, thunkAPI) => {
    try {
      console.log('Testing');
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchRecipes, addRecipe, deleteRecipe };
