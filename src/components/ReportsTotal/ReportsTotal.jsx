import s from './ReportsTotal.module.css';

const ReportsTotal = () => {
    return (
        <ul className={s.total}>
            <li className={s.total__item}>
                <h3 className={s.total__title}>Expenses:</h3>
                <p className={s.total__expenses}>- 18 000.00 грн.</p>
            </li>
            <li className={s.total__item}>
                <h3 className={s.total__title}>Income:</h3>
                <p className={s.total__income}>+ 45 000.00 грн.</p>
            </li>
        </ul>
    );
};

export { ReportsTotal };
