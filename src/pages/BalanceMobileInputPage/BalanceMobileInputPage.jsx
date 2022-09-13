import { BalanceMobileInput } from 'components';
import { useLocation } from 'react-router-dom';

const BalanceInput = () => {
    const { pathname } = useLocation();
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
