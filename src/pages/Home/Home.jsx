import s from './Home.module.css';
import { LogInForm } from 'components';
import kapustaText from '../../images/union.svg';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    if (isLoggedIn) {
        return <Navigate to="expenses" />;
    }

    return (
        <div className={s.loginSectWrapper}>
            <div className={s.mainTextWrapper}>
                <img src={kapustaText} alt="Kapusta" />
                <h2 className={s.loginSectText}>Smart Finance</h2>
            </div>
            <div className={s.loginFormWrapper}>
                <LogInForm />
            </div>
        </div>
    );
};

export default Home;
