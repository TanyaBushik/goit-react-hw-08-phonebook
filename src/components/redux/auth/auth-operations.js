import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getAllContacts = createAsyncThunk('/contacts', async credentials => {
  try {
    const { data } = await axios.get('/contacts', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const createNewContact = createAsyncThunk('/contacts', async credentials => {
  try {
    const { data } = await axios.post('/contacts', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const operations = {
  getAllContacts,
  createNewContact,

  fetchCurrentUser,
};

export default operations;
