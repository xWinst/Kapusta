import { Link } from 'react-router-dom';

import { FlipButtons } from '../../components/FlipButtons/FlipButtons';
import { ReportsTotal } from '../../components/ReportsTotal/ReportsTotal';
import { ReportsCategories } from '../../components/ReportsCategories/ReportsCategories';

import s from './Reports.module.css';
import svg from '../../images/sprite.svg';

const Reports = () => {
    return (
        <div className={s.container}>
            <div className={s.reports__nav}>
                <Link to="/expenses" className={s.back}>
                    <svg className={s.back__icon} width="24" height="24">
                        <use href={`${svg}#icon-ArrowToGoBack`}></use>
                    </svg>
                    <span className={s.back__text}>Main page</span>
                </Link>

                <p>Balance</p>
                <div className={s.period}>
                    <p className={s.period__text}>Current period:</p>
                    <FlipButtons>
                        <h2 className={s.period__title}>November 2019</h2>
                    </FlipButtons>
                </div>
            </div>
            <ReportsTotal />
            <ReportsCategories />
        </div>
    );
};

export default Reports;
