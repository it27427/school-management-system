import Logo from '@/assets/images/logo/logo.webp';
import TeacherLoginForm from '@/components/TeacherLoginForm';

const TeacherLogin = () => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center text-center min-h-screen bg-sky-950'>
      <div className='flex flex-col gap-4 items-center justify-center text-center'>
        <figure className='flex items-center justify-center w-28 h-11'>
          <img src={Logo} alt='BRAND-LOGO' />
        </figure>

        <h2 className='text-xl font-bold text-white uppercase'>
          Teacher Login
        </h2>
      </div>

      <TeacherLoginForm />
    </div>
  );
};

export default TeacherLogin;
