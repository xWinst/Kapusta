import s from '../index.module.css';
import { Link } from 'react-router-dom';
import { IncomeModule } from 'modules';
import { BalanceForm } from 'components';
const Income = () => {
    return (
        <>
            <div className={s.container}>
                <Link to="/reports">Reports</Link>
                <BalanceForm />
            </div>
            <IncomeModule />
        </>
    );
};

export default Income;
