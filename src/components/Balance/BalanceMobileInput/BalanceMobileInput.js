import Calendar from 'components/Calendar/Calendar';
import Button from 'components/Button/Button';
import s from '../BalanceMobileInput/BalanceMobileInput.module.css';
import { useNavigate } from 'react-router-dom';
import arrow from '../../../images/ArrowToGoBack.svg';

export default function BalanceMobileInput() {
    const navigate = useNavigate();
    const goBackButton = () => {
        navigate(-1);
    };
    return (
        <form className={s.form} name="signup_form">
            <Calendar dateHandle={() => {}} />
            <div className={s.divFlexCalendarAndArrow}>
                <button
                    className={s.goBackButton}
                    type="button"
                    onClick={goBackButton}
                >
                    <img src={arrow} alt="arrow" width={24} height={24}></img>
                </button>
            </div>

            <label className={s.formLabelProductDescription}>
                <input
                    className={s.formInputProductDescription}
                    type="text"
                    name="text"
                    placeholder="Product description"
                />
            </label>

            <label>
                <select className={s.formInputProductCategory}>
                    <option disabled selected>
                        Product category
                    </option>
                    <option>Transport</option>
                    <option>Products</option>
                    <option>Health</option>
                    <option>Alcohol</option>
                    <option>Entertainment</option>
                    <option>Housing</option>
                    <option>Technique</option>
                    <option>Communal, communication</option>
                    <option>Sports, hobbies</option>
                    <option>Education</option>
                    <option>Other</option>
                </select>
            </label>
            <label className={s.formLabelCalc}>
                <input
                    className={s.formInputCalc}
                    name="calc"
                    type="number"
                    placeholder="0,00"
                    step=".01"
                />
            </label>

            <div className={s.formButtonsDiv}>
                <Button type={'button'} buttonName={'input'} title={'Input'} />
                <Button type={'button'} buttonName={'clear'} title={'Clear'} />
            </div>
        </form>
    );
}
