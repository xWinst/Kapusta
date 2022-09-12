import { ButtonBack } from '../../components/ButtonBack/ButtonBack';
import { ReportsPeriod } from '../../components/ReportsPeriod/ReportsPeriod';
import { ReportsTotal } from '../../components/ReportsTotal/ReportsTotal';
import { ReportsCategories } from '../../components/ReportsCategories/ReportsCategories';

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
