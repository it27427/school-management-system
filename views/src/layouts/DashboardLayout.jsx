import AdminSidebar from '@/components/AdminSidebar';
import StudentSidebar from '@/components/StudentSidebar';
import TeacherSidebar from '@/components/TeacherSidebar';

const DashboardLayout = ({ children }) => {
  return (
    <>
      {location.pathname === '/admin/dashboard' && <AdminSidebar />}
      {location.pathname === '/student/dashboard' && <StudentSidebar />}
      {location.pathname === '/teacher/dashboard' && <TeacherSidebar />}

      <main>{children}</main>
    </>
  );
};

export default DashboardLayout;
