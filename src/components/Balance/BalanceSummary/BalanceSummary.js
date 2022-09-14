import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import months from '../../../months.json';

import s from '../BalanceSummary/BalanceSummary.module.css';

export default function BalanceSummary() {
    const { pathname } = useLocation();

    const userExpensesStats = useSelector(
        state => state.finance.userExpenses.monthsStats
    );
    const userIncomeStats = useSelector(
        state => state.finance.userIncomes.monthsStats
    );

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
            .map(i => {
                return { month: getMonths(i), total: userExpensesStats[i] };
            })
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
            .map(i => {
                return { month: getMonths(i), total: userIncomeStats[i] };
            })
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
