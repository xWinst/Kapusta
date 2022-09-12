import { BalanceMobileInput } from 'components';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const BalanceInput = () => {
      const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

      if (!isLoggedIn) {
          return <Navigate to="/" />;
      }
    return <BalanceMobileInput />;
};

export default BalanceInput;
