import BrandLogo from './BrandLogo';
import DesktopList from './DesktopList';
import AuthList from './AuthList';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <BrandLogo />

      <div className='hidden lg:flex items-center'>
        <DesktopList />
      </div>

      <div className='hidden lg:flex items-center'>
        <AuthList />
      </div>
    </nav>
  );
};

export default Navbar;
