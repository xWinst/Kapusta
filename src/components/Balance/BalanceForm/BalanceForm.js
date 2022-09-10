// import Calendar from 'components/Calendar/Calendar';
import Button from 'components/Button/Button';
import s from '../BalanceForm/BalanceForm.module.css';

export default function Form() {
    return (
        <form className={s.form} name="signup_form">
            <label className={s.labelData}>
                <input
                    className={s.formInputDate}
                    type="date"
                    min="1920-01-01"
                    max="2020-01-01"
                />
            </label>
            {/* <Calendar /> */}
            <label className={s.formLabelProductDescription}>
                <input
                    className={s.formInputProductDescription}
                    type="text"
                    name="text"
                    placeholder="Product description"
                />
            </label>

            <label>
                <input
                    className={s.formInputProductCategory}
                    list="datalist"
                    name="fav"
                    id="fav"
                    placeholder="Product category"
                />
                <datalist id="datalist" name="size">
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
                </datalist>
            </label>
            <label className={s.formLabelCalc}>
                <input
                    className={s.formInputCalc}
                    name="calc"
                    type="number"
                    placeholder="0,00"
                    step=".01"
                ></input>
            </label>

            <div className={s.formButtonsDiv}>
                <Button type={'button'} buttonName={'input'} title={'Input'} />
                <Button type={'button'} buttonName={'clear'} title={'Clear'} />
            </div>
        </form>
    );
}
