import s from './FlipButtons.module.css';
import svg from '../../images/sprite.svg';

const FlipButtons = ({ children }) => {
    return (
        <div className={s.container}>
            <button className={s.flipbutton}>
                <svg className={s.flipbutton__icon} width="5" height="10">
                    <use href={`${svg}#icon-arrowSmallLeft`}></use>
                </svg>
            </button>
            {children}
            <button className={s.flipbutton}>
                <svg className={s.flipbutton__icon} width="5" height="10">
                    <use href={`${svg}#icon-arrowSmallRight`}></use>
                </svg>
            </button>
        </div>
    );
};

export default FlipButtons;
