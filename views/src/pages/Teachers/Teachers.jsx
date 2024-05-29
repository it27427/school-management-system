import TeacherLayout from '@/layouts/TeacherLayout';

const Teachers = () => {
  return (
    <TeacherLayout>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold uppercase'>Teachers</h2>

        <div className='grid md:grid-cols-3 gap-4'></div>
      </div>
    </TeacherLayout>
  );
};

export default Teachers;
