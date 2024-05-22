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

/* NOT-FOUND */
import ErrorPage from '@/pages/ErrorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
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

        {/* NOT-FOUND */}
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
