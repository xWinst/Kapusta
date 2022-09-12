import { FlipButtons } from 'components';

import s from './ReportsCategories.module.css';
import svg from '../../images/sprite.svg';

const ReportsCategories = () => {
    return (
        <section className={s.categories}>
            <FlipButtons>
                <h2 className={s.categories__title}>Expenses</h2>
            </FlipButtons>

            <ul className={s.categories__list}>
                <li className={s.categories__item}>
                    <p className={s.categories__price}>5 000.00</p>
                    <svg className={s.categories__icon} width="60" height="60">
                        <use href={`${svg}#category-Products`}></use>
                    </svg>
                    <p>Products</p>
                </li>
                <li className={s.categories__item}>
                    <p className={s.categories__price}>5 000.00</p>
                    <svg className={s.categories__icon} width="60" height="60">
                        <use href={`${svg}#category-Alcohol`}></use>
                    </svg>
                    <p>Products</p>
                </li>
                <li className={s.categories__item}>
                    <p className={s.categories__price}>5 000.00</p>
                    <svg className={s.categories__icon} width="60" height="60">
                        <use href={`${svg}#category-Entertainment`}></use>
                    </svg>
                    <p>Products</p>
                </li>
                <li className={s.categories__item}>
                    <p className={s.categories__price}>5 000.00</p>
                    <svg className={s.categories__icon} width="60" height="60">
                        <use href={`${svg}#category-Health`}></use>
                    </svg>
                    <p>Products</p>
                </li>
                <li className={s.categories__item}>
                    <p className={s.categories__price}>5 000.00</p>
                    <svg className={s.categories__icon} width="60" height="60">
                        <use href={`${svg}#category-Transport`}></use>
                    </svg>
                    <p>Products</p>
                </li>
                <li className={s.categories__item}>
                    <p className={s.categories__price}>5 000.00</p>
                    <svg className={s.categories__icon} width="60" height="60">
                        <use href={`${svg}#category-Housing`}></use>
                    </svg>
                    <p>Products</p>
                </li>
                <li className={s.categories__item}>
                    <p className={s.categories__price}>5 000.00</p>
                    <svg className={s.categories__icon} width="60" height="60">
                        <use href={`${svg}#category-Technique`}></use>
                    </svg>
                    <p>Products</p>
                </li>
                <li className={s.categories__item}>
                    <p className={s.categories__price}>5 000.00</p>
                    <svg className={s.categories__icon} width="60" height="60">
                        <use href={`${svg}#category-Communal`}></use>
                    </svg>
                    <p>Products</p>
                </li>
                <li className={s.categories__item}>
                    <p className={s.categories__price}>5 000.00</p>
                    <svg className={s.categories__icon} width="60" height="60">
                        <use href={`${svg}#category-Sports`}></use>
                    </svg>
                    <p>Products</p>
                </li>
                <li className={s.categories__item}>
                    <p className={s.categories__price}>5 000.00</p>
                    <svg className={s.categories__icon} width="60" height="60">
                        <use href={`${svg}#category-Education`}></use>
                    </svg>
                    <p>Products</p>
                </li>
                <li className={s.categories__item}>
                    <p className={s.categories__price}>5 000.00</p>
                    <svg className={s.categories__icon} width="60" height="60">
                        <use href={`${svg}#category-Other`}></use>
                    </svg>
                    <p>Products</p>
                </li>
            </ul>
        </section>
    );
};

export default ReportsCategories;
