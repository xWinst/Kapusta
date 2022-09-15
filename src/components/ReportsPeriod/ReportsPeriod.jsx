
import svg from '../../images/sprite.svg';
import s from './ReportsPeriod.module.css';

const ReportsPeriod = ({ date, handleIncrementDate, handleDecrementDate }) => {
    let month = '';
    switch (date) {
        case 1:
            month = 'JANUARY';
            break;
        case 2:
            month = 'FEBRUARY';
            break;
        case 3:
            month = 'MARCH';
            break;
        case 4:
            month = 'APRIL';
            break;
        case 5:
            month = 'MAY';
            break;
        case 6:
            month = 'JUNE';
            break;
        case 7:
            month = 'JULY';
            break;
        case 8:
            month = 'AUGUST';
            break;
        case 9:
            month = 'SEPTEMBER';
            break;
        case 10:
            month = 'OCTOBER';
            break;
        case 11:
            month = 'NOVEMBER';
            break;
        case 12:
            month = 'DECEMBER';
            break;
        default:
            console.log('Invalid subscription type');
    }

    return (
        <div className={s.period}>
            <p className={s.period__text}>Current period:</p>
            <div className={s.container}>
                <button onClick={handleDecrementDate} className={s.flipbutton}>
                    <svg className={s.flipbutton__icon} width="5" height="10">
                        <use href={`${svg}#icon-arrowSmallLeft`}></use>
                    </svg>
                </button>
                <h2 className={s.period__title}>{month} 2022</h2>
                <button onClick={handleIncrementDate} className={s.flipbutton}>
                    <svg className={s.flipbutton__icon} width="5" height="10">
                        <use href={`${svg}#icon-arrowSmallRight`}></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ReportsPeriod;
