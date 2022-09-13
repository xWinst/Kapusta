import s from './ReportsTotal.module.css';

const ReportsTotal = ({TotalExpense,TotalIncome}) => {
    return (
        <ul className={s.total}>
            <li className={s.total__item}>
                <h3 className={s.total__title}>Expenses:</h3>
                <p className={s.total__expenses}>- {TotalExpense} грн.</p>
            </li>
            <li className={s.total__item}>
                <h3 className={s.total__title}>Income:</h3>
                <p className={s.total__income}>+ {TotalIncome} грн.</p>
            </li>
        </ul>
    );
};

export default ReportsTotal;
