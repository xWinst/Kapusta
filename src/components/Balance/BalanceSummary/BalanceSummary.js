import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getExpense, getIncome } from 'redux/transaction/transactionOperations';

import months from '../../../months.json';

import s from '../BalanceSummary/BalanceSummary.module.css';

export default function BalanceSummary() {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const isLoggedIn = useSelector(state => state.finance.isLoggedIn);
    const userExpensesStats = useSelector(
        state => state.finance.userExpenses.monthsStats
    );
    const userIncomeStats = useSelector(
        state => state.finance.userIncomes.monthsStats
    );
    const userTransactions = useSelector(
        state => state.finance.userData.transactions
    );

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getExpense());
            dispatch(getIncome());
        }
    }, [dispatch, isLoggedIn, userTransactions]);

    const getMonths = i => {
        return months[i];
    };

    const getExpensesMonths = () => {
        if (!userExpensesStats) return;
        const monthsResponse = Object.keys(userExpensesStats).filter(i => {
            return typeof userExpensesStats[i] === 'number';
        });
        if (monthsResponse.length === 0) return;

        const expensesMonths = monthsResponse
            .map((element, index) => {
                return {
                    id: index,
                    month: getMonths(element),
                    total: userExpensesStats[element],
                };
            })
            .sort((a, b) => b.id - a.id)
            .map(i => {
                return (
                    <li key={`${i.month}Expenses`} className={s.item}>
                        <p className={s.text}>{i.month}</p>
                        <p>{i.total}</p>
                    </li>
                );
            });

        return expensesMonths;
    };

    const getIncomeMonths = () => {
        if (!userIncomeStats) return;
        const monthsResponse = Object.keys(userIncomeStats).filter(i => {
            return typeof userIncomeStats[i] === 'number';
        });
        if (monthsResponse.length === 0) return;

        const incomeMonths = monthsResponse
            .map((element, index) => {
                return {
                    id: index,
                    month: getMonths(element),
                    total: userIncomeStats[element],
                };
            })
            .sort((a, b) => b.id - a.id)
            .map(i => {
                return (
                    <li key={`${i.month}Income`} className={s.item}>
                        <p className={s.text}>{i.month}</p>
                        <p>{i.total}</p>
                    </li>
                );
            });

        return incomeMonths;
    };

    const userExpensesSummary = getExpensesMonths();
    const userIncomeSummary = getIncomeMonths();
    const noStatsMarkup = () => {
        return (
            <li className={s.item}>
                <p className={s.text}>No stats</p>
            </li>
        );
    };

    return (
        <ul className={s.list}>
            <li className={s.titleItem}>
                <h2 className={s.title}>Summary</h2>
            </li>
            {Boolean(pathname === '/expenses' && userExpensesSummary) &&
                userExpensesSummary}
            {Boolean(pathname === '/expenses' && !userExpensesSummary) &&
                noStatsMarkup()}
            {Boolean(pathname === '/income' && userIncomeSummary) &&
                userIncomeSummary}
            {Boolean(pathname === '/income' && !userIncomeSummary) &&
                noStatsMarkup()}
        </ul>
    );
}
