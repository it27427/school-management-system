import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ChooseUser from '@/pages/Auth/ChooseUser';
import HomePage from '@/pages/HomePage';

/* AUTHENTICATIONS */
import AdminLogin from '@/pages/Auth/AdminLogin';
import AdminRegister from '@/pages/Auth/AdminRegister';
import StudentLogin from '@/pages/Auth/StudentLogin';
import TeacherLogin from '@/pages/Auth/TeacherLogin';

/* NOT-FOUND */
import ErrorPage from '@/pages/ErrorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/choose-user' element={<ChooseUser />} />

        {/* AUTHENTICATION-PAGES */}
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-register' element={<AdminRegister />} />
        <Route path='/student-login' element={<StudentLogin />} />
        <Route path='/teacher-login' element={<TeacherLogin />} />

        {/* NOT-FOUND */}
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
