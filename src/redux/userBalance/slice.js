import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, updateBalance } from './operations';

const initialState = {
  balance: 0,
  email: 'user',
  isUserFetching: false,
  isBalanceUpdating: true,
};

const resetState = state => {
  Object.keys(initialState).forEach(key => (state[key] = initialState[key]));
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserState: resetState,
  },
  extraReducers: {
    [fetchUser.pending]: state => {
      state.isUserFetching = true;
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.isUserFetching = false;
      state.balance = payload.balance;
      state.email = payload.email;
    },
    [fetchUser.rejected]: state => {
      state.isUserFetching = false;
    },

    [updateBalance.pending]: state => {
      state.isBalanceUpdating = true;
    },
    [updateBalance.fulfilled]: (state, { payload }) => {
      state.isBalanceUpdating = false;
      state.balance = payload.newBalance;
    },
    [updateBalance.rejected]: state => {
      state.isBalanceUpdating = false;
    },
  },
});

export const { reducer: userReducer } = slice;
export const { resetUserState, changeDate } = slice.actions;
