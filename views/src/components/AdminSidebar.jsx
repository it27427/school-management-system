import Logo from '@/assets/images/logo/logo.webp';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <aside className='sticky top-0 z-50 min-h-screen bg-sky-900'>
      <div className='flex flex-col gap-6'>
        <header>
          <Link
            to='/admin/dashboard'
            className='flex items-center justify-center w-28 h-11'
          >
            <img src={Logo} alt='BRAND-LOGO' />
          </Link>
        </header>
      </div>
    </aside>
  );
};

export default AdminSidebar;
