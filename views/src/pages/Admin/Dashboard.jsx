import AdminLayout from '@/layouts/AdminLayout';
import Announcement from '@/pages/Admin/Announcement';
import EventCalendar from '@/pages/Admin/EventCalendar';
import Performance from '@/pages/Admin/Performance';

const Dashboard = () => {
  return (
    <AdminLayout>
      <EventCalendar />
      <Announcement />
      <Performance />
    </AdminLayout>
  );
};

export default Dashboard;
