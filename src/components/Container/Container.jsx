// import PropTypes from 'prop-types';
import s from './Container.module.css';
// import backOneCabage from '../../images/backOneCabage.svg';

export default function Container({ children, location }) {
  const locationExample = '/loginNo';

  const containerClass =
    locationExample === '/login' || locationExample === '/register'
      ? s.containerLogedOut
      : s.containerLogedIn;

  return <div className={containerClass}>{children}</div>;
}

// Container.propTypes = {
//   children: PropTypes.element,
//   location: PropTypes.string,
// };
