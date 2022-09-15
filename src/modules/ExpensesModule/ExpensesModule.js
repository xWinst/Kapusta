import {
    BalanceMobileTable,
    AddMobileNavLink,
    BalanceNavLinks,
    BalanceSummary,
    BalanceTable,
    BalanceFormInput,
} from 'components';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import s from '../ExpensesModule/ExpensesModule.module.css';

export default function ExpensesModule() {
    const { width } = useWindowDimensions();
    return (
        <>
            <AddMobileNavLink />
            <BalanceMobileTable />
            <BalanceNavLinks />
            <div className={s.divBackgoundMobile}>
                <BalanceFormInput />
                <div className={s.flex}>
                    <BalanceTable />
                    {width > 1279 && <BalanceSummary />}
                </div>
            </div>
            {width > 767 && width < 1280 && <BalanceSummary />}
        </>
    );
}
