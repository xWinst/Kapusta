import { Link } from 'react-router-dom';

import s from './ButtonBack.module.css';
import svg from '../../images/sprite.svg';

const ButtonBack = () => {
    return (
        <Link to="/expenses" className={s.back}>
            <svg className={s.back__icon} width="24" height="24">
                <use href={`${svg}#icon-ArrowToGoBack`}></use>
            </svg>
            <span className={s.back__text}>Main page</span>
        </Link>
    );
};

export default ButtonBack;
