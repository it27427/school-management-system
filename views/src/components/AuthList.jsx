import { useNavigate } from 'react-router-dom';

import Button from './Button';

const AuthList = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/choose-user');
  };

  return (
    <ul className='flex items-center gap-5'>
      <Button onClick={handleLogin} className='btn btn-info h-10 min-h-10'>
        Login
      </Button>
      <Button
        onClick={handleLogin}
        className='btn btn-outline btn-warning h-10 min-h-10'
      >
        Guest
      </Button>
    </ul>
  );
};

export default AuthList;
