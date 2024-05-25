import BackToTop from '@/components/BackToTop';
import TeacherSidebar from '@/components/TeacherSidebar';

const TeacherLayout = ({ children }) => {
  return (
    <div className='flex items-start'>
      <div className='w-1/6 hidden lg:block'>
        <TeacherSidebar />
      </div>

      <div className='w-full lg:w-5/6'>
        <main>{children}</main>

        <BackToTop />
      </div>
    </div>
  );
};

export default TeacherLayout;
