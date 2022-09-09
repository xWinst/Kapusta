import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global/';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

/* auth */
const googleAuth = async credentials => await axios.get('auth/google');
const register = async credentials =>
  await axios.post('auth/register', credentials);

const login = async credentials => await axios.post('auth/login', credentials);
const refresh = async credentials =>
  await axios.post('auth/refresh', credentials);

const logout = async () => await axios.post('auth/logout');

/* transaction */
const addIncome = async credentials =>
  await axios.post('transaction/income', credentials);
const getIncome = async () => await axios.get('transaction/income');
const addExpense = async credentials =>
  await axios.post('transaction/expense', credentials);
const getExpense = async () => await axios.get('transaction/expense');
const removeTransaction = async id => await axios.delete(`transaction/${id}`);
const getIncomeCategories = async credentials =>
  await axios.get('transaction/income-categories');
const getExpenseCategories = async credentials =>
  await axios.get('transaction/expense-categories');
const getPeriodTransactions = async date =>
  await axios.get(`transaction/period-data?date=${date}`);

/* user */
const updateBalance = async credentials =>
  await axios.patch('user/balance', credentials);
const getUser = async () => await axios.get('user');

export {
  setToken,
  /* auth */
  register,
  login,
  logout,
  refresh,
  googleAuth,
  /* transaction */
  addIncome,
  getIncome,
  addExpense,
  getExpense,
  removeTransaction,
  getIncomeCategories,
  getExpenseCategories,
  getPeriodTransactions,
  /* user */
  updateBalance,
  getUser,
};
