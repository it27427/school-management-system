import StudentLayout from '@/layouts/StudentLayout';

import CountCard from '@/components/CountCard';

const Dashboard = () => {
  return (
    <StudentLayout>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold uppercase'>Overview</h2>

        <div className='grid md:grid-cols-3 gap-4'>
          <CountCard>
            <h2 className='card-title'>Assignments</h2>
            <p>5</p>
          </CountCard>

          <CountCard>
            <h2 className='card-title'>Performances</h2>
            <p>20</p>
          </CountCard>

          <CountCard>
            <h2 className='card-title'>Terms</h2>
            <p>1</p>
          </CountCard>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Dashboard;
