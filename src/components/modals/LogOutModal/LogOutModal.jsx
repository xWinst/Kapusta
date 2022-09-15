import s from './LogOutModal.module.css';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
const LogOutModal = ({ text, onClose, onConfirm }) => {
    return (
        <div className={s.LogOutModal__container}>
            <svg
                onClick={onClose}
                className={s.LogOutModal__close}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="m1 1 12 12M1 13 13 1" />
            </svg>
            <div className={s.LogOutModal__group}>
                <span className={s.LogOutModal__text}>{text}</span>
                <Button onClick={onConfirm} type="button" title="Yes" />
                <Button onClick={onClose} type="button" title="No" />
            </div>
        </div>
    );
};

LogOutModal.propTypes = {
    text: PropTypes.string,
};
export default LogOutModal;
