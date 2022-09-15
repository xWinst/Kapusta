import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getExpense, getIncome } from 'redux/transaction/transactionOperations';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import LogOutModal from '../../modals/LogOutModal/LogOutModal';
import { deleteTransaction } from 'redux/transaction/transactionOperations';
import s from '../BalanceMobileTable/BalanceMobileTable.module.css';
export default function BalanceMobileTable() {
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

    const userExpenses = useSelector(state => state.finance.userExpenses.expenses);
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
                <div key={_id} className={s.mobileTableDiv}>
                    <h2 className={s.title}>{description}</h2>
                    <ul className={s.list}>
                        <div className={s.divTextFlex}>
                            <p className={s.textDate}>{date}</p>
                            <p className={s.textCategory}>{category}</p>
                        </div>
                        <div className={s.divSumAndButtonFlex}>
                            <p className={s.divSumAndButtonFlex__SumExpenses}>- {amount} грн</p>
                            <button
                                onClick={() => {
                                    onDeleteButton(_id);
                                }}
                                type="button"
                                className={s.btnDelete}
                            ></button>
                        </div>
                    </ul>
                </div>
            );
        });

    const userIncomeElements = userIncome
        ?.map(x => x)
        .sort((a, b) => b.date.localeCompare(a.date))
        .map(({ _id, description, category, date, amount }) => {
            return (
                <div key={_id} className={s.mobileTableDiv}>
                    <h2 className={s.title}>{description}</h2>
                    <ul className={s.list}>
                        <div className={s.divTextFlex}>
                            <p className={s.textDate}>{date}</p>
                            <p className={s.textCategory}>{category}</p>
                        </div>
                        <div className={s.divSumAndButtonFlex}>
                            <p className={s.divSumAndButtonFlex__SumIncomes}>{amount} грн</p>
                            <button
                                onClick={() => {
                                    onDeleteButton(_id);
                                }}
                                type="button"
                                className={s.btnDelete}
                            ></button>
                        </div>
                    </ul>
                </div>
            );
        });

    return (
        <>
            <div className={s.tableContainer}>
                {pathname === '/expenses' && userExpensesElements}
                {pathname === '/income' && userIncomeElements}
                {isModalOpen && (
                    <div className={s.modalLogoutWrap}>
                        <LogOutModal
                            text="Are you sure delete the transaction?"
                            onClose={onCloseBtn}
                            onConfirm={confirmHandle}
                        />
                    </div>
                )}
            </div>
        </>
    );
}
