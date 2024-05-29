import StudentLayout from '@/layouts/StudentLayout';

const Announcement = () => {
  return (
    <StudentLayout>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold uppercase'>Announcements</h2>
      </div>
    </StudentLayout>
  );
};

export default Announcement;
