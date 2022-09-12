import s from '../index.module.css';
import { Link } from 'react-router-dom';
import { ExpensesModule } from 'modules';
import { BalanceForm } from 'components';
import { ReactComponent as ReportPic } from 'images/barChart.svg';
import style from './Expenses.module.css';

const Expenses = () => {
    return (
        <>
            <div className={s.container}>
                <Link to="/reports" className={style.goToReport}>
                    Reports
                    <ReportPic className={style.reportPic} alt={'reportPic'} />
                </Link>
                <BalanceForm />
            </div>
            <ExpensesModule />
        </>
    );
};

export default Expenses;
