import { useState } from 'react';

import BackToTop from '@/components/BackToTop';
import TeacherSidebar from '@/components/TeacherSidebar';

const TeacherLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex items-start'>
      <TeacherSidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />

      <div
        className={
          isOpen
            ? 'w-full lg:w-[calc(100%-15rem)]'
            : 'w-full lg:w-[calc(100%-5rem)]'
        }
      >
        <div className='flex flex-col gap-6'>
          <DashboardHeader />
          <main className='min-h-screen p-4'>{children}</main>
          <DashboardFooter />
        </div>

        <BackToTop />
      </div>
    </div>
  );
};

export default TeacherLayout;
