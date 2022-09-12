import s from '../index.module.css';
import { Link } from 'react-router-dom';
import { IncomeModule } from 'modules';
import { BalanceForm } from 'components';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const Income = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }
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
