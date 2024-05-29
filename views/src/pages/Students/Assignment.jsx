import Card from '@/components/Card';
import StudentLayout from '@/layouts/StudentLayout';

const Assignment = () => {
  return (
    <StudentLayout>
      <>
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold uppercase'>Assignments</h2>

          <div className='grid md:grid-cols-3 gap-4'>
            <Card></Card>
          </div>
        </div>
      </>
    </StudentLayout>
  );
};

export default Assignment;
