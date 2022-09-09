import s from './LogOutModal.module.css';
import PropTypes from 'prop-types';

const LogOutModal = ({ text }) => {
  return (
    <div className={s.LogOutModal__container}>
      <svg className={s.LogOutModal__close} xmlns="http://www.w3.org/2000/svg">
        <path d="m1 1 12 12M1 13 13 1" />
      </svg>
      <div className={s.LogOutModal__group}>
        <span className={s.LogOutModal__text}>{text}</span>
        <button className={s.LogOutModal__btn} type="button">
          Да
        </button>
        <button className={s.LogOutModal__btn} type="button">
          Нет
        </button>
      </div>
    </div>
  );
};

LogOutModal.propTypes = {
  text: PropTypes.string,
};
export default LogOutModal;
