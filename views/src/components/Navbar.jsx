import BrandLogo from './BrandLogo';
import DesktopList from './DesktopList';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <BrandLogo />

      <div className='hidden lg:flex items-center'>
        <DesktopList />
      </div>
    </nav>
  );
};

export default Navbar;
