import s from '../BalanceTable/BalanceTable.module.css';

export default function Table() {
    return (
        <table className={s.table}>
            <thead className={s.tableHead}>
                <tr>
                    <th className={s.tableThFirst}>DATE</th>
                    <th className={s.tableThSecond}>DESCRIPTION</th>
                    <th className={s.tableThThird}>CATEGORY</th>
                    <th className={s.tableThFourth}>SUM</th>
                    <th className={s.tableThLast}></th>
                </tr>
            </thead>

            <tbody>
                <tr className={s.balanceTableTr}>
                    <td className={s.balanceTableTd}>05.09.2019</td>
                    <td className={s.balanceTableTd}>
                        Metro (Lorem ipsum dolor sit...
                    </td>
                    <td className={s.balanceTableTd}>Transport</td>
                    <td className={s.balanceTableTd}>
                        <span className={s.balanceTableTdSpan}>
                            - 30.00 грн.
                        </span>
                    </td>
                    <td className={s.balanceTableTd}>
                        <button type="button" className={s.btnDelete}></button>
                    </td>
                </tr>
                <tr className={s.balanceTableTr}>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                </tr>
                <tr className={s.balanceTableTr}>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                </tr>
                <tr className={s.balanceTableTr}>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                </tr>
                <tr className={s.balanceTableTr}>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                    <td className={s.balanceTableTd}></td>
                </tr>
            </tbody>
        </table>
    );
}
