import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth/authOperations';
import userOperations from './user/userOperations';
import transactionOperations from './transaction/transactionOperations';

const initialState = {
    accessToken: null,
    refreshToken: null,
    sid: null,
    loginError: null,
    registerError: null,
    userData: {
        email: null,
        balance: null,
        id: null,
        transactions: null,
    },
    userIncomes: { incomes: null, monthsStats: null },
    userExpenses: { expenses: null, monthsStats: null },
    incomeCategories: null,
    expenseCategories: null,
    transactionsByPeriod: {
        expenses: { expenseTotal: null, expensesData: null },
        incomes: { incomeTotal: null, incomesData: null },
    },
    isLoggedIn: false,
    isRefreshingUser: false,
    isRegistered: false,
};

const financeSlice = createSlice({
    name: 'finance',
    initialState,
    extraReducers: {
        // [authOperations.register.pending](state, action) {
        //     state.registerError = null;
        //     state.loginError = null;
        // },
        [authOperations.register.fulfilled](state, action) {
            state.userData.email = action.payload.email;
            state.userData.id = action.payload.id;
            state.isRegistered = true;
        },
        // [authOperations.register.rejected](state, action) {
        //     state.registerError = action.payload;
        // },

        // [authOperations.logIn.pending](state, action) {
        //     state.registerError = null;
        //     state.loginError = null;
        // },

        [authOperations.logIn.fulfilled](state, action) {
            state.userData = action.payload.userData;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.sid = action.payload.sid;
            state.isLoggedIn = true;
        },
        // [authOperations.logIn.rejected](state, action) {
        //     state.loginError = action.payload;
        // },
        [authOperations.googleLogIn.fulfilled](state, action) {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.sid = action.payload.sid;
            state.isLoggedIn = true;
        },
        [authOperations.logOut.fulfilled](state) {
            state.accessToken = null;
            state.refreshToken = null;
            state.sid = null;
            state.userData = {
                email: null,
                balance: null,
                id: null,
                transactions: null,
            };
            state.userIncomes.incomes = null;
            state.userIncomes.monthsStats = null;
            state.userExpenses.expenses = null;
            state.userExpenses.monthsStats = null;
            state.incomeCategories = null;
            state.expenseCategories = null;
            state.transactionsByPeriod.expenses.expenseTotal = null;
            state.transactionsByPeriod.expenses.expensesData = null;
            state.transactionsByPeriod.incomes.incomeTotal = null;
            state.transactionsByPeriod.incomes.incomesData = null;
            state.isLoggedIn = false;
            state.isRegistered = false;
        },
        [authOperations.refreshUser.pending](state) {
            state.isRefreshingUser = true;
        },
        [authOperations.refreshUser.fulfilled](state, action) {
            state.accessToken = action.payload.newAccessToken;
            state.refreshToken = action.payload.newRefreshToken;
            state.sid = action.payload.newSid;
            state.isLoggedIn = true;
            state.isRefreshingUser = false;
        },
        [authOperations.refreshUser.rejected](state) {
            state.isRefreshingUser = false;
        },
        [userOperations.getUser.fulfilled](state, action) {
            state.userData.email = action.payload.email;
            state.userData.balance = action.payload.balance;
            state.userData.transactions = action.payload.transactions;
        },
        [userOperations.changeBalance.fulfilled](state, action) {
            state.userData.balance = action.payload.newBalance;
        },
        [transactionOperations.addIncome.fulfilled](state, action) {
            state.userData.transactions = [
                ...state.userData.transactions,
                action.payload.transaction,
            ];
            state.userIncomes.incomes = [
                ...state.userIncomes.incomes,
                action.payload.transaction,
            ];
            state.userData.balance = action.payload.newBalance;
        },
        [transactionOperations.getIncome.fulfilled](state, action) {
            state.userIncomes.incomes = action.payload.incomes;
            state.userIncomes.monthsStats = action.payload.monthsStats;
        },
        [transactionOperations.addExpense.fulfilled](state, action) {
            state.userData.transactions = [
                ...state.userData.transactions,
                action.payload.transaction,
            ];
            state.userExpenses.expenses = [
                ...state.userExpenses.expenses,
                action.payload.transaction,
            ];
            state.userData.balance = action.payload.newBalance;
        },
        [transactionOperations.getExpense.fulfilled](state, action) {
            state.userExpenses.expenses = action.payload.expenses;
            state.userExpenses.monthsStats = action.payload.monthsStats;
        },
        [transactionOperations.deleteTransaction.fulfilled](state, action) {
            state.userData.balance = action.payload.newBalance;
        },
        [transactionOperations.getIncomeCategories.fulfilled](state, action) {
            state.incomeCategories = action.payload;
        },
        [transactionOperations.getExpenseCategories.fulfilled](state, action) {
            state.expenseCategories = action.payload;
        },
        [transactionOperations.getTransactionsByPeriod.fulfilled](
            state,
            action
        ) {
            state.transactionsByPeriod.expenses.expenseTotal =
                action.payload.expenses.expenseTotal;
            state.transactionsByPeriod.expenses.expensesData =
                action.payload.expenses.expensesData;
            state.transactionsByPeriod.incomes.incomeTotal =
                action.payload.incomes.incomeTotal;
            state.transactionsByPeriod.incomes.incomesData =
                action.payload.incomes.incomesData;
        },
    },
});

export default financeSlice.reducer;
