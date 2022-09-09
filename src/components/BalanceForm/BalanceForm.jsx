import s from './BalanceForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBalance, updateBalance } from 'redux/userBalance';
import { useEffect, useMemo, useState } from 'react';
import Toast from 'components/BalanceFormToast';
import { getMonthStatsExpenses, getMonthStatsIncomes } from 'redux/transaction';

const BalanceForm = () => {
  const balance = useSelector(getBalance);
  const incomes = useSelector(getMonthStatsIncomes);
  const expenses = useSelector(getMonthStatsExpenses);
  const dispatch = useDispatch();

  const isBalanceUnset = useMemo(() => {
    const isZeroBalance = balance === 0;
    const areExpensesAbsent = Object.values(incomes).every(
      value => value === 'N/A'
    );
    const areIncomesAbsent = Object.values(expenses).every(
      value => value === 'N/A'
    );
    return isZeroBalance && areExpensesAbsent && areIncomesAbsent;
  }, [balance, incomes, expenses]);

  const addCurrency = value => `${value} UAH`;

  const [canChange, setCanChange] = useState(isBalanceUnset);
  const [isToastShown, setIsToastShown] = useState(isBalanceUnset);
  const [balanceInput, setBalanceInput] = useState(addCurrency(balance));
  const [balanceBackup, setBalanceBackup] = useState(balanceInput);
  useEffect(() => {
    setCanChange(isBalanceUnset);
    setIsToastShown(isBalanceUnset);
  }, [isBalanceUnset]);

  useEffect(() => {
    if (balance) {
      setBalanceInput(addCurrency(balance));
    }
  }, [balance]);

  const handleChange = e => {
    if (e.target.value === '') {
      setBalanceInput('0');
      return;
    }

    const num = parseInt(e.target.value);
    if (num) {
      setBalanceInput(String(num));
    }
  };

  const handleFocus = () => {
    setBalanceBackup(balanceInput);
    setBalanceInput('');
  };

  const handleBlur = () => {
    if (balanceInput === '') {
      setBalanceInput(balanceBackup);
      return;
    }

    const num = parseInt(balanceInput);
    setBalanceInput(addCurrency(num));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsToastShown(false);
    if (balanceInput !== '0 UAH') {
      dispatch(updateBalance(parseInt(balanceInput)));
    }
  };

  return (
    <div className={s.Container}>
      <p className={s.Title}>Balance:</p>
      <form className={s.Box} onSubmit={handleSubmit}>
        {canChange ? (
          <input
            className={s.Value}
            value={balanceInput}
            placeholder={'0 UAH'}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        ) : (
          <span className={s.Value}>{balanceInput}</span>
        )}
        <button
          type={'submit'}
          className={canChange ? s.ButtonEnabled : s.ButtonDisabled}
        >
          CONFIRM
        </button>
        {isToastShown && <Toast onClose={() => setIsToastShown(false)} />}
      </form>
    </div>
  );
};

export default BalanceForm;
