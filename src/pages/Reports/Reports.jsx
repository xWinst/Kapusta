import { ButtonBack, ReportsPeriod, ReportsTotal, ReportsCategories } from 'components';
import MobileChart from 'components/Charts/MobileChart';
import TabletChart from 'components/Charts/TabletChart';
import DesktopChart from 'components/Charts/DesktopChart';
import useWindowDimensions from 'hooks/useWindowDimensions';
import s from './Reports.module.css';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import operation from '../../redux/transaction/transactionOperations';
import { useState } from 'react';
import ReportsIncome from 'components/ReportsIncome/ReportsIncome';
import { BalanceForm } from 'components';
const Reports = () => {
    const isRefreshingUser = useSelector(state => state.auth.isRefreshingUser);
    const [date, setDate] = useState(9);
    const [isIncome, setisIncome] = useState(true);
    const [isExpense, setIsExpense] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedIncomes, setSelectedIncomes] = useState([]);
    const dispatch = useDispatch();
    const IncomesOfSelectedCategory = useSelector(
        state => state.finance.transactionsByPeriod?.incomes?.incomesData?.[selectedIncomes] ?? {}
    );
    const productsOfSelectedCategory = useSelector(
        state =>
            state.finance.transactionsByPeriod?.expenses?.expensesData?.[selectedCategory] ?? {}
    );

    const TotalExpense = useSelector(
        state => state.finance.transactionsByPeriod.expenses.expenseTotal
    );

    // Проверка и присоеденение 0 если дата меньше 10
    let period = date;
    if (date < 10) {
        period = `0${date}`;
    } else {
        period = date;
    }
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    useEffect(() => {
        if (!isRefreshingUser) {
            if (!isLoggedIn) {
                <Navigate to="/" />;
            } else dispatch(operation.getTransactionsByPeriod(period));
        }
    }, [dispatch, TotalExpense, period, isRefreshingUser, isLoggedIn]);

    const { width } = useWindowDimensions();
    // Селектор общей суммы затрат за месяц передается пропсом в  ReportsTotal

    // Селектор общего дохода за месяц
    const TotalIncome = useSelector(
        state => state.finance.transactionsByPeriod.incomes.incomeTotal
    );

    const handleIncrementDate = () => {
        if (date >= 12) {
            return setDate(1);
        }
        setDate(date + 1);
    };

    const handleDecrementDate = () => {
        if (date <= 1) {
            return setDate(12);
        }
        setDate(date - 1);
    };

    const handleChangeRender = () => {
        if (isIncome) {
            setisIncome(false);
        } else {
            setisIncome(true);
        }
        if (isExpense) {
            setIsExpense(false);
        } else {
            setIsExpense(true);
        }
    };

    const chooseProductChart = categoryType => {
        setSelectedCategory(categoryType);
    };

    const chooseIncomeChart = categoryType => {
        setSelectedIncomes(categoryType);
    };

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <div className={s.container}>
            <div className={s.reports__nav}>
                <ButtonBack />
                <BalanceForm />
                <ReportsPeriod
                    date={date}
                    handleIncrementDate={handleIncrementDate}
                    handleDecrementDate={handleDecrementDate}
                />
            </div>
            <ReportsTotal TotalExpense={TotalExpense} TotalIncome={TotalIncome} />
            {isExpense && (
                <ReportsCategories
                    handleChangeRender={handleChangeRender}
                    chooseProductChart={chooseProductChart}
                />
            )}
            {isIncome && (
                <ReportsIncome
                    handleChangeRender={handleChangeRender}
                    chooseProductChart={chooseIncomeChart}
                />
            )}
            <div>
                {isExpense && Boolean(width < 768) && (
                    <MobileChart objectForChart={productsOfSelectedCategory} />
                )}
                {isExpense && Boolean(width >= 768 && width <= 1279) && (
                    <TabletChart objectForChart={productsOfSelectedCategory} />
                )}
                {isExpense && Boolean(width >= 1280) && (
                    <DesktopChart objectForChart={productsOfSelectedCategory} />
                )}

                {isIncome && Boolean(width < 768) && (
                    <MobileChart objectForChart={IncomesOfSelectedCategory} />
                )}
                {isIncome && Boolean(width >= 768 && width <= 1279) && (
                    <TabletChart objectForChart={IncomesOfSelectedCategory} />
                )}
                {isIncome && Boolean(width >= 1280) && (
                    <DesktopChart objectForChart={IncomesOfSelectedCategory} />
                )}
            </div>
        </div>
    );
};

export default Reports;
