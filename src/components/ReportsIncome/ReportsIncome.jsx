import { useSelector } from 'react-redux';
import svg from '../../images/sprite.svg';
import s from './ReportsIncome.module.css';
import {
    SALARY_CATEGORY,
    ADDITIONAL_INCOME_CATEGORY,
} from '../Constants/Constants';
const ReportsIncome = ({ handleChangeRender, chooseProductChart }) => {
    const getSalary = useSelector(
        state =>
            state.finance.transactionsByPeriod.incomes?.incomesData?.[
                SALARY_CATEGORY
            ]?.total
    );
    const getAdditionalIncome = useSelector(
        state =>
            state.finance.transactionsByPeriod.incomes?.incomesData?.[
                ADDITIONAL_INCOME_CATEGORY
            ]?.total
    );

    const getAllIncome = useSelector(
        state => state.finance.transactionsByPeriod.incomes.incomeTotal
    );



    return (
        <div className={s.container}>
            <div className={s.headGroup__container}>
                <button onClick={handleChangeRender} className={s.flipbutton}>
                    <svg className={s.flipbutton__icon} width="5" height="10">
                        <use href={`${svg}#icon-arrowSmallLeft`}></use>
                    </svg>
                </button>
                <h2 className={s.period__title}>INCOME</h2>
                <button onClick={handleChangeRender} className={s.flipbutton}>
                    <svg className={s.flipbutton__icon} width="5" height="10">
                        <use href={`${svg}#icon-arrowSmallRight`}></use>
                    </svg>
                </button>
            </div>
            {getAllIncome === 0 && <h1 className={s.Notify__title}>No incomes in this month</h1>}
            <div className={s.groupContent_container}>
                {getSalary && (
                    <div
                        onClick={() => chooseProductChart(SALARY_CATEGORY)}
                        className={s.content__container}
                    >
                        <span>{getSalary}</span>
                        <svg
                            className={s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Salary1`}></use>
                        </svg>
                        <span className={s.categories__text}>ЗП</span>
                    </div>
                )}
                {getAdditionalIncome && (
                    <div
                        onClick={() =>
                            chooseProductChart(ADDITIONAL_INCOME_CATEGORY)
                        }
                        className={s.content__container}
                    >
                        <span>{getAdditionalIncome}</span>
                        <svg
                            className={s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Salary2`}></use>
                        </svg>
                        <span className={s.categories__text}>Доп.доход</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReportsIncome;
