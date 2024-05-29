import TeacherLayout from '@/layouts/TeacherLayout';

const Students = () => {
  return (
    <TeacherLayout>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold uppercase'>Students</h2>

        <div className='grid md:grid-cols-3 gap-4'></div>
      </div>
    </TeacherLayout>
  );
};

export default Students;
