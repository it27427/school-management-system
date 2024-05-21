import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo/logo.webp';

const BrandLogo = () => {
  return (
    <Link to='/' className='flex items-center justify-center w-28 h-11'>
      <img src={Logo} alt='BRAND-LOGO' />
    </Link>
  );
};

export default BrandLogo;
