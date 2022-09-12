import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const addIncome = createAsyncThunk(
    'transaction/income/add',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                '/transaction/income',
                credentials
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const getIncome = createAsyncThunk(
    'transaction/income',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/transaction/income');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addExpense = createAsyncThunk(
    'transaction/expense/add',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                '/transaction/expense',
                credentials
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const getExpense = createAsyncThunk(
    'transaction/expense',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/transaction/expense');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const deleteTransaction = createAsyncThunk(
    'transaction',
    async (transactionId, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(
                `/transaction/${transactionId}`
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const getIncomeCategories = createAsyncThunk(
    'transaction/income-categories',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/transaction/income-categories');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const getExpenseCategories = createAsyncThunk(
    'transaction/expense-categories',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/transaction/expense-categories');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const getTransactionsByPeriod = createAsyncThunk(
    'transaction/period-data',
    async (date, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `/transaction/period-data?date=${date}`
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const transactionOperations = {
    addIncome,
    getIncome,
    addExpense,
    getExpense,
    deleteTransaction,
    getIncomeCategories,
    getExpenseCategories,
    getTransactionsByPeriod,
};

export default transactionOperations;
