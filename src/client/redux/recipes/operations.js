import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchRecipes = createAsyncThunk(
  'recipes/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addRecipe = createAsyncThunk(
  'recipes/addRecipe',
  async (recipe, thunkAPI) => {
    try {
      const response = await axios.post('/recipes', recipe);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteRecipe = createAsyncThunk(
  'recipes/deleteRecipe',
  async (recipeId, thunkAPI) => {
    try {
      const response = await axios.post(`/recipes/${recipeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchRecipes, addRecipe, deleteRecipe };
