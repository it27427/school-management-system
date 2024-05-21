import { useNavigate } from 'react-router-dom';

import Button from './Button';

const AuthList = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/choose-user');
  };

  return (
    <ul className='flex items-center gap-5'>
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleLogin}>Guest</Button>
    </ul>
  );
};

export default AuthList;
