import { NavLink } from 'react-router-dom';

const DesktopList = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? 'text-sky-300 font-bold uppercase text-sm'
      : 'text-slate-100 font-medium text-sm uppercase transition hover:text-sky-300';

  return (
    <ul className='flex items-center gap-5'>
      <li>
        <NavLink to='/' className={linkClasses}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' className={linkClasses}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to='/products' className={linkClasses}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to='/contact' className={linkClasses}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default DesktopList;
