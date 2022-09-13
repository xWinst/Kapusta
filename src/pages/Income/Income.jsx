import { Link } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { IncomeModule } from 'modules';
import { BalanceForm } from 'components';
import { ReactComponent as ReportPic } from 'images/barChart.svg';

import s from '../index.module.css';
import style from './Income.module.css';

const Income = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }
    return (
        <>
            <div className={s.container}>
                <Link to="/reports" className={style.goToReport}>
                    Reports
                    <ReportPic className={style.reportPic} alt={'reportPic'} />
                </Link>
                <BalanceForm />
            </div>
            <IncomeModule />
        </>
    );
};

export default Income;
