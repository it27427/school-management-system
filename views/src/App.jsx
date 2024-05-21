import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ChooseUser from '@/pages/Auth/ChooseUser';
import HomePage from '@/pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/choose-user' element={<ChooseUser />} />
      </Routes>
    </Router>
  );
};

export default App;
