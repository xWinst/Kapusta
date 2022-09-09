import LogOutLogo from '../../images/logout-mobile.svg';
import s from './UserMenu.module.css';
export default function UserMenu() {
  return (
    <div className={s.userMenu}>
      <div className={s.userName__cont}>
        <h2 className={s.userName__letter}>U</h2>
      </div>
      <h2 className={s.userName__full}>User Name</h2>
      <button className={s.btnExitMob} type="button">
        <img src={LogOutLogo} alt="Log out" />
      </button>
      <button className={s.btnExit} type="button">
        Exit
      </button>
    </div>
  );
}
