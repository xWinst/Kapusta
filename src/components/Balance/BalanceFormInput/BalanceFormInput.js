import Calendar from 'components/Calendar/Calendar';
import Button from 'components/Button/Button';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, addIncome } from 'redux/transaction/transactionOperations';
import shortid from 'shortid';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from '../BalanceFormInput/BalanceFormInput.module.css';

export default function BalanceFormInput() {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('DEFAULT');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const { pathname } = useLocation();

    const productsExpense = useSelector(
        state => state.finance.expenseCategories
    );

    const productsExpenseElemets = productsExpense?.map(el => {
        return (
            <option value={el} key={shortid()}>
                {el}
            </option>
        );
    });

    const productsIncome = useSelector(state => state.finance.incomeCategories);
    const productsIncomeElemets = productsIncome?.map(el => {
        return (
            <option className={s.selectOption} value={el} key={shortid()}>
                {el}
            </option>
        );
    });

    const formData = ({ description, category, date, amount }) => {
        if (category === 'DEFAULT') {
            toast.warn('Please choose category!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,

                draggable: true,
                progress: undefined,
            });
        } else if (pathname === '/expenses') {
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
            case 'category':
                setCategory(value);
                break;

            default:
                return;
        }
    };

    const onFormSubmit = event => {
        event.preventDefault();
        formData({ description, category, date, amount });

        if (category !== 'DEFAULT') {
            resetForm();
        }
    };

    const resetForm = () => {
        setDescription('');
        setCategory('DEFAULT');
        setAmount('');
        setDate();
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
                    required
                    maxLength="100"
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
                    name="category"
                    onChange={handleInputChange}
                    className={s.formInputProductCategory}
                    value={category}
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
                    required
                    min={1}
                    onChange={handleInputChange}
                    className={s.formInputCalc}
                    name="amount"
                    type="number"
                    placeholder="0,00 UAH"
                    step="1"
                    value={amount}
                ></input>
            </label>
            <div className={s.formButtonsDiv}>
                <Button type={'submit'} buttonName={'input'} title={'Input'} />
                <Button
                    onClick={() => {
                        resetForm();
                    }}
                    type={'button'}
                    buttonName={'clear'}
                    title={'Clear'}
                />
            </div>
        </form>
    );
}
