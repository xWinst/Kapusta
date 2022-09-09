import BalanceForm from './BalanceForm/BalanceForm';
import Table from '../Balance/Table/Table';
import BalanceSummary from './BalanceSummary/BalanceSummary';
import BalanceFormsLink from './BalanceFormsLink/BalanceFormsLink';

import s from '../Balance/Balance.module.css';

export default function Balance() {
  return (
    <section className={s.section}>
      <BalanceFormsLink />
      <BalanceForm />
      <div className={s.flex}>
        <Table />
        <BalanceSummary />
      </div>
    </section>
  );
}
