import { createSelector } from '@reduxjs/toolkit';

const getIncomes = state => state.transaction.incomes;
const getExpenses = state => state.transaction.expenses;
const getMonthStatsIncomes = state => state.transaction.monthStatsIncomes;
const getMonthStatsExpenses = state => state.transaction.monthStatsExpenses;
const getIncomeCategories = state => state.transaction.categoriesIncome;
const getExpenseCategories = state => state.transaction.categoriesExpense;
const getDate = state => state.transaction.date;

const getIsIncomeAdding = state => state.transaction.isIncomeAdding;
const getIsIncomeLoading = state => state.transaction.isIncomeLoading;
const getIsExpenseAdding = state => state.transaction.isExpenseAdding;
const getIsExpenseLoading = state => state.transaction.isExpenseLoading;
const getAreCategoriesLoading = state => state.transaction.areCategoriesLoading;
const getIsRemoving = state => state.transaction.isRemoving;
const getIncomesDataByCategoriesFromState = state =>
  state.transaction.dataByCategories.incomes;
const getExpenseDataByCategoriesFromState = state =>
  state.transaction.dataByCategories.expenses;
const getIsDataGettingByCategories = state =>
  state.transaction.isDataGettingByCategories;

const filter = (items, date) =>
  items.filter(({ date: value }) => date === value);

const getFilterExpTrans = createSelector(getExpenses, getDate, filter);

const getFilterIncTrans = createSelector(getIncomes, getDate, filter);

export {
  getIncomes,
  getExpenses,
  getMonthStatsIncomes,
  getMonthStatsExpenses,
  getIncomeCategories,
  getExpenseCategories,
  getIsIncomeAdding,
  getIsIncomeLoading,
  getIsExpenseAdding,
  getIsExpenseLoading,
  getAreCategoriesLoading,
  getIsRemoving,
  getIncomesDataByCategoriesFromState,
  getExpenseDataByCategoriesFromState,
  getFilterExpTrans,
  getFilterIncTrans,
  getIsDataGettingByCategories,
};
