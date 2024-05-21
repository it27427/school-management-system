import notfound from '@/assets/images/not-found/not-found.svg';
import Button from './Button';

const NotFound = () => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center w-screen h-screen'>
      <figure className='w-72 h-72 flex items-center justify-center'>
        <img
          src={notfound}
          alt='NOT-FOUND-ICON'
          className='h-auto max-w-full object-cover'
        />
      </figure>
      <Button className='btn btn-primary'>Back to Home</Button>
    </div>
  );
};

export default NotFound;
