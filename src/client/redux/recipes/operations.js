import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || 'http://localhost:5000';

const fetchRecipes = createAsyncThunk(
  'recipes/fetchAll',
  async (data = {}, thunkAPI) => {
    try {
      const { page, limit } = data;
      if (data) {
        const response = await axios.get(
          `/recipes/?page=${page}&limit=${limit}`
        );
        return response.data.data.file;
      }
      const response = await axios.get('/recipes');
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchRecipesByQuery = createAsyncThunk(
  'recipes/fetchByCategory',
  async (data, thunkAPI) => {
    try {
      const { query, page, limit } = data;
      const response = await axios.get(
        `/recipes/?query=${query}page=${page}&limit=${limit}`
      );
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const fetchRecipesByCategory = createAsyncThunk(
  'recipes/fetchByCategory',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${category}`);
      return response.data.data.file;
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
      return response.data.data.file;
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
      return response.data.data.file;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export {
  fetchRecipes,
  addRecipe,
  deleteRecipe,
  fetchRecipesByCategory,
  fetchRecipesByQuery,
};
