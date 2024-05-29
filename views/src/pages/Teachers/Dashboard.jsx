import TeacherLayout from '@/layouts/TeacherLayout';

import CountCard from '@/components/CountCard';

const Dashboard = () => {
  return (
    <TeacherLayout>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold uppercase'>Overview</h2>

          <div className='grid md:grid-cols-3 gap-4'>
            <CountCard>
              <h2 className='card-title'>Total Students</h2>
              <p>50</p>
            </CountCard>

            <CountCard>
              <h2 className='card-title'>Total Teachers</h2>
              <p>20</p>
            </CountCard>

            <CountCard>
              <h2 className='card-title'>Total Classes</h2>
              <p>5</p>
            </CountCard>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold uppercase'>Recent Activity</h2>

          <div className='grid md:grid-cols-3 gap-4'></div>
        </div>

        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold uppercase'>Upcoming Events</h2>

          <div className='grid md:grid-cols-3 gap-4'></div>
        </div>
      </div>
    </TeacherLayout>
  );
};

export default Dashboard;
