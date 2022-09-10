import BalanceForm from '../BalanceForm/BalanceForm';
import BalanceTable from '../BalanceTable/BalanceTable';
import BalanceSummary from '../BalanceSummary/BalanceSummary';
import BalanceFormsLink from '../BalanceFormsLink/BalanceFormsLink';

import s from '../BalanceExpensesModule/BalanceExpensesModule.module.css';

export default function BalanceExpensesModule() {
    return (
        <>
            <BalanceFormsLink />

            <div className={s.divBackgoundMobile}>
                <BalanceForm />
                <div className={s.flex}>
                    <BalanceTable />

                    <BalanceSummary />
                </div>
            </div>
        </>
    );
}
