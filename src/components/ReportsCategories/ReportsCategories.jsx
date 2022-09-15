import s from './ReportsCategories.module.css';
import svg from '../../images/sprite.svg';
import { useSelector } from 'react-redux';
import {
    PRODUCT_CATEGORY,
    ALCOHOL_CATEGORY,
    ENTERTAINMENT_CATEGORY,
    HEALTH_CATEGORY,
    TRANSPORT_CATEGORY,
    HOUSING_CATEGORY,
    TECHNIQUE_CATEGORY,
    COMMUNAL_CATEGORY,
    SPORT_CATEGORY,
    EDUCATION_CATEGORY,
    OTHER_CATEGORY,
} from 'components/Constants/Constants';

let isActiveProduct = false;
let isActiveAlcohol = false;
let isActiveEntertainment = false;
let isActiveHealth = false;
let isActiveTransport = false;
let isActiveHousing = false;
let isActiveTechnique = false;
let isActiveCommunal = false;
let isActiveSport = false;
let isActiveEducation = false;
let isActiveOther = false;

const ReportsCategories = ({ handleChangeRender, chooseProductChart }) => {
    const getExpenseProducts = useSelector(
        state =>
            state.finance.transactionsByPeriod?.expenses?.expensesData?.[PRODUCT_CATEGORY]?.total
    );
    const getExpenseAlcohol = useSelector(
        state =>
            state.finance.transactionsByPeriod?.expenses?.expensesData?.[ALCOHOL_CATEGORY]?.total
    );
    const getExpenseEntertainment = useSelector(
        state =>
            state.finance.transactionsByPeriod?.expenses?.expensesData?.[ENTERTAINMENT_CATEGORY]
                ?.total
    );
    const getExpenseHealth = useSelector(
        state =>
            state.finance.transactionsByPeriod?.expenses?.expensesData?.[HEALTH_CATEGORY]?.total
    );
    const getExpenseTransport = useSelector(
        state =>
            state.finance.transactionsByPeriod?.expenses?.expensesData?.[TRANSPORT_CATEGORY]?.total
    );
    const getExpenseHousing = useSelector(
        state =>
            state.finance.transactionsByPeriod?.expenses?.expensesData?.[HOUSING_CATEGORY]?.total
    );
    const getExpenseTechnique = useSelector(
        state =>
            state.finance.transactionsByPeriod?.expenses?.expensesData?.[TECHNIQUE_CATEGORY]?.total
    );
    const getExpenseCommunal = useSelector(
        state =>
            state.finance.transactionsByPeriod?.expenses?.expensesData?.[COMMUNAL_CATEGORY]?.total
    );
    const getExpenseSport = useSelector(
        state => state.finance.transactionsByPeriod?.expenses?.expensesData?.[SPORT_CATEGORY]?.total
    );
    const getExpenseEducation = useSelector(
        state =>
            state.finance.transactionsByPeriod?.expenses?.expensesData?.[EDUCATION_CATEGORY]?.total
    );
    const getExpenseOther = useSelector(
        state => state.finance.transactionsByPeriod?.expenses?.expensesData?.[OTHER_CATEGORY]?.total
    );
    const getExpenses = useSelector(
        state => state.finance.transactionsByPeriod?.expenses?.expenseTotal
    );

    const resetActive = () => {
        isActiveProduct = false;
        isActiveAlcohol = false;
        isActiveEntertainment = false;
        isActiveHealth = false;
        isActiveTransport = false;
        isActiveHousing = false;
        isActiveTechnique = false;
        isActiveCommunal = false;
        isActiveSport = false;
        isActiveEducation = false;
        isActiveOther = false;
    };

    const onClick = category => {
        chooseProductChart(category);
        resetActive();
        switch (category) {
            case PRODUCT_CATEGORY:
                isActiveProduct = true;
                break;
            case ALCOHOL_CATEGORY:
                isActiveAlcohol = true;
                break;
            case ENTERTAINMENT_CATEGORY:
                isActiveEntertainment = true;
                break;
            case HEALTH_CATEGORY:
                isActiveHealth = true;
                break;
            case TRANSPORT_CATEGORY:
                isActiveTransport = true;
                break;
            case HOUSING_CATEGORY:
                isActiveHousing = true;
                break;
            case TECHNIQUE_CATEGORY:
                isActiveTechnique = true;
                break;
            case COMMUNAL_CATEGORY:
                isActiveCommunal = true;
                break;
            case SPORT_CATEGORY:
                isActiveSport = true;
                break;
            case EDUCATION_CATEGORY:
                isActiveEducation = true;
                break;
            case OTHER_CATEGORY:
                isActiveOther = true;
                break;
            default:
        }
        console.log('Bingo!!');
    };

    return (
        <section className={s.categories}>
            <div className={s.button__group}>
                <button onClick={handleChangeRender} className={s.flipbutton}>
                    <svg className={s.flipbutton__icon} width="5" height="10">
                        <use href={`${svg}#icon-arrowSmallLeft`}></use>
                    </svg>
                </button>
                <h2 className={s.categories__title}>Expenses</h2>
                <button onClick={handleChangeRender} className={s.flipbutton}>
                    <svg className={s.flipbutton__icon} width="5" height="10">
                        <use href={`${svg}#icon-arrowSmallRight`}></use>
                    </svg>
                </button>
            </div>
            {getExpenses === 0 && <h1 className={s.expenses__title}>No expenses in this month</h1>}
            <ul className={s.categories__list}>
                {getExpenseProducts && (
                    <li onClick={() => onClick(PRODUCT_CATEGORY)} className={s.categories__item}>
                        <p className={s.categories__price}>{getExpenseProducts}</p>
                        <svg
                            className={isActiveProduct ? s.active : s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Products`}></use>
                        </svg>
                        <p className={s.categories__text}>PRODUCTS</p>
                    </li>
                )}
                {getExpenseAlcohol && (
                    <li onClick={() => onClick(ALCOHOL_CATEGORY)} className={s.categories__item}>
                        <p className={s.categories__price}>{getExpenseAlcohol}</p>
                        <svg
                            className={isActiveAlcohol ? s.active : s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Alcohol`}></use>
                        </svg>
                        <p className={s.categories__text}>ALCOHOL</p>
                    </li>
                )}
                {getExpenseEntertainment && (
                    <li
                        onClick={() => onClick(ENTERTAINMENT_CATEGORY)}
                        className={s.categories__item}
                    >
                        <p className={s.categories__price}>{getExpenseEntertainment}</p>
                        <svg
                            className={isActiveEntertainment ? s.active : s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Entertainment`}></use>
                        </svg>
                        <p className={s.categories__text}>ENTERTAINMENT</p>
                    </li>
                )}
                {getExpenseHealth && (
                    <li onClick={() => onClick(HEALTH_CATEGORY)} className={s.categories__item}>
                        <p className={s.categories__price}>{getExpenseHealth}</p>
                        <svg
                            className={isActiveHealth ? s.active : s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Health`}></use>
                        </svg>
                        <p className={s.categories__text}>HEALTH</p>
                    </li>
                )}
                {getExpenseTransport && (
                    <li onClick={() => onClick(TRANSPORT_CATEGORY)} className={s.categories__item}>
                        <p className={s.categories__price}>{getExpenseTransport}</p>
                        <svg
                            className={isActiveTransport ? s.active : s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Transport`}></use>
                        </svg>
                        <p className={s.categories__text}>TRANSPORT</p>
                    </li>
                )}
                {getExpenseHousing && (
                    <li onClick={() => onClick(HOUSING_CATEGORY)} className={s.categories__item}>
                        <p className={s.categories__price}>{getExpenseHousing}</p>
                        <svg
                            className={isActiveHousing ? s.active : s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Housing`}></use>
                        </svg>
                        <p className={s.categories__text}>HOUSING</p>
                    </li>
                )}
                {getExpenseTechnique && (
                    <li onClick={() => onClick(TECHNIQUE_CATEGORY)} className={s.categories__item}>
                        <p className={s.categories__price}>{getExpenseTechnique}</p>
                        <svg
                            className={isActiveTechnique ? s.active : s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Technique`}></use>
                        </svg>
                        <p className={s.categories__text}>TECHNIQUE</p>
                    </li>
                )}
                {getExpenseCommunal && (
                    <li onClick={() => onClick(COMMUNAL_CATEGORY)} className={s.categories__item}>
                        <p className={s.categories__price}>{getExpenseCommunal}</p>
                        <svg
                            className={isActiveCommunal ? s.active : s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Communal`}></use>
                        </svg>
                        <p className={s.categories__text}>COMMUNAL</p>
                    </li>
                )}
                {getExpenseSport && (
                    <li onClick={() => onClick(SPORT_CATEGORY)} className={s.categories__item}>
                        <p className={s.categories__price}>{getExpenseSport}</p>
                        <svg
                            className={isActiveSport ? s.active : s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Sports`}></use>
                        </svg>
                        <p className={s.categories__text}>SPORTS</p>
                    </li>
                )}
                {getExpenseEducation && (
                    <li onClick={() => onClick(EDUCATION_CATEGORY)} className={s.categories__item}>
                        <p className={s.categories__price}>{getExpenseEducation}</p>
                        <svg
                            className={isActiveEducation ? s.active : s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Education`}></use>
                        </svg>
                        <p className={s.categories__text}>EDUCATION</p>
                    </li>
                )}
                {getExpenseOther && (
                    <li onClick={() => onClick(OTHER_CATEGORY)} className={s.categories__item}>
                        <p className={s.categories__price}>{getExpenseOther}</p>
                        <svg
                            className={isActiveOther ? s.active : s.categories__icon}
                            width="60"
                            height="60"
                        >
                            <use href={`${svg}#category-Other`}></use>
                        </svg>
                        <p className={s.categories__text}>OTHER</p>
                    </li>
                )}
            </ul>
        </section>
    );
};

export default ReportsCategories;
