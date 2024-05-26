import { useState } from 'react';

import AdminLayout from '@/layouts/AdminLayout';

import Calendar from '@/components/Calendar';

const AdminEventCalendar = () => {
  const [] = useState('');

  return (
    <AdminLayout>
      <Calendar />
    </AdminLayout>
  );
};

export default AdminEventCalendar;
