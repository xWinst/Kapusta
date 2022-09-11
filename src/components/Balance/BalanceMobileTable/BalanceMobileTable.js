import s from '../BalanceMobileTable/BalanceMobileTable.module.css';

export default function BalanceMobileTable() {
    const elements = (
        <div className={s.mobileTableDiv}>
            <h2 className={s.title}>Метро</h2>
            <ul className={s.list}>
                <div className={s.divTextFlex}>
                    <p className={s.divTextFlex__text}>05.09.2019</p>
                    <p className={s.divTextFlex__text}>Transport</p>
                </div>
                <div className={s.divSumAndButtonFlex}>
                    <p className={s.divSumAndButtonFlex__sum}> 30.00 грн.</p>
                    <button type="button" className={s.btnDelete}></button>
                </div>
            </ul>
        </div>
    );
    return (
        <>
            <div className={s.tableContainer}>
                {elements}
                {elements}
                {elements}
            </div>
        </>
    );
}
