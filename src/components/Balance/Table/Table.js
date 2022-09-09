import s from '../Table/Table.module.css';

export default function Table() {
  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr>
          <th className={s.tableThFirst}>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Sum</th>
          <th className={s.tableThLast}></th>
        </tr>
      </thead>

      <tbody>
        <tr className={s.balanceTableTr}>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
        </tr>
        <tr className={s.balanceTableTr}>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
        </tr>
        <tr className={s.balanceTableTr}>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
        </tr>
        <tr className={s.balanceTableTr}>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
        </tr>
        <tr className={s.balanceTableTr}>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
          <td className={s.balanceTabeTd}></td>
        </tr>
      </tbody>
    </table>
  );
}
