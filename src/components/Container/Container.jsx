import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { authOperations } from 'redux/auth';
import { userOperations } from 'redux/user';
import { transactionOperations } from 'redux/transaction';
// import { useAuth } from 'hooks';
import s from './Container.module.css';

export default function Container({ children }) {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const sid = useSelector(state => state.auth.sid);
    // const { isRefreshing } = useAuth();

    useEffect(() => {
        if (!isLoggedIn && sid) dispatch(authOperations.refreshUser());
        if (isLoggedIn) {
            dispatch(userOperations.getUser());
            dispatch(transactionOperations.getIncomeCategories());
            dispatch(transactionOperations.getExpenseCategories());
        }
    }, [dispatch, isLoggedIn, sid]);
    // Чтобы начать что-то проверять можно раскомментировать logIn ничего в нём не меняя, перезагрузить
    // страницу, потом закомментировать и уже раскомментировать refreshUser и ту операцию которая интересует.
    //----------------------------------------------------------------
    // При register передавать строки email и password, который не короче 8 символов.
    // Если нужно проверить register добавить цифру в email, потому что этот уже есть)))
    // dispatch(authOperations.register({ email: 'email123456789012345@emai.ua', password: '12345678' }));
    //----------------------------------------------------------------
    // При logIn передавать строки email и password, который не короче 8 символов.
    // dispatch(
    //     authOperations.logIn({
    //         email: 'email1234567890@emai.ua',
    //         password: '12345678',
    //     })
    // );
    //----------------------------------------------------------------
    // При logOut происодит сброс всего стейта, только в local storage остаются refreshToken и sid.
    // dispatch(authOperations.logOut());
    //----------------------------------------------------------------
    // При refreshUser никаких параметров не передавать, используютя refreshToken и sid из local storage.

    // dispatch(authOperations.refreshUser());

    // setTimeout(() => {
    // В getUser никаких параметров не передавать, перед этим происходит register или refreshUser.
    // dispatch(userOperations.getUser());
    //----------------------------------------------------------------
    // Обратить внимание на то, что в changeBalance передавать число, а не строку!
    // dispatch(userOperations.changeBalance({ newBalance: 300 }));
    // }, 500);

    // setTimeout(() => {
    // При addIncome в параметрах запроса "category" должно быть одно из двух 'З/П' или 'Доп. доход', только так!
    // dispatch(
    //     transactionOperations.addIncome({
    //         description: 'Income description',
    //         amount: 100,
    //         date: '2022-10-31',
    //         category: 'З/П',
    //     })
    // );
    //----------------------------------------------------------------
    // При getIncome передавать ничего не нужно. Записывает в
    // state.userIncomes.incomes все транзакции по доходам, а в state.userIncomes.monthsStats суммы по месяцам.
    // dispatch(transactionOperations.getIncome());
    //----------------------------------------------------------------
    // При addExpense в параметрах запроса "category" должно быть: 'Алкоголь', 'Образование', 'Развлечения',
    // 'Всё для дома', 'Здоровье', 'Прочее', 'Продукты', 'Спорт и хобби', 'Техника', 'Транспорт',
    // 'Коммуналка и связь', только так
    // dispatch(
    //     transactionOperations.addExpense({
    //         description: 'Expense description',
    //         amount: 100,
    //         date: '2022-08-31',
    //         category: 'Продукты',
    //     })
    // );
    //----------------------------------------------------------------
    // При getExpense передавать ничего не нужно. Записывает в
    // state.userExpenses.expenses все транзакции по доходам, а в state.userExpenses.monthsStats суммы по месяцам.
    // dispatch(transactionOperations.getExpense());
    //----------------------------------------------------------------
    // При deleteTransaction передавать строку с id транзакции, записывает в state.userData.balance новый баланс.
    // Пара id для проверки '631e753adb7a810814033f25', '631e753adb7a810814033f26', '631e755bdb7a810814033f28'.
    // dispatch(
    //     transactionOperations.deleteTransaction(
    //         '631e753adb7a810814033f24'
    //     )
    // );
    //----------------------------------------------------------------
    // При getIncomeCategories передавать ничего не нужно. Записывает в state.incomeCategories массив с категориями.
    // dispatch(transactionOperations.getIncomeCategories());
    //----------------------------------------------------------------
    // При getExpenseCategories передавать ничего не нужно. Записывает в state.expenseCategories массив с категориями.
    // dispatch(transactionOperations.getExpenseCategories());
    //----------------------------------------------------------------
    // При getTransactionsByPeriod нужно передать строку в формате 'YYYY-MM'. Записывает в state.transactionsByPeriod
    // суммы расходов и доходов, а также данные по всем транзакциям.
    // dispatch(transactionOperations.getTransactionsByPeriod('2022-08'));
    // }, 1000);

    const { pathname } = useLocation();

    const containerClass =
        pathname === '/' ? s.containerLogedOut : s.containerLogedIn;

    return <div className={containerClass}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.node,
};
