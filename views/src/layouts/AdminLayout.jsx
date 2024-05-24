import AdminSidebar from '@/components/AdminSidebar';

const AdminLayout = ({ children }) => {
  const test = () => {
    console.log('test');
  };

  return (
    <div className='flex items-start'>
      <div className='w-1/6 hidden lg:block'>
        <AdminSidebar test={test} />
      </div>

      <div className='w-full lg:w-5/6'>
        <main className='p-4'>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
