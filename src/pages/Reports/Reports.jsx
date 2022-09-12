import {
    ButtonBack,
    ReportsPeriod,
    ReportsTotal,
    ReportsCategories,
} from 'components';

import s from './Reports.module.css';

const Reports = () => {
    return (
        <div className={s.container}>
            <div className={s.reports__nav}>
                <ButtonBack />
                <p>Balance</p>
                <ReportsPeriod />
            </div>
            <ReportsTotal />
            <ReportsCategories />
        </div>
    );
};

export default Reports;
