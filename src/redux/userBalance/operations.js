import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/kapusta-api';

const fetchUser = createAsyncThunk('user', async () => {
  try {
    const { data } = await api.getUser();
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

const updateBalance = createAsyncThunk(
  'user/update-balance',
  async newBalance => {
    try {
      const { data } = await api.updateBalance({ newBalance });
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

export { fetchUser, updateBalance };
