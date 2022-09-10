import s from '../BalanceMobileTable/BalanceMobileTable.module.css';

export default function BalanceMobileTable() {
    return (
        <div className={s.tableContainer}>
            <div className={s.mobileTableDiv}>
                <h2 className={s.title}>Метро</h2>
                <ul className={s.list}>
                    <div className={s.textFlex}>
                        <p className={s.text}>05.09.2019</p>
                        <p className={s.text}>Transport</p>
                    </div>
                    <div className={s.flex}>
                        <p className={s.textNumber}> 30.00 грн.</p>
                        <button type="button" className={s.btnDelete}></button>
                    </div>
                </ul>
            </div>
            <div className={s.mobileTableDiv}>
                <h2 className={s.title}>Метро</h2>
                <ul className={s.list}>
                    <div className={s.textFlex}>
                        <p className={s.text}>05.09.2019</p>
                        <p className={s.text}>Transport</p>
                    </div>
                    <div className={s.flex}>
                        <p className={s.textNumber}> 30.00 грн.</p>
                        <button type="button" className={s.btnDelete}></button>
                    </div>
                </ul>
            </div>
            <div className={s.mobileTableDiv}>
                <h2 className={s.title}>Метро</h2>
                <ul className={s.list}>
                    <div className={s.textFlex}>
                        <p className={s.text}>05.09.2019</p>
                        <p className={s.text}>Transport</p>
                    </div>
                    <div className={s.flex}>
                        <p className={s.textNumber}> 30.00 грн.</p>
                        <button type="button" className={s.btnDelete}></button>
                    </div>
                </ul>
            </div>
            <div className={s.mobileTableDiv}>
                <h2 className={s.title}>Метро</h2>
                <ul className={s.list}>
                    <div className={s.textFlex}>
                        <p className={s.text}>05.09.2019</p>
                        <p className={s.text}>Transport</p>
                    </div>
                    <div className={s.flex}>
                        <p className={s.textNumber}> 30.00 грн.</p>
                        <button type="button" className={s.btnDelete}></button>
                    </div>
                </ul>
            </div>
        </div>
    );
}
