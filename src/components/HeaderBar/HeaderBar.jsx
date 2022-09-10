import KapustaLogo from '../../images/logo.svg';
import UserMenu from 'components/UserMenu/UserMenu';
import s from './HeaderBar.module.css';

export default function HeaderBar() {
    return (
        <div className={s.headerBar}>
            <img
                className={s.logo}
                src={KapustaLogo}
                alt="Kapusta-logo"
                height="31"
                width="90"
            />
            <UserMenu />
        </div>
    );
}
