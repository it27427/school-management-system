import StudentLayout from '@/layouts/StudentLayout';

import CountCard from '@/components/CountCard';

const Dashboard = () => {
  return (
    <StudentLayout>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-bold uppercase'>Overview</h2>

          <div className='grid md:grid-cols-3 gap-4'>
            <CountCard>
              <h2 className='card-title'>Assignments</h2>
              <p>3</p>
            </CountCard>

            <CountCard>
              <h2 className='card-title'>Performance</h2>
              <p>2</p>
            </CountCard>

            <CountCard>
              <h2 className='card-title'>Term</h2>
              <p>1</p>
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
    </StudentLayout>
  );
};

export default Dashboard;
