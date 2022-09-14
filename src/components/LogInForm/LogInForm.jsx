import GoogleLogo from '../../images/googleLogo.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './LogInForm.module.css';
import { authOperations } from 'redux/auth';
import { useGoogleLogin } from '@moeindana/google-oauth';
import eyeOpened from '../../images/eye.svg';
import eyeClosed from '../../images/eye-blocked.svg';

export default function LogInForm() {
    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
    });

    const [isPswdShown, setIsPswdShown] = useState(false);

    const changePswdVisibility = () => {
        if (isPswdShown === false) {
            setIsPswdShown(true);
        }
        if (isPswdShown === true) {
            setIsPswdShown(false);
        }
    };

    const errorRegisterMessage = useSelector(state => state.auth.registerError);
    const errorLoginMessage = useSelector(state => state.auth.loginError);

    const dispatch = useDispatch();

    // const loginDisp = () => {
    //     dispatch(authOperations.googleLogIn());
    // };

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            const data = {
                email: tokenResponse.email,
                password: tokenResponse.id,
            };
            dispatch(authOperations.register(data));
        },
    });

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        setFormFields(prevState => ({ ...prevState, [name]: value }));
    };
    const resetForm = () => {
        setFormFields({
            email: '',
            password: '',
        });
    };

    const onLoginHandle = () => {
        dispatch(authOperations.logIn(formFields));
        resetForm();
    };
    const onRegisterHandle = () => {
        dispatch(authOperations.register(formFields));
        resetForm();
    };

    // console.log(process.env.REACT_APP_CLIENT_ID);

    return (
        <form className={s.loginForm}>
            <p className={s.googleText}>
                You can log in with your Google Account:
            </p>
            <button
                onClick={() => {
                    login();
                }}
                className={s.googleBtn}
                type="button"
            >
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
                    value={formFields.email}
                    onChange={handleChange}
                    title="Please enter valid email address, for example  'example@gmail.com'"
                    placeholder="your@email.com"
                    min-length="6"
                    required
                />
            </label>

            {errorRegisterMessage && (
                <p className={s.errorMessage}>Error: {errorRegisterMessage} </p>
            )}
            <label className={s.formLabel}>
                Password:
                <input
                    className={s.formInput}
                    type={isPswdShown ? 'text' : 'password'}
                    name="password"
                    value={formFields.password}
                    onChange={handleChange}
                    title="Please enter your password. Minimum length 8 symbols"
                    placeholder="Password"
                    min-length="8"
                    required
                />
                <button
                    className={s.pswdVisBtn}
                    onClick={changePswdVisibility}
                    type="button"
                >
                    <img
                        className={s.pswdBtnImg}
                        src={isPswdShown ? eyeOpened : eyeClosed}
                        alt="Button show/hide password"
                    />
                </button>
            </label>
            {errorLoginMessage && (
                <p className={s.errorMessage}>Error: {errorLoginMessage} </p>
            )}
            <div className={s.btnCont}>
                <button onClick={onLoginHandle} className={s.formBtn}>
                    LOG IN
                </button>
                <button className={s.formBtn} onClick={onRegisterHandle}>
                    REGISTRATION
                </button>
            </div>
        </form>
    );
}
