import { NavLink } from 'react-router-dom';

import s from '../BalanceFormsLink/BalanceFormsLink.module.css';

export default function BalanceFormsLink() {
  const getLink = ({ isActive }) => {
    return !isActive ? s.link : s.linkActive;
  };

  return (
    <div className={s.linkDiv}>
      <NavLink to={'/'} className={getLink}>
        Expenses
      </NavLink>
      <NavLink to={'/'} className={getLink}>
        Income
      </NavLink>
    </div>
  );
}
