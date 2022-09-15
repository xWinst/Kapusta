const getState = state => state;

const getUserEmail = state => state.auth.userData.email;

const getBalance = state => state.auth.userData.balance;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const authSelectors = {
    getState,
    getIsLoggedIn,
    getUserEmail,
    getIsRefreshingUser,
    getBalance,
};

export default authSelectors;
