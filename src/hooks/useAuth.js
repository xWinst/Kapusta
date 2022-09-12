import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export const useAuth = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);
    const userEmail = useSelector(authSelectors.getUserEmail);

    return {
        isLoggedIn,
        isRefreshing,
        userEmail,
    };
};
