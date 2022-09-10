import { NavLink } from 'react-router-dom';

import s from './AddMobileNavLink.module.css';

export default function AddMobileNavLink() {
    const getLink = ({ isActive }) => {
        return !isActive ? s.link : s.linkActive;
    };

    return (
        <NavLink to={'/balance-input-mobile'} className={getLink}>
            ADD
        </NavLink>
    );
}
