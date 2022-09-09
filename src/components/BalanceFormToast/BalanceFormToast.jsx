import s from './BalanceFormToast.module.css';
import { ReactComponent as CloseIcon } from 'images/close.svg';
import PropTypes from 'prop-types';

const Toast = ({ onClose }) => {
  return (
    <div className={s.Toast}>
      <div className={s.triangle} />
      <div className={s.rectangle}>
        <button className={s.button} type={'button'} onClick={onClose}>
          <CloseIcon className={s.icon} />
        </button>
        <p className={s.text}>
          Hello! To get started, enter the current balance of your account!
        </p>
        <p className={s.textDown}>
          You can't spend money until you have it &#128521
        </p>
      </div>
    </div>
  );
};

Toast.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Toast;
