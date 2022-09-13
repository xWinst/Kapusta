import KapustaLogo from '../../images/logo.svg';
import UserMenu from 'components/UserMenu/UserMenu';
import { authOperations, authSelectors } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './Header.module.css';
import LogOutModal from 'components/modals/LogOutModal/LogOutModal';
import { useState } from 'react';

export default function Header() {
    const dispatch = useDispatch();
    const isLoggedInFromStore = useSelector(authSelectors.getIsLoggedIn);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onExitBtn = () => {
        setIsModalOpen(true);
    };
    const onCloseBtn = () => {
        setIsModalOpen(false);
    };

    const confirmHandle = () => {
        dispatch(authOperations.logOut());
        setIsModalOpen(false);
    };

    return (
        <>
            <header className={s.headerBar}>
                <Link to="/">
                    <img
                        className={s.logo}
                        src={KapustaLogo}
                        alt="Kapusta-logo"
                        height="31"
                        width="90"
                    />
                </Link>
                {isLoggedInFromStore && <UserMenu onExitBtn={onExitBtn} />}
            </header>
            {isModalOpen && (
                <div className={s.modalLogoutWrap}>
                    <LogOutModal
                        text="Do you really want to leave?"
                        onClose={onCloseBtn}
                        onConfirm={confirmHandle}
                    />
                </div>
            )}
        </>
    );
}
