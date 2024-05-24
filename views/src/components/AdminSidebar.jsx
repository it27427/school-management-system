import { Link } from 'react-router-dom';

import Icon from '@/assets/images/logo/icon.png';
import Logo from '@/assets/images/logo/logo.webp';
import Button from '@/components/Button';
import AdminList from './AdminList';

const AdminSidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <aside
      className={
        isOpen
          ? 'sticky top-0 z-50 min-h-screen bg-sky-950 hidden lg:block w-[15rem]'
          : 'sticky top-0 z-50 min-h-screen bg-sky-950 hidden lg:block w-24'
      }
    >
      <header className='w-full h-16 flex items-center justify-center sticky top-0 bg-sky-950 mb-2'>
        {isOpen ? (
          <Link
            to='/admin/dashboard'
            className='flex items-center justify-center w-28 h-14'
          >
            <img src={Logo} alt='BRAND-LOGO' className='w-full h-full' />
          </Link>
        ) : (
          <Link
            to='/admin/dashboard'
            className='flex items-center justify-center w-10 h-10'
          >
            <img src={Icon} alt='BRAND-ICON' className='w-full h-full' />
          </Link>
        )}

        <Button
          onClick={toggleSidebar}
          className={
            isOpen
              ? 'absolute top-1/2 -translate-y-1/2 right-0 z-50 transition rotate-0'
              : 'absolute top-1/2 -translate-y-1/2 right-0 z-50 transition rotate-180'
          }
        >
          <i className='ri-arrow-left-circle-line text-sky-400 text-2xl'></i>
        </Button>
      </header>

      <div className='overflow-x-hidden overflow-y-auto max-h-[calc(100% - 4rem)]'>
        <AdminList isOpen={isOpen} />
      </div>
    </aside>
  );
};

export default AdminSidebar;
