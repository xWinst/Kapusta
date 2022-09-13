import Calendar from 'components/Calendar/Calendar';
import Button from 'components/Button/Button';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, addIncome } from 'redux/transaction/transactionOperations';
import shortid from 'shortid';

import s from '../BalanceFormInput/BalanceFormInput.module.css';

export default function BalanceFormInput() {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const { pathname } = useLocation();

    const productsExpense = useSelector(
        state => state.finance.expenseCategories
    );
    const productsExpenseElemets = productsExpense?.map(el => {
        return <option key={shortid()}>{el}</option>;
    });

    const productsIncome = useSelector(state => state.finance.incomeCategories);
    const productsIncomeElemets = productsIncome?.map(el => {
        return <option key={shortid()}>{el}</option>;
    });

    const formData = ({ description, category, date, amount }) => {
        if (pathname === '/expenses') {
            dispatch(addExpense({ description, category, date, amount }));
        } else if (pathname === '/income') {
            dispatch(addIncome({ description, category, date, amount }));
        }
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'description':
                setDescription(value);
                break;
            case 'amount':
                setAmount(Number(value));
                break;
            default:
                return;
        }
    };

    const onChangeSelect = event => {
        setCategory(event.target.value);
    };

    const onFormSubmit = event => {
        event.preventDefault();
        setDescription('');
        setCategory('');
        setAmount('');
        // setDate('');
        formData({ description, category, date, amount });
    };

    const dateHandle = date => {
        const year = date.toLocaleString('default', { year: 'numeric' });
        const month = date.toLocaleString('default', { month: '2-digit' });
        const day = date.toLocaleString('default', { day: '2-digit' });
        const formattedDate = year + '-' + month + '-' + day;

        setDate(formattedDate);
    };

    return (
        <form onSubmit={onFormSubmit} className={s.form} name="signup_form">
            <Calendar dateHandle={dateHandle} />
            <label className={s.formLabelProductDescription}>
                <input
                    onChange={handleInputChange}
                    className={s.formInputProductDescription}
                    type="text"
                    name="description"
                    placeholder="Product description"
                    value={description}
                />
            </label>
            <label>
                <select
                    onChange={onChangeSelect}
                    className={s.formInputProductCategory}
                    defaultValue={'DEFAULT'}
                >
                    <option disabled value={'DEFAULT'}>
                        Product category
                    </option>

                    {pathname === '/expenses' && productsExpenseElemets}
                    {pathname === '/income' && productsIncomeElemets}
                </select>
            </label>
            <label className={s.formLabelCalc}>
                <input
                    onChange={handleInputChange}
                    className={s.formInputCalc}
                    name="amount"
                    type="number"
                    placeholder="0,00"
                    step=".01"
                    value={amount}
                ></input>
            </label>
            <div className={s.formButtonsDiv}>
                <Button type={'submit'} buttonName={'input'} title={'Input'} />
                <Button type={'submit'} buttonName={'clear'} title={'Clear'} />
            </div>
        </form>
    );
}
