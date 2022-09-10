import s from '../BalanceSummary/BalanceSummary.module.css';

export default function BalanceSummary() {
    return (
        <ul className={s.list}>
            <li className={s.titleItem}>
                <h2 className={s.title}>Summary</h2>
            </li>
            <li className={s.item}>
                <p className={s.text}>November</p>
                <p>10,000</p>
            </li>
            <li className={s.item}>
                <p className={s.text}>November</p>
                <p>10,000</p>
            </li>
            <li className={s.item}>
                <p className={s.text}>November</p>
                <p>10,000</p>
            </li>
            <li className={s.item}>
                <p className={s.text}>November</p>
                <p>10,000</p>
            </li>
            <li className={s.item}>
                <p className={s.text}>November</p>
                <p>10,000</p>
            </li>
        </ul>
    );
}
