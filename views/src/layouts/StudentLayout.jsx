import { useState } from 'react';

import BackToTop from '@/components/BackToTop';
import StudentSidebar from '@/components/StudentSidebar';

const StudentLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex items-start'>
      <StudentSidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />

      <div
        className={
          isOpen
            ? 'w-full lg:w-[calc(100%-15rem)]'
            : 'w-full lg:w-[calc(100%-5rem)]'
        }
      >
        <main>{children}</main>

        <BackToTop />
      </div>
    </div>
  );
};

export default StudentLayout;
