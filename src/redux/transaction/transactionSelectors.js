const getTransactions = state => state.auth.userData.transactions;

const transactionSelectors = {
    getTransactions,
};
export default transactionSelectors;
