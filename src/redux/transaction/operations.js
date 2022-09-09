import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../components/BalanceForm/balanceApi';
// import * as api from 'services/kapusta-api'; потом поменять если что на такое

const addIncome = createAsyncThunk(
  'transaction/add-income',
  async (transaction, { rejectWithValue }) => {
    try {
      await api.addIncome(transaction);
      const { data } = await api.getIncome();
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

const fetchIncome = createAsyncThunk(
  'transaction/get-income',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getIncome();
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

const addExpense = createAsyncThunk(
  'transaction/add-expense',
  async (transaction, { rejectWithValue }) => {
    try {
      await api.addExpense(transaction);
      const { data } = await api.getExpense();
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

const fetchExpense = createAsyncThunk(
  'transaction/get-expense',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getExpense();
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

const fetchCategories = createAsyncThunk(
  'transaction/get-categories',
  async (_, { rejectWithValue }) => {
    try {
      const income = await api.getIncomeCategories();
      const expense = await api.getExpenseCategories();
      return { categoriesIncome: income.data, categoriesExpense: expense.data };
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

const removeTransaction = createAsyncThunk(
  'transaction/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeTransaction(id);
      const income = await api.getIncome();
      const expense = await api.getExpense();
      return {
        transactionId: id,
        dataIncome: income.data.monthsStats,
        dataExpense: expense.data.monthsStats,
      };
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

const fetchDataByCategories = createAsyncThunk(
  'transaction/get-data-by-categories',
  async date => {
    try {
      const { data } = await api.getPeriodTransactions(date);
      return data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

export {
  addIncome,
  fetchIncome,
  addExpense,
  fetchExpense,
  fetchCategories,
  removeTransaction,
  fetchDataByCategories,
};
