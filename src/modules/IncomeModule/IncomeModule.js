import {
    BalanceMobileTable,
    AddMobileNavLink,
    BalanceNavLinks,
    BalanceSummary,
    BalanceTable,
    BalanceFormInput,
} from 'components';
import s from './IncomeModule.module.css';

export default function IncomeModule() {
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
