import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ChooseUser from '@/pages/Auth/ChooseUser';
import HomePage from '@/pages/HomePage';

/* AUTHENTICATIONS */
import AdminLogin from '@/pages/Auth/AdminLogin';
import AdminRegister from '@/pages/Auth/AdminRegister';
import StudentLogin from '@/pages/Auth/StudentLogin';
import TeacherLogin from '@/pages/Auth/TeacherLogin';

/* DASHBOARDS */
import AdminDashboard from '@/pages/Admin/Dashboard';
import StudentDashboard from '@/pages/Students/Dashboard';
import TeacherDashboard from '@/pages/Teachers/Dashboard';

/* ADMIN */
import AdminAnnouncement from '@/pages/Admin/Announcement';
import AdminAssignment from '@/pages/Admin/Assignment';
import AdminAttendance from '@/pages/Admin/Attendance';
import AdminClasses from '@/pages/Admin/Classes';
import AdminEventCalendar from '@/pages/Admin/EventCalendar';
import AdminExam from '@/pages/Admin/Exam';
import AdminLibrary from '@/pages/Admin/Library';
import AdminPerformance from '@/pages/Admin/Performance';
import SettingsProfile from '@/pages/Admin/SettingsProfile';
import AdminStudents from '@/pages/Admin/Students';
import AdminTeachers from '@/pages/Admin/Teachers';

/* STUDENT */
import StudentAnnouncement from '@/pages/Students/Announcement';
import StudentAssignment from '@/pages/Students/Assignment';
import StudentAttendance from '@/pages/Students/Attendance';
import StudentExam from '@/pages/Students/Exam';
import StudentLibrary from '@/pages/Students/Library';
import StudentPerformance from '@/pages/Students/Performance';
import StudentProfile from '@/pages/Students/Profile';

/* TEACHER */
import TeacherAnnouncement from '@/pages/Teachers/Announcement';
import TeacherAssignment from '@/pages/Teachers/Assignment';
import TeacherAttendance from '@/pages/Teachers/Attendance';
import TeacherClasses from '@/pages/Teachers/Classes';
import TeacherEvents from '@/pages/Teachers/Events';
import TeacherExam from '@/pages/Teachers/Exam';
import TeacherPerformance from '@/pages/Teachers/Performance';
import TeacherProfile from '@/pages/Teachers/Profile';
import TeacherStudents from '@/pages/Teachers/Students';
import TeacherTeachers from '@/pages/Teachers/Teachers';

/* NOT-FOUND */
import ErrorPage from '@/pages/ErrorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />

        {/* CHOOSE-USER */}
        <Route path='/choose-user' element={<ChooseUser />} />

        {/* AUTHENTICATIONS */}
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-register' element={<AdminRegister />} />
        <Route path='/student-login' element={<StudentLogin />} />
        <Route path='/teacher-login' element={<TeacherLogin />} />

        {/* DASHBOARDS */}
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/student/dashboard' element={<StudentDashboard />} />
        <Route path='/teacher/dashboard' element={<TeacherDashboard />} />

        {/* ADMIN */}
        <Route path='/admin/announcement' element={<AdminAnnouncement />} />
        <Route path='/admin/assignment' element={<AdminAssignment />} />
        <Route path='/admin/attendance' element={<AdminAttendance />} />
        <Route path='/admin/classes' element={<AdminClasses />} />
        <Route path='/admin/events' element={<AdminEventCalendar />} />
        <Route path='/admin/exam' element={<AdminExam />} />
        <Route path='/admin/library' element={<AdminLibrary />} />
        <Route path='/admin/performance' element={<AdminPerformance />} />
        <Route path='/admin/settings' element={<SettingsProfile />} />
        <Route path='/admin/students' element={<AdminStudents />} />
        <Route path='/admin/teachers' element={<AdminTeachers />} />

        {/* STUDENT */}
        <Route path='/student/announcement' element={<StudentAnnouncement />} />
        <Route path='/student/assignment' element={<StudentAssignment />} />
        <Route path='/student/attendance' element={<StudentAttendance />} />
        <Route path='/student/exam' element={<StudentExam />} />
        <Route path='/student/library' element={<StudentLibrary />} />
        <Route path='/student/performance' element={<StudentPerformance />} />
        <Route path='/student/profile' element={<StudentProfile />} />

        {/* TEACHER */}
        <Route path='/teacher/announcement' element={<TeacherAnnouncement />} />
        <Route path='/teacher/assignment' element={<TeacherAssignment />} />
        <Route path='/teacher/attendance' element={<TeacherAttendance />} />
        <Route path='/teacher/classes' element={<TeacherClasses />} />
        <Route path='/teacher/events' element={<TeacherEvents />} />
        <Route path='/teacher/exam' element={<TeacherExam />} />
        <Route path='/teacher/performance' element={<TeacherPerformance />} />
        <Route path='/teacher/profile' element={<TeacherProfile />} />
        <Route path='/teacher/students' element={<TeacherStudents />} />
        <Route path='/teacher/teachers' element={<TeacherTeachers />} />

        {/* NOT-FOUND */}
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
