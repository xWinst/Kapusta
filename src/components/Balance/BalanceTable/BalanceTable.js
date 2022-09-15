import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import { getExpense, getIncome } from 'redux/transaction/transactionOperations';
import { useState } from 'react';
import LogOutModal from '../../modals/LogOutModal/LogOutModal';
import s from '../BalanceTable/BalanceTable.module.css';

export default function Table() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const onDeleteButton = _id => {
        setTransactionId(_id);
        setIsModalOpen(true);
    };
    const onCloseBtn = () => {
        setIsModalOpen(false);
    };

    const confirmHandle = () => {
        dispatch(deleteTransaction(transactionId));
        setTransactionId('');
        setIsModalOpen(false);
    };

    const userExpenses = useSelector(
        state => state.finance.userExpenses.expenses
    );
    const userIncome = useSelector(state => state.finance.userIncomes.incomes);
    const isLoggedIn = useSelector(state => state.finance.isLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getExpense());
            dispatch(getIncome());
        }
    }, [dispatch, isLoggedIn]);

    const userExpensesElements = userExpenses
        ?.map(x => x)
        .sort((a, b) => b.date.localeCompare(a.date))
        .map(({ _id, description, category, date, amount }) => {
            return (
                <tr key={_id} className={s.tableBodyTR}>
                    <td className={s.tableBodyEmpty}></td>
                    <td className={s.tableBodyDate}>{date}</td>
                    <td className={s.tableBodyDescription}>{description}</td>
                    <td className={s.tableBodyCategory}>{category}</td>
                    <td className={s.tableBodySumExpenses}>- {amount} грн</td>
                    <td className={s.tableBodyDelete}>
                        <button
                            onClick={() => {
                                onDeleteButton(_id);
                            }}
                            type="button"
                            className={s.btnDelete}
                        ></button>
                    </td>
                </tr>
            );
        });

    const userIncomeElements = userIncome
        ?.map(x => x)
        .sort((a, b) => b.date.localeCompare(a.date))
        .map(({ _id, description, category, date, amount }) => {
            return (
                <tr key={_id} className={s.tableBodyTR}>
                    <td className={s.tableBodyEmpty}></td>
                    <td className={s.tableBodyDate}>{date}</td>
                    <td className={s.tableBodyDescription}>{description}</td>
                    <td className={s.tableBodyCategory}>{category}</td>
                    <td className={s.tableBodySumIncome}> {amount} грн</td>
                    <td className={s.tableBodyDelete}>
                        <button
                            onClick={() => {
                                onDeleteButton(_id);
                            }}
                            type="button"
                            className={s.btnDelete}
                        ></button>
                    </td>
                </tr>
            );
        });

    return (

        <>
            <div className={s.scrollTable}>
                <table>
                    <thead className={s.tableHead}>
                        <tr>
                            <th className={s.tableTheadEmpty}></th>
                            <th className={s.tableTheadDate}>DATE</th>
                            <th className={s.tableTheadDescription}>
                                DESCRIPTION
                            </th>
                            <th className={s.tableTheadCategory}>CATEGORY</th>
                            <th className={s.tableTheadSum}>SUM</th>
                            <th className={s.tableTheadDelete}></th>
                        </tr>
                    </thead>
                </table>
                <div className={s.scrollTableBody}>
                    <table>
                        <tbody>
                            {pathname === '/expenses' && userExpensesElements}
                            {pathname === '/income' && userIncomeElements}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && (
                <div className={s.modalLogoutWrap}>
                    <LogOutModal
                        text="Are you sure delete the transaction?"
                        onClose={onCloseBtn}
                        onConfirm={confirmHandle}
                    />
                </div>
            )}
        </>
    );
}
