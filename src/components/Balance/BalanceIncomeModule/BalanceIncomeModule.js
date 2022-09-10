import BalanceForm from '../BalanceForm/BalanceForm';
import BalanceTable from '../BalanceTable/BalanceTable';
import BalanceSummary from '../BalanceSummary/BalanceSummary';
import BalanceFormsLink from '../BalanceFormsLink/BalanceFormsLink';

import s from '../BalanceIncomeModule/BalanceIncomeModule.module.css';

export default function BalanceIncomeModule() {
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
