import LogOutLogo from '../../images/logout-mobile.svg';
import { useSelector } from 'react-redux';

import s from './UserMenu.module.css';
export default function UserMenu({ onExitBtn }) {
    const emailFromState = useSelector(state => state.auth.userData.email);

    return (
        <div className={s.userMenu}>
            <div className={s.userName__cont}>
                <h2 className={s.userName__letter}>
                    {emailFromState?.slice(0, 1).toUpperCase()}
                </h2>
            </div>
            <h2 className={s.userName__full}>
                {emailFromState?.slice(0, emailFromState.indexOf('@'))}
            </h2>
            <button onClick={onExitBtn} className={s.btnExitMob} type="button">
                <img src={LogOutLogo} alt="Log out" />
            </button>
            <button onClick={onExitBtn} className={s.btnExit} type="button">
                Exit
            </button>
        </div>
    );
}
