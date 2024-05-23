import AdminSidebar from '@/components/AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className='flex items-start'>
      <div className='w-1/6 hidden lg:block'>
        <AdminSidebar />
      </div>

      <div className='w-full lg:w-5/6'>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
