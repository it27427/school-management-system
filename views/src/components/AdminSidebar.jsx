import Logo from '@/assets/images/logo/logo.webp';
import { Link } from 'react-router-dom';
import AdminList from './AdminList';

const AdminSidebar = () => {
  return (
    <aside className='sticky top-0 z-50 min-h-screen bg-sky-950'>
      <header className='w-full h-16 flex items-center justify-center sticky top-0 bg-sky-950 mb-2'>
        <Link
          to='/admin/dashboard'
          className='flex items-center justify-center w-28 h-14'
        >
          <img src={Logo} alt='BRAND-LOGO' className='w-full h-full' />
        </Link>
      </header>

      <div className='overflow-y-auto max-h-[calc(100% - 4rem)]'>
        <AdminList />
      </div>
    </aside>
  );
};

export default AdminSidebar;
