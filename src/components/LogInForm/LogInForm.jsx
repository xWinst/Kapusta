import GoogleLogo from '../../images/googleLogo.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './LogInForm.module.css';
import { authOperations } from 'redux/auth';

export default function LogInForm() {
    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

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
                    value={formFields.email}
                    onChange={handleChange}
                    title="Please enter valid email address, for example  'example@gmail.com'"
                    placeholder="your@email.com"
                    min-length="6"
                    required
                />
            </label>
            <label className={s.formLabel}>
                Password:
                <input
                    className={s.formInput}
                    type="password"
                    name="password"
                    value={formFields.password}
                    onChange={handleChange}
                    title="Please enter your password. Minimum length 8 symbols"
                    placeholder="Password"
                    min-length="8"
                    required
                />
            </label>
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
