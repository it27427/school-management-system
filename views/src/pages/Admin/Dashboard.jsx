import DashboardLayout from '@/layouts/DashboardLayout';
import Announcement from '@/pages/Admin/Announcement';
import EventCalendar from '@/pages/Admin/EventCalendar';
import Performance from '@/pages/Admin/Performance';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <EventCalendar />
      <Announcement />
      <Performance />
    </DashboardLayout>
  );
};

export default Dashboard;
