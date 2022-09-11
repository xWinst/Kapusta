import s from './Home.module.css';
import { LogInForm } from 'components';
import kapustaText from '../../images/union.svg';

const Home = () => {
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
