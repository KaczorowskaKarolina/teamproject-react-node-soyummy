import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const SERVER_PORT = process.env.SERVER_PORT;
const MAIN_ENDPOINT = process.env.MAIN_ENDPOINT;

axios.defaults.baseURL =
  REACT_APP_API_URL || `http://localhost:${SERVER_PORT}${MAIN_ENDPOINT}`;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const register = createAsyncThunk(
  'auth/register',
  async (credentails, thunkAPI) => {
    try {
      const response = await axios.post('/signup', credentails);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk('auth/login', async (credentails, thunkAPI) => {
  try {
    const response = await axios.post('/login', credentails);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue(null);
  }

  try {
    setAuthHeader(persistedToken);
    const response = await axios.post('/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { register, login, logout, refresh };