import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.container}>
      Header Header
      <NavLink to="/">Home</NavLink>
      <NavLink to="expenses">expenses</NavLink>
      <NavLink to="income">income</NavLink>
      <NavLink to="reports">reports</NavLink>
    </div>
  );
};

export default Header;
