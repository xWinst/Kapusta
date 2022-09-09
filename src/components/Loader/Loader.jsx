import icons from 'images/icons.svg';
import s from './Loader.module.css';

const Loader = () => {
    return (
        <div className={s.container}>
            <svg className={s.img}>
                <use href={`${icons}#load`} />
            </svg>
        </div>
    );
};

export default Loader;
