import { useState } from 'react';

import AdminLayout from '@/layouts/AdminLayout';

import AddAnnouncement from '@/components/AddAnnouncement';
import AnnouncementList from '@/components/AnnouncementList';

const AdminAnnouncement = () => {
  const [announcement, setAnnouncement] = useState('');

  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    console.log('Announcement Added', announcement);
  };

  return (
    <AdminLayout>
      <div className='grid gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-xl uppercase'>Add Announcement</h2>

          <AddAnnouncement
            announcement={announcement}
            setAnnouncement={setAnnouncement}
            handleAddAnnouncement={handleAddAnnouncement}
          />
        </div>

        <AnnouncementList />
      </div>
    </AdminLayout>
  );
};

export default AdminAnnouncement;
