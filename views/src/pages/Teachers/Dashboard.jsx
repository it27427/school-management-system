import TeacherLayout from '@/layouts/TeacherLayout';

import CountCard from '@/components/CountCard';

const Dashboard = () => {
  return (
    <TeacherLayout>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold uppercase'>Overview</h2>

        <div className='grid md:grid-cols-3 gap-4'>
          <CountCard>
            <h2 className='card-title'>Students</h2>
            <p>5</p>
          </CountCard>

          <CountCard>
            <h2 className='card-title'>Classes</h2>
            <p>5</p>
          </CountCard>

          <CountCard>
            <h2 className='card-title'>Assignments</h2>
            <p>5</p>
          </CountCard>

          <CountCard>
            <h2 className='card-title'>Events</h2>
            <p>20</p>
          </CountCard>

          <CountCard>
            <h2 className='card-title'>Exam</h2>
            <p>1</p>
          </CountCard>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default Dashboard;
