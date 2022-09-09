const getEmail = state => state.user.email;
const getBalance = state => state.user.balance;
const getIsUserFetching = state => state.user.isUserFetching;

export { getEmail, getBalance, getIsUserFetching };
