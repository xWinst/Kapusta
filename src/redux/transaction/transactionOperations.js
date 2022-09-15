import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import userOperations from '../user/userOperations';

export const addIncome = createAsyncThunk(
    'transaction/income/add',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                '/transaction/income',
                credentials
            );
            toast.success('Successful add transaction!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });

            return data;
        } catch (error) {
            toast.error('error', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
            return rejectWithValue(error);
        }
    }
);

export const getIncome = createAsyncThunk(
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
            toast.success('Successful add transaction!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getExpense = createAsyncThunk(
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

export const deleteTransaction = createAsyncThunk(
    'transaction',
    async (transactionId, { rejectWithValue, dispatch }) => {
        try {
            const { data } = await axios.delete(
                `/transaction/${transactionId}`
            );
            dispatch(getExpense());
            dispatch(getIncome());
            dispatch(userOperations.getUser());
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getIncomeCategories = createAsyncThunk(
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

export const getExpenseCategories = createAsyncThunk(
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

export const getTransactionsByPeriod = createAsyncThunk(
    'transaction/period-data',
    async (date, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `/transaction/period-data?date=2022-${date}`
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
