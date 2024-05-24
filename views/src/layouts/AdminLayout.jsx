import AdminList from '@/components/AdminList';
import Button from '@/components/Button';

const AdminLayout = ({ children }) => {
  const test = () => {
    console.log('test');
  };

  return (
    <div className='flex items-start'>
      <aside className='sticky top-0 z-50 min-h-screen bg-sky-950 hidden lg:block'>
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
              className='flex items-center justify-center w-12 h-12'
            >
              <img src={Icon} alt='BRAND-ICON' className='w-full h-full' />
            </Link>
          )}

          <Button onClick={test}>Test</Button>
        </header>

        <div className='overflow-y-auto max-h-[calc(100% - 4rem)]'>
          <AdminList />
        </div>
      </aside>

      <div className='w-full lg:w-5/6'>
        <main className='p-4'>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
