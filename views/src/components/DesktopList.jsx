import { NavLink } from 'react-router-dom';

const DesktopList = () => {
  return (
    <ul>
      <li>
        <NavLink to='/about'>About Us</NavLink>
      </li>
      <li>
        <NavLink to='/products'>Products</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact</NavLink>
      </li>
    </ul>
  );
};

export default DesktopList;
