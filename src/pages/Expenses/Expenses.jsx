import s from '../index.module.css';
import { Link } from 'react-router-dom';
import { ExpensesModule } from 'modules';
import { BalanceForm } from 'components';

const Expenses = () => {
    return (
        <>
            <div className={s.container}>
                <Link to="/reports">Reports</Link>
                <BalanceForm />
            </div>
            <ExpensesModule />;
        </>
    );
};

export default Expenses;
