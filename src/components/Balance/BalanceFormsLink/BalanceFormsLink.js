import { NavLink } from 'react-router-dom';
import { items } from './items';

import s from '../BalanceFormsLink/BalanceFormsLink.module.css';

export default function BalanceFormsLink() {
    const getLink = ({ isActive }) => {
        return !isActive ? s.link : s.linkActive;
    };

    const elements = items.map(({ id, to, text }) => (
        <NavLink key={id} to={to} className={getLink}>
            {text}
        </NavLink>
    ));

    return <div className={s.linkDiv}>{elements}</div>;
}
