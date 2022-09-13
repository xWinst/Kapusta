import { BalanceMobileInput } from 'components';

import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BalanceInput = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const { pathname } = useLocation();

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }
    return (
        <>
            {pathname === '/expenses-input-mobile' && (
                <BalanceMobileInput title={'Expenses'} />
            )}
            {pathname === '/incomes-input-mobile' && (
                <BalanceMobileInput title={'Incomes'} />
            )}
        </>
    );
};

export default BalanceInput;
