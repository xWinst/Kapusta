import s from './BalanceForm.module.css';

import Toast from 'components/BalanceFormToast/BalanceFormToast';

const BalanceForm = () => {
    return (
        <div className={s.Container}>
            <p className={s.Title}>Balance:</p>
            <form
                className={s.Box}
                // onSubmit={handleSubmit}
            >
                {/* // {canChange ? ( */}
                <input
                    className={s.Value}
                    // value={balanceInput}
                    placeholder={'0 UAH'}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // onFocus={handleFocus}
                />
                {/* // ) : ( */}
                {/* <span className={s.Value}>
          {balanceInput}
        </span> */}
                {/* // )} */}
                <button
                    type={'submit'}
                    className={s.ButtonDisabled}
                    // {canChange ? s.ButtonEnabled : s.ButtonDisabled}
                >
                    CONFIRM
                </button>
                <Toast onClose={() => {}} />
                {/* ------------------------ */}
                {/* {isToastShown && (
        <Toast
        onClose={() => setIsToastShown(false)}
        />
        )} */}
                {/* ------------------------- */}
            </form>
        </div>
    );
};

export default BalanceForm;
