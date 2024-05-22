import RegisterForm from '@/components/RegisterForm';

const AdminRegister = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-2xl'>Admin Register</h2>
      <RegisterForm />
    </div>
  );
};

export default AdminRegister;
