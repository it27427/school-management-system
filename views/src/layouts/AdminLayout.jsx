import { useState } from 'react';

import AdminSidebar from '@/components/AdminSidebar';
import BackToTop from '@/components/BackToTop';

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex items-start'>
      <AdminSidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />

      <div
        className={
          isOpen
            ? 'w-full lg:w-[calc(100%-15rem)]'
            : 'w-full lg:w-[calc(100%-5rem)]'
        }
      >
        <div className='flex flex-col gap-6'>
          <header className='sticky top-0 z-50 bg-primary'>Admin Header</header>
          <main className='min-h-screen p-4'>{children}</main>
          <footer>Admin Footer</footer>
        </div>

        <BackToTop />
      </div>
    </div>
  );
};

export default AdminLayout;
