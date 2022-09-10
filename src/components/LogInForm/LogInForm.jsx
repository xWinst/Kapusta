import { useNavigate } from 'react-router-dom'; //Временно
import GoogleLogo from '../../images/googleLogo.svg';
import s from './LogInForm.module.css';
export default function LogInForm() {
    const navigate = useNavigate(); //Временно
    return (
        <form className={s.loginForm}>
            <p className={s.googleText}>
                You can log in with your Google Account:
            </p>
            <button className={s.googleBtn} type="button">
                <img src={GoogleLogo} alt="Google logo" />
            </button>
            <p className={s.formText}>
                Or log in using an email and password, after registering:
            </p>
            <label className={s.formLabel}>
                Email:
                <input
                    className={s.formInput}
                    type="email"
                    name="email"
                    value=""
                    onChange={() => {}}
                    title="Please enter valid email address, for example  'example@gmail.com'"
                    placeholder="your@email.com"
                    min-length="6"
                    // required  //Временно
                />
            </label>
            <label className={s.formLabel}>
                Password:
                <input
                    className={s.formInput}
                    type="password"
                    name="password"
                    value=""
                    onChange={() => {}}
                    title="Please enter your password. Minimum length 8 symbols"
                    placeholder="Password"
                    min-length="8"
                    // required   //Временно
                />
            </label>
            <div className={s.btnCont}>
                <button
                    className={s.formBtnOrange}
                    type="button" //Временно
                    onClick={() => navigate('expenses')} //Временно
                >
                    LOG IN
                </button>
                <button className={s.formBtn} type="submit">
                    REGISTRATION
                </button>
            </div>
        </form>
    );
}
