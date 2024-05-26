import AdminLayout from '@/layouts/AdminLayout';

import Card from '@/components/Card';
import IndividualPerformance from '@/components/IndividualPerformance';
import SchoolPerformance from '@/components/SchoolPerformance';

const AdminPerformance = () => {
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudent: 200,
  };

  const individualPerformanceData = [
    {
      id: 1,
      name: 'Istiak Hossain Tushar',
      score: 90,
    },
    {
      id: 2,
      name: 'Rubaiyat Jahan Nishi',
      score: 85,
    },
    {
      id: 3,
      name: 'Israt Jahan Hira',
      score: 80,
    },
    {
      id: 4,
      name: 'Abdullah Al Mamun',
      score: 75,
    },
    {
      id: 5,
      name: 'Mahadi Hasan',
      score: 70,
    },
  ];

  return (
    <AdminLayout>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-bold uppercase'>School Performance</h2>
          <Card>
            <SchoolPerformance schoolPerformanceData={schoolPerformanceData} />
          </Card>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-xl font-bold uppercase'>
            Individual Performance
          </h2>
          <Card>
            {individualPerformanceData.map((student) => (
              <IndividualPerformance student={student} key={student.id} />
            ))}
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPerformance;
