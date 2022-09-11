import s from '../BalanceTable/BalanceTable.module.css';

export default function Table() {
    const elements = (
        <tr className={s.tableBodyTR}>
            <td className={s.tableBodyEmpty}></td>
            <td className={s.tableBodyDate}>05.09.2019</td>
            <td className={s.tableBodyDescription}>
                Metro (Lorem ipsum dolor sit...
            </td>
            <td className={s.tableBodyCategory}>Transport</td>
            <td className={s.tableBodySum}>- 30.00 грн.</td>
            <td className={s.tableBodyDelete}>
                <button type="button" className={s.btnDelete}></button>
            </td>
        </tr>
    );
    return (
        <div className={s.scrollTable}>
            <table>
                <thead className={s.tableHead}>
                    <tr>
                        <th className={s.tableTheadEmpty}></th>
                        <th className={s.tableTheadDate}>DATE</th>
                        <th className={s.tableTheadDescription}>DESCRIPTION</th>
                        <th className={s.tableTheadCategory}>CATEGORY</th>
                        <th className={s.tableTheadSum}>SUM</th>
                        <th className={s.tableTheadDelete}></th>
                    </tr>
                </thead>
            </table>
            <div className={s.scrollTableBody}>
                <table>
                    <tbody>
                        {elements}
                        {elements}
                        {elements}
                        {elements}
                        {elements}
                        {elements}
                        {elements}
                        {elements}
                        {elements}
                        {elements}
                        {elements}
                        {elements}
                        {elements}
                        {elements}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
