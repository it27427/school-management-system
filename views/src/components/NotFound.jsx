import { useNavigate } from 'react-router-dom';

import notfound from '@/assets/images/not-found/not-found.svg';
import Button from './Button';

const NotFound = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col gap-6 items-center justify-center w-screen h-screen bg-red-200'>
      <figure className='w-72 h-72 flex items-center justify-center'>
        <img
          src={notfound}
          alt='NOT-FOUND-ICON'
          className='h-auto max-w-full object-cover'
        />
      </figure>
      <Button onClick={backToHome} className='btn btn-outline btn-base text-sm'>
        <i className='ri-arrow-left-line mt-0.5'></i> Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
