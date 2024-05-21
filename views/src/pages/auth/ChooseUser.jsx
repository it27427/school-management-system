import EmptyLayout from '@/layouts/EmptyLayout';
import { Link } from 'react-router-dom';

const ChooseUser = () => {
  return (
    <EmptyLayout>
      <div className='grid place-items-center space-y-0 h-screen md:space-y-0 lg:grid-cols-3 lg:space-x-3 p-5 bg-sky-300'>
        <div className='flex flex-col items-center justify-center text-center gap-3'>
          <h2 className='font-bold uppercase text-black'>Admin</h2>
          <Link to='/admin-login' className='btn btn-primary'>
            Login as Admin
          </Link>
        </div>

        <div className='flex flex-col items-center justify-center text-center gap-3'>
          <h2 className='font-bold uppercase text-black'>Student</h2>
          <Link to='/student-login' className='btn btn-primary'>
            Login as Student
          </Link>
        </div>

        <div className='flex flex-col items-center justify-center text-center gap-3'>
          <h2 className='font-bold uppercase text-black'>Teacher</h2>
          <Link to='/teacher-login' className='btn btn-primary'>
            Login as Teacher
          </Link>
        </div>
      </div>
    </EmptyLayout>
  );
};

export default ChooseUser;
