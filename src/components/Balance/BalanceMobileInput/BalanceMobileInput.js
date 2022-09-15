import Calendar from 'components/Calendar/Calendar';
import Button from 'components/Button/Button';
import GoBackArrow from 'components/GoBackArrow/GoBackArrow';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addExpense, addIncome } from 'redux/transaction/transactionOperations';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from '../BalanceMobileInput/BalanceMobileInput.module.css';

export default function BalanceMobileInput({ title }) {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('DEFAULT');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const { pathname } = useLocation();

    const productsExpense = useSelector(state => state.finance.expenseCategories);
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
            <option value={el} key={shortid()}>
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
        } else if (pathname === '/expenses-input-mobile') {
            dispatch(addExpense({ description, category, date, amount }));
        } else if (pathname === '/incomes-input-mobile') {
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
            <div className={s.divFlexCalendarAndArrow}>
                <GoBackArrow />
                <h1
                    className={
                        pathname === '/expenses-input-mobile' ? s.titleExpenses : s.titleIncomes
                    }
                >
                    {title}
                </h1>
            </div>

            <Calendar dateHandle={dateHandle} />

            <label className={s.formLabelProductDescription}>
                <input
                    required
                    onChange={handleInputChange}
                    maxLength="100"
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

                    {pathname === '/expenses-input-mobile' && productsExpenseElemets}
                    {pathname === '/incomes-input-mobile' && productsIncomeElemets}
                </select>
            </label>
            <label className={s.formLabelCalc}>
                <input
                    min={1}
                    required
                    onChange={handleInputChange}
                    className={s.formInputCalc}
                    name="amount"
                    type="number"
                    placeholder="0,00 UAH"
                    step=".01"
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

BalanceMobileInput.propTypes = {
    title: PropTypes.string,
};
