import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ChooseUser from '@/pages/Auth/ChooseUser';
import HomePage from '@/pages/HomePage';

/* AUTHENTICATION-PAGES */
import AdminLogin from '@/pages/Auth/AdminLogin';
import StudentLogin from '@/pages/Auth/StudentLogin';
import TeacherLogin from '@/pages/Auth/TeacherLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/choose-user' element={<ChooseUser />} />

        {/* AUTHENTICATION-PAGES */}
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/student-login' element={<StudentLogin />} />
        <Route path='/teacher-login' element={<TeacherLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
