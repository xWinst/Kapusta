import {
    BalanceMobileTable,
    AddMobileNavLink,
    BalanceNavLinks,
    BalanceSummary,
    BalanceTable,
    BalanceFormInput,
} from 'components';
import s from '../ExpensesModule/ExpensesModule.module.css';

export default function ExpensesModule() {
    return (
        <>
            <AddMobileNavLink />
            <BalanceMobileTable />
            <BalanceNavLinks />
            <div className={s.divBackgoundMobile}>
                <BalanceFormInput />
                <div className={s.flex}>
                    <BalanceTable />
                    <BalanceSummary />
                </div>
            </div>
        </>
    );
}
