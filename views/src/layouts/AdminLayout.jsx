import { useState } from 'react';

import AdminSidebar from '@/components/AdminSidebar';

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
            : 'w-full lg:w-[calc(100%-6rem)]'
        }
      >
        <main className='p-4'>{children}</main>

        <BackToTop />
      </div>
    </div>
  );
};

export default AdminLayout;
