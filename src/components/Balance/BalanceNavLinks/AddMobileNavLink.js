import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import s from './AddMobileNavLink.module.css';

export default function AddMobileNavLink() {
    const { pathname } = useLocation();
    const getLink = ({ isActive }) => {
        return !isActive ? s.link : s.linkActive;
    };

    return (
        <>
            {pathname === '/expenses' && (
                <NavLink to={'/expenses-input-mobile'} className={getLink}>
                    ADD EXPENSES
                </NavLink>
            )}
            {pathname === '/income' && (
                <NavLink to={'/incomes-input-mobile'} className={getLink}>
                    ADD INCOMES
                </NavLink>
            )}
        </>
    );
}
